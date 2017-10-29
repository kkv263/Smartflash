import styled, { keyframes } from 'styled-components';
import back from '../assets/back.png'

const scroll = keyframes`
0% { opacity: 1; }

100% { 
opacity:0;
transform: translateY(25px);
}
`

export const Text = styled.p`
font-family: 'Fredoka One', cursive;
color: #FFF;
font-size: ${props => props.fontSize};
padding-top: ${props => props.top};
opacity: ${props => props.faded ? 0.2 : 1}
`

export const Logo = styled.img`
position:absolute;
top: 15%;
left: -32%;
height:85%;
width:85%;
`
export const Navbar = styled.div`
position:relative;
height:10vh;
width:100%;
`

export const Background1 = styled.div`
background-image: url(${back});
text-align:center;
height:108vh;
width:100%;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const ScrollAnimation = styled.div`
position:absolute;
bottom: 7%;
left: 49%;
width: 20px;
height:40px;
border-radius:500px;
border: 2px solid #FFF;
`

export const ScrollBall = styled.div`
animation: ${scroll} linear 1.5s infinite;
position:absolute;
width:10px;
height:10px;
margin-left: 25%;
margin-top: 2px;
border-radius:50%;
background-color:#FFF;
`
