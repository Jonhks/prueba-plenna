import React from 'react';
import styled from 'styled-components';

import Form from '../components/Form'
import Perfil from '../components/Perfil'

const Consult = () => {
  return (
    <Container>
      <Perfil />

      <Form />
    </Container>
  );
}

export default Consult;

const Container = styled.section`
  width: 70%;
  height: 90%;
  border: 1px solid black;
  box-shadow: 10px 10px 50px 7px rgba(0,0,0,0.75);
  border-radius: 10px 10px 10px 10px;
  margin-top: 11%;
`