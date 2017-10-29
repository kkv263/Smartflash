import React, { Component } from 'react';
import { StartWrapper, Face, FloatingText, Button, Text} from './styles/Start.style'
import { Link } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <StartWrapper>
        <Face src={require("./assets/face.svg")}></Face>
        <FloatingText right posY = "15%" posX="30%" speed="60s">स्वागत</FloatingText> 
        <FloatingText posY = "10%" posX="32%" speed="30s">欢迎</FloatingText>
        <FloatingText right posY = "25%" posX="15%" speed="40s">Welcome</FloatingText> 
        <FloatingText posY = "30%" posX="30%" speed="50s">Bienvenido</FloatingText> 
        <FloatingText right posY = "45%" posX="20%" speed="35s">환영</FloatingText>
        <FloatingText right posY = "55%" posX="10%" speed="50s">欢迎</FloatingText>
        <FloatingText posY = "65%" posX="30%" speed="90%">ยินดีต้อนรับ</FloatingText> 
        <FloatingText posY = "70%" posX="35%" speed="60s">أهلا بك</FloatingText> 
        <FloatingText right posY = "80%" posX="25%" speed="50s">Bienvenue</FloatingText> 
        <FloatingText posY = "75%" posX="10%" speed="40s">Välkommen</FloatingText>
        <FloatingText right posY = "5%" posX="5%" speed="70s">добро пожаловать</FloatingText> 
        <Text posX="8%" posY="25%">Stop writing your flashcards</Text>
        <Text posX="10%" posY="35%">Using your voice is faster</Text>
        <Link to = "/checkout">
          <Button> Get Started</Button>
        </Link>
      </StartWrapper>
    );
  }
}

export default Start;