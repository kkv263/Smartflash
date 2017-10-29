import React, { Component } from 'react';
import { CheckWrapper, Text, PiWrapper} from './styles/Checkout.style'
import PieChart from 'react-minimal-pie-chart';

var divStyle = {
  position: "absolute",
  top: "15%",
  left: "5%"

};



class Checkout extends Component {
  render() {
  var correct = 7;
  var incorrect = 3;
  var total = correct + incorrect;
    return (
      <CheckWrapper>
        <Text white posX="25%" posY="2%">Let's check your results!</Text>
        <PiWrapper>
          <PieChart style={divStyle} animate animationDuration = "1000" radius ="50"
            data={[
                { value: 15, key: 1, color: '#FF5964' },
                { value: 10, key: 2, color: '#56E39F' },
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