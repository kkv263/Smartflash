import styled, { keyframes } from 'styled-components';

const floatMail = keyframes`
from {transform:translate(0, 0px);}
65% {transform:translate(0, 15px);}
to {transform: translate(0, -0px);    }    
}
`

const fadeIn = keyframes`
0% {opacity:0}
100% {opacity:1}
` 

export const CheckWrapper = styled.div`
animation: ${fadeIn} .5s ease-in;
position:relative;
width: 100%;
height: 100vh;
background-color: #393E41;
`

export const PiWrapper = styled.div `
top:30%;
left:10%;
position:absolute;
border: 16px solid #FFE74C;
border-radius: 10px;
width: 80%;
height:400px;
background-color:white;
`

export const Text = styled.p`
top: ${props => props.posY};
left: ${props => props.posX};
position: absolute;
font-family: 'Fredoka One', cursive;
font-size: 3em;
color: ${props => props.white ? "#FFFFFF" : "#393E41"};
`
export const Mail = styled.img`
animation: ${floatMail} 3s infinite ease-in-out;
width:50%
height:50%;
position: absolute;
top: 45%;
left: 44%;
`

