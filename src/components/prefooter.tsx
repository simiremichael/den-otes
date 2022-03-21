import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 7rem;
background: rgb(70,97,246);
background: radial-gradient(circle, rgba(70,97,246,1) 0%, rgba(21,71,150,1) 100%);
justify-content: center;
@media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`
const InnerContainer = styled.div`
width: 100%;
height: 100%;
@media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`

const Paragraph = styled.p`
color: white;
height: 100%;
width: 50%;
padding: 1.5rem 1rem 2rem 1rem;
margin:  0 40% 0 10%;
text-align: start;
@media only screen and (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`

function Prefooter() {
  return (
    <Container>
    <InnerContainer>
      <Paragraph>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
      </Paragraph>
      </InnerContainer>
    </Container>
  )
}

export default Prefooter