import { useContexto } from "../../hooks";
import quinaImage from '../../assets/trevo-quina.png'
import './index.css'
import { useEffect, useState } from "react";
import Navbar from "../Navbar";

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
      }, 2000); 
    };
    fakeAsyncCall();
  }, []);

  return (
    <>
    <Navbar />
      {isLoading ? (
        <h1 id="loading">Carregando...</h1>
      ) :(
      <div id="quina-bloco-principal">
        <div>
          <div id="quina-bloco-loteria">
            <img src={quinaImage} alt="" />
            <span id="quina-nome-loteria">quina</span>
          </div>

          <div id="quina-bloco-estimativa">
            <div id="quina-texto-estimativa">
              Estimativa de prêmio do próximo concurso. Sorteio em {" "}
              {quina.dataProximoConcurso}
            </div>

            <div id="quina-valor-estimativa">
              R${(parseFloat(quina.valorEstimadoProximoConcurso).
                toFixed(2)).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </div>
          </div>

        </div>
        <div id="quina-bloco-direita">
          <div className="quina-linha-bola">

            {
              linha1.map((item, index) => {
                return (
                  <div className="quina-bola" key={index}>{item} </div>
                )
              })
            }
          </div>
          {quina.quantidadeGanhadores == 0 ? (
            <div className="quina-ganhadores"> Acumulou! </div>) : (
            <div className="quina-ganhadores"> {quina.quantidadeGanhadores} Ganhadores</div>)}

          <div className="quina-data-concurso"> {quina.numeroDoConcurso} - {quina.dataPorExtenso} </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Quina;