import React from 'react'
import styled from 'styled-components';
import img2 from '../images/image2.jpg'
import img3 from '../images/images3.jpg'
import img4 from '../images/image4.jpg'
import img5 from '../images/image5.jpg'

const Container = styled.div`
width: 100%;
height: 24rem;
@media only screen and (max-width: 900px) {
  background-color: #020d69;
  height: auto;
  flex-direction: column;
  column-count: 2;
}

@media only screen and (max-width: 600px) {
    background-color: #020d69;
    height: auto;
    flex-wrap: wrap;
    flex-direction: column;
  column-count: 1;
  }
`

const CardContainer = styled.div`
width: 100%;
height: 100$;
display: flex;
@media only screen and (max-width: 900px) {
  background-color: #020d69;
  height: auto;
  flex-direction: column;
  column-count: 2;
}

justify-content: center;
@media only screen and (max-width: 600px) {
  flex-wrap: wrap;
    height: auto;
    flex-direction: column;
    column-count: 1;
  }
`
const Card = styled.div`
width: 16rem;
box-sizing: border-box;
justify-content: center;
border-radius: 5px;
background-color: #ffffff;
margin: 0.5rem 1rem;
height: 20rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
@media only screen and (max-width: 900px) {
    width: 95%;
    padding-bottom: 0.5rem;
    height: auto;
    margin: 1rem;
    align-self: center;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 0.5rem;
    height: auto;
    margin: 0.5rem auto;
  }
`
const Title = styled.h1`
font-size: 4vmin;
font-weight: bold;
margin: 1.5rem 0 0.5rem 0;
@media only screen and (max-width: 900px) {
    margin: 1rem 0 1rem 0;
  }
`
const CardButton = styled.button`
background: rgb(70,97,246);
background: radial-gradient(circle, rgba(70,97,246,1) 0%, rgba(21,71,150,1) 100%);
width: 100%;
color: #fff;
border-radius: 5px;
margin-top: 2.5rem;
padding: 8px;
@media only screen and (max-width: 900px) {
    margin: 1.5rem 5%;
    width: 90%;
  }
`
const Img = styled.img`
width: 100%;
height: 10rem;
border-radius: 5px;
@media only screen and (max-width: 900px) {
    height: auto;
    margin: 0  5%;
    width: 90%;
  }
`
const Button = styled.button`
background-color: #FFA600;
margin: 0 0 0.5rem 0;
padding: 5px;
align-self: center;
width: 12rem;
color: #ffffff;
border-radius: 5px;
@media only screen and (max-width: 900px) {
    width: 85%;
    margin-top: 1.5rem;
  }
`

function ButtomContainer() {
  return (
    <>
      <Container>
    <CardContainer>
      <Card>
       <Title>Why do we use it</Title>
      <Img src={img2 } alt='chemical image' />
      <CardButton type='submit'>Details</CardButton>
      </Card>
      <Card>
       <Title>Why do we use it</Title>
      <Img src={img3 } alt='chemical image' />
      <CardButton type='submit'>Details</CardButton>
      </Card>
      <Card>
       <Title>Why do we use it</Title>
      <Img src={img4 } alt='chemical image' />
      <CardButton type='submit'>Details</CardButton>
      </Card>
      <Card>
       <Title>Why do we use it</Title>
      <Img src={img5 } alt='chemical image' />
      <CardButton type='submit'>Details</CardButton>
      </Card>
    </CardContainer>
    </Container>
    <Button type='submit'>View More</Button>
    </>
  )
}

export default ButtomContainer