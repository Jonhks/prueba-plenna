import {React, useState} from 'react';
import {db} from '../utils/firebase/firebase'
import styled from 'styled-components';
import { collection, addDoc } from "firebase/firestore";


const Form = () => {

  const [datos, setDatos] = useState({
    padecimientos: '',
    exploracion: '',
    diagnostico: '',
    receta: '',
    notas: ''
  })
  const [error, setError] = useState(false)

  const submitForm =  async e => {
    e.preventDefault()
    // validar quelos inputs tengan contenido
    const {padecimientos, exploracion, diagnostico, receta, notas} = datos;
    if( 
      padecimientos.trim() === '' || 
      exploracion.trim() === '' || 
      diagnostico.trim() === '' || 
      receta.trim() === '' || 
      notas.trim() === '' 
    ){
      setError(true)
      setTimeout(() => {
        setError(false)
      },2000)
      return 
    }
    try {
      const docRef = await addDoc(collection(db, "data"), datos);
      console.log("Document written with ID: ", docRef.id);
      window.location.pathname = '/cierre' 
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handlerChange = async e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <Formulario onSubmit={submitForm}>
      <h2 style={{textAlign: 'center'}}>Consulta</h2>
      <TextArea
        name='padecimientos'
        placeholder='Padecimientos'
        onChange={handlerChange}
      />
      <TextArea
        name='exploracion'
        placeholder='Exploración'
        onChange={handlerChange}
      />
      <TextArea
        name='diagnostico'
        placeholder='Diagnóstico'
        onChange={handlerChange}
      />
      <TextArea
        name='receta'
        placeholder='Receta'
        onChange={handlerChange}
      />
      <TextArea
        name='notas'
        placeholder='Notas'
        onChange={handlerChange}
      />
      <BtnLogin className="button" type="submit">Guardar</BtnLogin>
      {error && <Error>Todos los campos son necesarios</Error> }
    </Formulario>
    </Container>
  );
}

export default Form;

const Error = styled.p`
  color: red;
  text-align: center;
  font-weight: bold;
`

const Container = styled.section`
  width: 100%;
  height: 100%;
`

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextArea = styled.textarea`
  margin: 14px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 10px;
  height: 6vh;
`

const BtnLogin = styled.button`
  width: 95%;
  background-color: #7b1646;
  border: none;
  padding: 15px;
  border-radius: 10px;
  margin: 0px auto;
  color: white;
`