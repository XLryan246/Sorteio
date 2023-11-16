import Navbar from "../pages/Navbar";
import Esquerda from "./Esquerda/Esquerda";
import styled, { ThemeProvider } from "styled-components";
import Direita from "./Direita/Direita";

interface PrincipalProps {
  nome: string,
  imagem: string,
  dataProximoConcurso: string,
  valorEstimadoProximoConcurso: string
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
 const Principal: React.FC<PrincipalProps> = ({ theme, nome, imagem, dataProximoConcurso, valorEstimadoProximoConcurso, linha, quantidadeGanhadores, numeroDoConcurso, dataPorExtenso }) => {
  return (
    <>
    
      <Navbar />
      <MegaPrincipal>
        <div>
        <Esquerda theme={theme} nome={nome} imagem={imagem} dataProximoConcurso={dataProximoConcurso} valorEstimadoProximoConcurso={valorEstimadoProximoConcurso} />
        </div>
      <Direita theme={theme} linha={linha} quantidadeGanhadores={quantidadeGanhadores} numeroDoConcurso={numeroDoConcurso} dataPorExtenso={dataPorExtenso} />
      </MegaPrincipal>
    
    </>
    
  );
}


const MegaPrincipal = styled.div`
display: flex;
margin-left: 50px;
border-bottom: 1px solid #ddd;
padding: 30px 0px;
font-family: Roboto;
display: flex;
`


export default Principal;
