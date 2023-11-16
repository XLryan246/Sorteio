import React from 'react';
import styled from "styled-components";

interface CarregandoProps {}

const Carregando: React.FC<CarregandoProps> = () => {
  return (
    <Loading>
      <h1>Carregando...</h1>
    </Loading>
  );
}; 



const Loading = styled.div`
text-align: center;
margin: 50vh;`;


export default Carregando;

