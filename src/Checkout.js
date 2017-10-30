import React, { Component } from 'react';
import { CheckWrapper, Text, PiWrapper} from './styles/Checkout.style'
import PieChart from 'react-minimal-pie-chart';

var axios = require('axios');

var divStyle = {
  position: "absolute",
  top: "15%",
  left: "5%"
};

class Checkout extends Component {
  constructor(props){
    super(props);
    this.setState = {
      correct: 5,
      incorrect: 5
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3000/v1/scores")
    .then(response => {
        this.setState({
            correct: response.data.incorrect,
            incorrect: response.data.correct
        });
    }).catch(error => {
        console.log(error); return Promise.reject(error);
    }); 
  }
  
  render() {
  var correct = this.state.correct;
  var incorrect = this.state.incorrect;
  var total = correct + incorrect;
    return (
      <CheckWrapper>
        <Text white posX="25%" posY="2%">Let's check your results!</Text>
        <PiWrapper>
          <PieChart style={divStyle} animate animationDuration = "1000" radius ="50"
            data={[
                { value: correct, key: 1, color: '#FF5964' },
                { value: incorrect, key: 2, color: '#56E39F' },
            ]}
          />
          <Text posX="50%" posY="2%">Total questions: {total}</Text>
          <Text posX="75%" posY="35%">Correct</Text>
          <Text posX="50%" posY="35%">Incorrect</Text>
          <Text posX="75%" posY="50%">{correct}</Text>
          <Text posX="50%" posY="50%">{incorrect}</Text>
        </PiWrapper>
      </CheckWrapper>


        );
  }
}

export default Checkout;