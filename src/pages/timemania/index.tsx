import { useContexto } from "../../hooks";
import timemaniaImage from '../../assets/trevo-timemania.png';
import { useEffect, useState } from "react";
import Principal from "../../components";
import { ThemeProvider } from "styled-components";
import Carregando from "../../components/Carregando/Carregando";

const Timemania = () => {
  const { timemania } = useContexto();
  const [isLoading, setIsLoading] = useState(true);
  const linha1 = [];
  if (timemania.dataApuracao) {
    for (let i = 0; i < 7; i++) {
      linha1.push(timemania.dezenas[i])
    }

  }

  useEffect(() => {
    const fakeAsyncCall = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    fakeAsyncCall();
  }, []);

  const theme = {
    ColorNome: '#00ff48',
    ColorBola: 'yellow',
    ColorValorEstimado: '#00ff48',
    ColorBolaDentro: '#049645'
  };

  return (
    <>{isLoading ? (
      <Carregando />
    ) :(
      <ThemeProvider theme={{ theme }}>
        <Principal theme={theme} nome={"TIMEMANIA"} imagem={timemaniaImage} dataProximoConcurso={timemania.dataProximoConcurso} valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso} linha={linha1} quantidadeGanhadores={timemania.quantidadeGanhadores} numeroDoConcurso={timemania.numeroDoConcurso} dataPorExtenso={timemania.dataPorExtenso} />
      </ThemeProvider>
    )}
    </>
  );
};

export default Timemania;
