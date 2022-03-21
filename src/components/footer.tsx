import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 10rem;
justify-content: center;
background-color: #000000;
@media only screen and (max-width: 900px) {
  flex-wrap: wrap;
  height: auto;
}
`
const InnerContainer = styled.div`
margin: 0 10%;
height: auto;
padding: 1.5rem;
flex-wrap: wrap;
@media only screen and (max-width: 900px) {
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  margin: 0;
}
`

const Link = styled.a`
width: 80%;
color: #ffffff;
height: auto;
margin: 0 5%;
@media only screen and (max-width: 900px) {
  width: 100%;
}
`
const Paragraph = styled.p`
width: 80%;
text-align: start;
height: auto;
color: #ffffff;
margin: 0 10%;
padding-bottom: 2rem;
@media only screen and (max-width: 900px) {
  width: 100%;
  margin: 0;
  padding: 1rem;
}
`

function Footer() {
  return (
    <Container>
    <InnerContainer>
      <Link>Link</Link>
      <Link>Link</Link>
      <Link>Link</Link>
      <Link>Link</Link>
      <Link>Link</Link>
      <Link>Link</Link>
    </InnerContainer>
    <Paragraph>
    Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum
    </Paragraph>
    </Container>
  )
}

export default Footer