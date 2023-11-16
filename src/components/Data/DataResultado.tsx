import React from 'react';
import styled from "styled-components";

interface DataProps {
    dataPorExtenso: string;
    numeroDoConcurso: number;
}

const DataResultado: React.FC<DataProps> = ({ dataPorExtenso, numeroDoConcurso }) => {
    return (
        <>
        <MegaDataConcurso>
             {numeroDoConcurso} - {dataPorExtenso}
        </MegaDataConcurso>
        </>
    );  
}

const MegaDataConcurso = styled.div`
margin: 0 15px 15px;
font-size: 0.9rem;
color: #4c556c;  `;

export default DataResultado;