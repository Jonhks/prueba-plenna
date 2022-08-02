import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDocs, collection } from "firebase/firestore";
import {db} from '../utils/firebase/firebase'


import Perfil from '../components/Perfil'

const Cierre = () => {

  const [data, setData] = useState([{
    padecimientos: '',
    exploracion: '',
    diagnostico: '',
    receta: '',
    notas: ''
  }]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "data"));
    const arrData = [{
      padecimientos: '',
      exploracion: '',
      diagnostico: '',
      receta: '',
      notas: ''
    }];
    querySnapshot.forEach((doc) => {
      arrData.push(doc.data());
    });
    return arrData;
  }

  useEffect(() => {
    getData()
      .then(result => {
        setData([...result]);
      });
  }, []);
  const {diagnostico, exploracion, notas, padecimientos, receta} = data[data.length -1 || 0]

  return (
    <Container>
      <Perfil />
      <h2 style={{textAlign: 'center'}}>Cierre de consulta</h2>
      <Section>
        <Article>
          <div>
            <label htmlFor="tipo-consulta">Tipo de consulta:</label>
            <select name="tipo" id="tipo-consulta">
              <option value="selecciona">--Selecciona--</option>
              <option value="basica">Básica</option>
              <option value="plenna">Plenna</option>
              <option value="plus">Plus</option>
            </select>
          </div>     
          <div>
            <label htmlFor="estudios">Necesita estudios médicos:</label>
            <select name="estudios" id="estudios">
              <option value="selecciona">--Selecciona--</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="servicios">Servicos:</label>
            <select name="servicios" id="servicios">
              <option value="selecciona">--Selecciona--</option>
              <option value="implante">Implante Subdermico</option>
              <option value="siu">SIU</option>
              <option value="diu">DIU</option>
              <option value="otro">Otro</option>
              <option value="otro-mas">Otro más</option>
            </select>
          </div>
          <div>
            <label htmlFor="productos">Productos:</label>
            <select name="productos" id="productos">
              <option value="selecciona">--Selecciona--</option>
              <option value="copa">Copa menstrual</option>
              <option value="juguete">Juguete sexual</option>
              <option value="otro-juguete">Otro juguete</option>
              <option value="otro-juguete-mas">Otro más</option>
            </select>
          </div>
        </Article>
        <Article>
          <div>
            <p>Padecimientos: {padecimientos}</p>
          </div>
          <div>
            <p>Exploracion: {exploracion}</p>
          </div>
          <div>
            <p>Diagnostico: {diagnostico}.</p>
          </div>
          <div>
            <p>Receta: {receta}</p>
          </div>
          <div>
            <p>Notas: {notas}</p>
          </div>
        </Article>
      </Section>
    <BtnLogin className="button" type="submit">Guardar</BtnLogin>
    </Container>
  );
}

export default Cierre;

const Container = styled.section`
  width: 70%;
  height: 80%;
  border: 1px solid black;
  box-shadow: 10px 10px 50px 7px rgba(0,0,0,0.75);
  border-radius: 10px 10px 10px 10px;
  margin-top: 5%;
`

const BtnLogin = styled.button`
  width: 95%;
  background-color: #7b1646;
  border: none;
  padding: 15px;
  border-radius: 10px;
  margin: 20px;
  color: white;
`

const Section = styled.section`
  height: 55%;
  display: flex;
`

const Article = styled.article`
  width: 50%;
  padding: 20px;
  div{
    display: flex;
    flex-direction: column;
  }
  select{
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
  }
  label{
    margin: 5px;
  }
` 