/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import styled from 'styled-components';
import { getAuth, signOut } from "firebase/auth";



const Header = () => {

  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('usuario saliendo')
      // Sign-out successful.
      window.location.pathname = '/'
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <Menu>
      <figure>
        <img src={logo} alt="Logo" width={150} />
      </figure>
      <nav>
        <ul id='menu'>
          <li>
            <Link className='link' to='/detalle'>Detalle</Link>
          </li>
          <li>
            <Link className='link' to='/consulta'>Consulta</Link>
          </li>
          <li>
            <Link className='link' to='/cierre'>cierre</Link>
          </li>
          <li><a onClick={logOut} href='#'>Cerrar sesión</a></li>
        </ul>
      </nav>
    </Menu>
  );
}

export default Header;


const Menu = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #c6186c;
  position: fixed;
  top: 0;
`