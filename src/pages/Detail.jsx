import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.png'
import paciente from '../assets/images/paciente.jpg'


const Detail = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, a hic, suscipit placeat enim natus explicabo adipisci cumque dolores asperiores magni mollitia. Aspernatur alias assumenda, recusandae at accusantium vel reiciendis tempora labore, suscipit nam veniam itaque, ipsum odit deleniti temporibus consequuntur ipsa voluptas! Iusto rerum tempora quos sed tenetur quod atque, aspernatur saepe laudantium, laboriosam eaque rem excepturi nam omnis nobis adipisci? Veniam consequuntur laborum, quas perferendis quae quisquam sequi odio, ducimus numquam quidem, exercitationem totam? Magni porro soluta modi quaerat, sit dolor consequuntur deserunt omnis culpa beatae nobis cum ratione cumque consequatur nisi odit repellendus. Accusantium provident totam ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt quod facere tenetur molestiae vero culpa maiores quos eveniet. At dignissimos molestias deleniti numquam qui reiciendis excepturi officiis ipsa tempora! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum commodi velit est a sed exercitationem recusandae ullam officiis dignissimos quae, nemo, eligendi accusantium sapiente nulla id corporis vitae cumque quas. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error incidunt eaque laborum nesciunt eius? Ad numquam nobis sunt vel repellat rerum ex deleniti animi quas recusandae fuga dicta cum est veritatis quidem culpa eius provident quasi exercitationem voluptate, dolores neque distinctio quae voluptas. Nam ut repellendus dolorum quisquam odio repellat!'
  return (
    <ContainerDetail>
      <HeaderDetail>
      <figure>
        <img src={logo} alt="Logo plenna" width={100} />
      </figure>
      <figure>
        <img src={paciente} alt="foto" width={100} />
      </figure>
      </HeaderDetail>
      <h2 style={{textAlign: 'center'}}>Detalle de paciente</h2>

      <SectionInfo>
      <Datos>
      <Dato>
          <h3 className='dato'>Nombre: </h3>
          <p className='dato'> Mariana perèz</p>
        </Dato>
        <Dato>
          <h3 className='dato'>Edad: </h3>
          <p className='dato'> 28</p>
        </Dato>
        <Dato>
          <h3 className='dato'>Peso: </h3>
          <p className='dato'> 60kg</p>
        </Dato>
        <Dato>
          <h3 className='dato'>Estatura: </h3>
          <p className='dato'> 1.68cm</p>
        </Dato>
        <Dato>
          <h3 className='dato'>alergias Reportadas </h3>
          <p className='dato'> ninguna</p>
        </Dato> 
      </Datos>
      <DatoHistorial>
        <h3>Historial de consultas</h3>
        <Historial defaultValue={text}>
        </Historial>
      </DatoHistorial>
      </SectionInfo>
      
    </ContainerDetail>
  );
}

export default Detail;

const ContainerDetail = styled.section`
  width: 70%;
  height: 80%;
  border: 1px solid black;
  box-shadow: 10px 10px 50px 7px rgba(0,0,0,0.75);
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%
`

const HeaderDetail = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #6a6767;
`

const SectionInfo = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
`
const Datos = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`

const Dato = styled.div`
  display: flex;
  align-items: center;
`

const DatoHistorial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  align-items: center;
`

const Historial = styled.textarea`
  width: 80%;
  height: 65%;
`