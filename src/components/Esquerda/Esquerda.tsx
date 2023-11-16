import { FC } from "react";
import Estimativa from "../Estimativa/Estimativa";
import Nomeloteria from "../NomeLoteria/NomeLoteria";
import styled from "styled-components";

interface EsquerdaProps {
    nome: string,
    imagem: string,
    dataProximoConcurso: string,
    valorEstimadoProximoConcurso: string
    theme: {
        ColorNome: string,
        ColorBola: string,
        ColorValorEstimado: string,
    }
}

const Esquerda: FC<EsquerdaProps> = ({  nome, imagem, dataProximoConcurso, valorEstimadoProximoConcurso ,theme}) => {
    return (
        <>
            <MegaBlocoLoteria>
                <Nomeloteria  theme={theme} nome={nome} imagem={imagem} blocoId="mega" />
            </MegaBlocoLoteria>

            <MegaBlocoEstimativa>
                <Estimativa theme={theme} dataProximoConcurso={dataProximoConcurso} valorEstimadoProximoConcurso={valorEstimadoProximoConcurso} />
            </MegaBlocoEstimativa>
        </>
    );
}

const MegaBlocoLoteria = styled.div`
display: flex;
`
const MegaBlocoEstimativa = styled.div`
width: 15rem;
margin-left: 45px;
margin-top: 20px;
`



export default Esquerda;