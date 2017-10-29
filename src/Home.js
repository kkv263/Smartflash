import React, { Component } from 'react';
import { Text, Logo, Navbar, Background1, 
         ScrollAnimation, ScrollBall} from './styles/Home.style'
import Start from './Start'; 


class Home extends Component {
  render() {
    return (
      <div>
      <Background1>
        <Navbar>
         <Logo src={require("./assets/flashlogo.svg")}></Logo>
        </Navbar> 
        <Text fontSize="4.5em" top="5%">Level up your flashcards</Text>
        <Text fontSize="1em">Take control of your studying</Text>
        <Text fontSize="1em">Voice controlled application </Text>
        <Text fontSize="1em">Powered by Alexa</Text>
        <Text fontSize="1em" top="14%" faded> Scroll for more</Text>
        <ScrollAnimation>
            <ScrollBall></ScrollBall>
        </ScrollAnimation>
      </Background1>
      <Start></Start>
      </div>
    );
  }
}

export default Home;