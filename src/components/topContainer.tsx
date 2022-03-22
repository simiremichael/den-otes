import React from 'react';
import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
import img from '../images/image1.jpg'

const Container = styled.div`
width: 100%;
height: 30rem;
background: rgb(5,15,108);
background: radial-gradient(circle, rgba(5,15,108,1) 99%, rgba(10,49,181,1) 100%);
display: flex;
justify-content: center;

@media only screen and (max-width: 900px) {
  flex-wrap: wrap;
  height: auto;
}
`
const LeftContainer = styled.div`
width: 57%;
height: 25rem;
padding: 1rem 1rem 1rem 0;
margin: 4rem 0 0 0;
@media only screen and (max-width: 900px) {
  width: 100%;
  justify-content: center;
  margin: 0.5rem 1rem 0.5rem 1rem;
  padding: 0;
  height: 50%;
 }
`
const RightContainer = styled.div`
width: 40%;
height: 24rem;
box-sizing: border-box;
border-radius: 5px;
padding: 1rem 0;
margin: 5rem 0 0 0;
background-color: #ffffff;
@media only screen and (max-width: 900px) {
  width: 100%;
  justify-content: center;
padding: 0;
margin: 1rem 1rem 0.5rem 1rem;
height: 50%;
 }
 @media only screen and (min-width: 1100px) {
  width: 35%;
 }
`
const Header = styled.h1`
margin: 1.5rem 1rem 0 1rem;
font-size: 4vmin;
font-weight: bold;
@media only screen and (min-width: 1300px) {
  margin-top: 2rem;
 }
`
const Paragraph = styled.p`
margin: 0rem 1rem;
font-size: 2.2vmin
`
const Img = styled.img`
width: 100%;
height: 24rem;
border-radius: 5px;
margin: 0 auto;
`

function TopContainer() {
  return (
    <Container>
       <LeftContainer>
         <Img src={img} alt='factotry=img' />
       </LeftContainer>
       <RightContainer>
         <Header>Where does it come from</Header>
         <Paragraph>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
         </Paragraph>
         <Header>Where does it come from</Header>
         <Paragraph>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
         </Paragraph>
        </RightContainer>
        </Container>
  )
}

export default TopContainer