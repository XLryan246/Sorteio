import React from 'react';
import styled from "styled-components";
import Resultado from '../Resultado';
import Acumulou from '../Acumulou';
import DataResultado from '../Data/DataResultado';

interface DireitaProps {
    linha: any[];
    quantidadeGanhadores: number;
    numeroDoConcurso: number;
    dataPorExtenso: string;
    theme: {
        ColorNome: string,
        ColorBola: string,
        ColorValorEstimado: string,
        ColorBolaDentro: string
    }
}

const Direita: React.FC<DireitaProps> = ({ linha, quantidadeGanhadores, numeroDoConcurso, dataPorExtenso , theme}) =>{
    return (
        <MegaBlocoDireita>
            <Resultado theme={theme} linha={linha} />
            <Acumulou quantidadeGanhadores={quantidadeGanhadores}/>
            <DataResultado numeroDoConcurso={numeroDoConcurso} dataPorExtenso={dataPorExtenso} />
        </MegaBlocoDireita>
    );
    }

const MegaBlocoDireita = styled.div`
margin-left: 50px;
`

export default Direita;

