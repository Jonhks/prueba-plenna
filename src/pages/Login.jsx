import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import {login} from '../utils/firebase/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Login = ({history}) => {
const authApp = getAuth();

const [user, setUser] = useState('')

  onAuthStateChanged(authApp, (user) => {
    setUser(user)
  });

  useEffect(() => {
    console.log(user)
      if (user && window.location.pathname === '/') {
        window.location.pathname = '/detalle'
      } 
    //   else if(user === null && window.location.pathname !== '/'){
    //     window.location.pathname = '/'
    // }
  }, [history, user]);


  const loginuser = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {   
      login(email.value, password.value);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <SectionLogin>
      <figure>
        <img src={logo} alt="Logo plenna"  width={150}/>
      </figure>
      <Subtitle>Login</Subtitle>
      <ArticleContainerInputs onSubmit={loginuser}>
          <DivInput>
            <label htmlFor="user">Usuario</label>
            <Input className='input' id='user' type="email" placeholder='Ingresa tu usuario' name='email' />
          </DivInput>
          <DivInput>
            <label htmlFor="password">Contraseña</label>
            <Input className='input' id='password' type="password" placeholder='Ingresa tu contraseña'name='passwod'/>
          </DivInput>
          <BtnLogin>Enviar</BtnLogin>
      </ArticleContainerInputs>
    </SectionLogin>
  );
}

export default Login;

const SectionLogin = styled.section`
  width: 50%;
  height: 60vh;
  box-shadow: 10px 10px 50px 7px rgba(0,0,0,0.75);
  border-radius: 10px 10px 10px 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Subtitle = styled.h2`
  text-align: center;
`

const ArticleContainerInputs = styled.form`
  display: flex;
  width: 80%;
  height: 70%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
`

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const BtnLogin = styled.button`
  width: 100%;
  background-color: #7b1646;
  border: none;
  padding: 15px;
  border-radius: 10px;
  color: white;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #4d4d4d;
  margin-top: 10px;
  padding: 6px;
`
