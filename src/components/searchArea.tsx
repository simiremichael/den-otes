import React from 'react';
import styled from 'styled-components';

const Coontainer = styled.div`
width: 100%;
height: 4rem;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
@media only screen and (max-width: 900px) {
    margin: 1rem 0 0.5rem 0;
  }
`
const Form = styled.form`
flex-wrap: wrap;
align-items: center;
`
const Input1 = styled.input`
background-color: #dcdcdc;
margin: 0.5rem 0 0.5rem 1rem;
height: 2rem;
border-radius: 5px;
border: none;
width: 18rem;
@media only screen and (max-width: 900px) {
    display: none;
  }
`
const Input2 = styled.input`
background-color: #dcdcdc;
margin-left: 1rem;
height: 2rem;
border-radius: 5px;
border: none;
width: 18rem;
@media only screen and (max-width: 900px) {
    margin: 0.5rem 0 1.5rem 1rem;
  }
`
const Buttion = styled.button`
background: rgb(70,97,246);
background: radial-gradient(circle, rgba(70,97,246,1) 0%, rgba(21,71,150,1) 100%);
padding: 0 0.5rem;
color: #ffffff;
margin-left: 1rem;
width: 6rem;
height: 2rem;
border-radius: 5px;
@media only screen and (max-width: 900px) {
    margin: 0.5rem 0 1.5rem 1rem;
  }
`
const Paragraph = styled.p`
color: #dcdcdc;
`

function SearchArea() {
  return (
    <Coontainer>
    <Paragraph>Subscribe to our newletter</Paragraph>
    <Form>
    <Input1 type='text'></Input1>
    <Input2 type='text'></Input2>
    <Buttion type='submit'>Send</Buttion>
    </Form>
    </Coontainer>
  )
}

export default SearchArea