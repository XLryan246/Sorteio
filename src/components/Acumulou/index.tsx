import React, {FC} from 'react';
import styled from "styled-components";
interface Acumulou {
    quantidadeGanhadores: number;
}


const Acumulou: FC<Acumulou> = ({quantidadeGanhadores}) => {
    return (
        <>
        <MegaTextoAcumulou>
        {quantidadeGanhadores == 0 ? (
            'Acumulou!' ) : (
            `${quantidadeGanhadores} Ganhadores`)}
        </MegaTextoAcumulou>
        </>
    );
    }
    
    
const MegaTextoAcumulou = styled.div`
color: #143da4;
font-size: 1.2rem;
font-weight: 600;
margin: 0 15px 15px;
`


export default Acumulou;