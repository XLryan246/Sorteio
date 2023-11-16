import { useContexto } from "../../hooks";
import quinaImage from '../../assets/trevo-quina.png'
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from "react";
import Principal from "../../components";
import Carregando from "../../components/Carregando/Carregando";

function Quina() {

  const { quina } = useContexto();
  const [Sorteado, setSorteado] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const linha1 = []
  if (quina.dataApuracao) {
    for (let i = 0; i < 5; i++) {
      linha1.push(quina.dezenas[i])
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
    ColorNome: '#260085', //
    ColorBola: '#260085 ',
    ColorValorEstimado: '#260085',
    ColorBolaDentro: '#fff'
  };
  return (
    <>
    {isLoading ? (
         <Carregando />
      ) :(
    <ThemeProvider theme={{theme}}>
      <Principal
        theme={theme}
        nome={"QUINA"}
        imagem={quinaImage}
        dataProximoConcurso={quina.dataProximoConcurso}
        valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso}
        linha={linha1}
        quantidadeGanhadores={quina.quantidadeGanhadores}
        numeroDoConcurso={quina.numeroDoConcurso}
        dataPorExtenso={quina.dataPorExtenso}
      />
    </ThemeProvider>
      )}
    </>
  )
}

export default Quina;