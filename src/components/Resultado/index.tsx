import React from 'react';
import styled from "styled-components";

interface ResultadoProps {
  linha: any[];
  theme: {
    ColorNome: string,
    ColorBola: string,
    ColorValorEstimado: string,
    ColorBolaDentro: string
  }
}

const Resultado: React.FC<ResultadoProps> = ({ linha, theme }) => {
  return (
    <MegaLinhaBola>
      {linha.map((item, index) => {
        return (
          <MegaBola
            color={theme.ColorBola}
            colorDentro={theme.ColorBolaDentro}
            key={index}
          >
            <TextoBola colorDentro={theme.ColorBolaDentro}>{item}</TextoBola>
          </MegaBola>
        )
      })}
    </MegaLinhaBola>
  );
};

const MegaLinhaBola = styled.div`
  display: flex;
`;

const MegaBola = styled.div<{ color: string; colorDentro: string }>`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0px 15px 15px;
  padding: 10px;
  border-radius: 1.2rem;
  color: #fff;
  background-color: ${(props) => props.color};
`;

const TextoBola = styled.span<{ colorDentro: string }>`
  color: ${(props) => props.colorDentro};
`;

export default Resultado;
