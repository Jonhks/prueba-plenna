import React from 'react';
import styled from 'styled-components';
import paciente from '../assets/images/paciente.jpg'

const Perfil = () => {
  return (
    <Paciente>
      <figure>
        <img src={paciente} alt="Paciente" width={100} />
      </figure>
      <span>Nombre: Mariana Peréz</span>
      <span>Edad: 28 años</span>
      <span>Peso: 68 kg</span>
      <span>Estatura: 1.68 cm</span>
      <span>Alergias: ninguna</span>
    </Paciente>
  );
}

export default Perfil;

const Paciente = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  background-color: #f9f9f9;
`