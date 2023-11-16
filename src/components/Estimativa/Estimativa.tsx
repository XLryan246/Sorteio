import { FC } from "react";
import styled from "styled-components";


interface EstimativaProps {
    dataProximoConcurso: string,
    valorEstimadoProximoConcurso: string
    theme: {
        ColorNome: string,
        ColorBola: string,
        ColorValorEstimado: string,
    }
}


const Estimativa: FC<EstimativaProps> = ({ dataProximoConcurso, valorEstimadoProximoConcurso , theme }) => {
    return (
        <>
        <MegaTextoEstimativa>
            Estimativa de prêmio do próximo concurso. Sorteio em {" "}
            {dataProximoConcurso}
        </MegaTextoEstimativa>
        <MegaValorEstimativa color={theme.ColorValorEstimado}>
                R${(parseFloat(valorEstimadoProximoConcurso).
                    toFixed(2)).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </MegaValorEstimativa>
        </>
    );
}

const MegaTextoEstimativa = styled.div`
    font-size: 0.9rem;
    color: #4c556c;  
`

const MegaValorEstimativa = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 15px;
    color: ${(props) => props.color}; 
`

export default Estimativa;