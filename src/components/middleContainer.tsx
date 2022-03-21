import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 25rem;
@media only screen and (max-width: 700px) {
    flex-wrap: wrap;
    height: auto;
  }
`
const CardContainer = styled.div`
width: 100%;
height: 100%;
display: flex;

align-items: center;
justify-content: space-evenly;
@media only screen and (max-width: 700px) {
    background-color: #020d69;
    flex-wrap: wrap;
  }
`
const  Card = styled.div`
width: 30rem;
height: 20rem;
margin: 0.5rem 1rem;
border-radius: 5px;
background-color: #ffffff;
align-content: space-between;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
const Header = styled.h1`
font-size: 20px;
font-weight: bold;
margin: 1.5rem 0;
`
const Paragraph = styled.p`
margin: 1.5rem;
`
const Button = styled.button`
width: 60%;
background: rgb(70,97,246);
background: radial-gradient(circle, rgba(70,97,246,1) 0%, rgba(21,71,150,1) 100%);
color: #fff;
border-radius: 5px;
margin: 2.5rem 0 0 0;
padding: 3px;
`

function MiddleContainer() {
  return (
    <Container>
        <CardContainer>
            <Card>
                <Header>Where can I get some</Header>
                <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</Paragraph>
                <Button type='submit'>View</Button>
            </Card>

            <Card>
                <Header>Where can I get some</Header>
                <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</Paragraph>
                <Button type='submit'>View</Button>
            </Card>
        </CardContainer>
    </Container>
  )
}

export default MiddleContainer