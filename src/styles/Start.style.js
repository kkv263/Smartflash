import styled, { keyframes } from 'styled-components'

const floatLeft = keyframes`
0% { transform: translateX(50px)}
50% { transform: translateX(-50px)}
100% { transform: translateX(50px)}
`

const floatRight = keyframes`
0% { transform: translateX(-50px)}
50% { transform: translateX(50px)}
100% { transform: translateX(-50px)}
`

export const StartWrapper = styled.div`
position:relative;
height:100vh;
width:100%;
`

export const Face = styled.img`
position: absolute;
bottom: 40%;
left: 10%;
z-index: 3;
`

export const FloatingText = styled.h1`
animation: ${props => props.right ? floatRight : floatLeft} ${props => props.speed} infinite;
transition: opacity .5s ease;
color: #FFF;
position: absolute;
bottom: ${props => props.posY};
left: ${props => props.posX};
font-family: 'Fredoka One', cursive;
color: #393E41;
font-size: ${props => props.fontSize};
opacity: 0.2;
  &:hover {
    opacity:1;
  }
`

export const Button = styled.div`
text-align:center;
vertical-align:middle;
position: absolute;
bottom: 35%;
right:16%;
width: 250px;
height: 40px;    
border-radius: 25px;
background-color: #FF5964;
font-family: 'Fredoka One', cursive;
font-size: 2em;
color: #FFF;
cursor: pointer;
transition: transform .5s ease;
  &:hover {
    transform:scale(1.1);
  }
`

export const Text = styled.p`
position:absolute;
font-size: 2em;
font-family: 'Fredoka One', cursive;
color: #393E41;
top: ${props => props.posY};
right: ${props => props.posX};
`

