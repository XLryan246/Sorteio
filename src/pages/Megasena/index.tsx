import { useContexto } from "../../hooks";
import megaImage from '../../assets/trevo-megasena.png'
import Principal from "../../components";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Carregando from "../../components/Carregando/Carregando";
function Megasenaa() {

  const { megasena } = useContexto();
  const [Sorteado, setSorteado] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const linha1 = []
  if (megasena.dataApuracao) {
    for (let i = 0; i < 6; i++) {
      linha1.push(megasena.dezenas[i])
    }
  }
  useEffect(() => {
    const fakeAsyncCall = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fakeAsyncCall();
  }, []);
  const theme = {
    ColorNome: '#209869', //
    ColorBola: '#209869 ',
    ColorValorEstimado: '#209869',
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
      nome={"MEGA-SENA"} imagem={megaImage} dataProximoConcurso={megasena.dataProximoConcurso} valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso} linha={linha1} quantidadeGanhadores={megasena.quantidadeGanhadores} numeroDoConcurso={megasena.numeroDoConcurso} dataPorExtenso={megasena.dataPorExtenso}/>
    </ThemeProvider>
      )}
    </>
  )
}

export default Megasenaa;