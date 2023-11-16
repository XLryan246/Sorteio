import { FC } from "react";
import styled from "styled-components";

interface NomeLoteriaProps {
    nome: string,
    imagem: string,
    blocoId: string,
    theme: {
        ColorNome: string,
        ColorBola: string,
        ColorValorEstimado: string,
    }
}

const Nomeloteria: FC<NomeLoteriaProps> = ({ nome, imagem, blocoId, theme }) => {
    return (
        <>
            <img src={imagem} alt="" />
            <MegaNomeLoteria color={theme.ColorNome}>
                <span>{nome}</span>
            </MegaNomeLoteria>
        </>
    );
}

const MegaNomeLoteria = styled.span<{ color: string }>`
    font-size: 1.8rem;
    font-weight: 600;
    margin-left: 10px;
    color: ${(props) => props.color};
`;

export default Nomeloteria;
