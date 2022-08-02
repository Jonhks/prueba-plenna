// import { useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from '../pages/Login';
import Detail from '../pages/Detail';
import Consult from '../pages/Consult';
import Cierre from '../pages/Cierre';
import Header from './Header';
import Error404 from '../pages/Error404';

const App = () => {
  // let { pathname } = useLocation();
  // console.log(pathname)
  
//   useEffect(() => {
//   console.log('history')
//   const menu = document.getElementById('menu')
//   if(+ window.location.pathname === '/'){
//     window.location.pathname === '/' ?  menu.style.display = 'none' : menu.style.display = 'block' 
//   }
// }, []);

  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/detalle" element={<Detail/>} />
          <Route exact path="/consulta" element={<Consult/>} />
          <Route exact path="/cierre" element={<Cierre/>} />
          <Route exact path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div `
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
