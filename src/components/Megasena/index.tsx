import { useContexto } from "../../hooks";
import megaImage from '../../assets/trevo-megasena.png'
import './index.css'
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
function Megasena() {

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

  return (
    <>
    <Navbar />
      {isLoading ? (
        <h1 id="loading">Carregando...</h1>
      ) :(
      <div id="mega-bloco-principal">
        <div>
          <div id="mega-bloco-loteria">
            <img src={megaImage} alt="" />
            <span id="mega-nome-loteria">MEGA-SENA</span>
          </div>

          <div id="mega-bloco-estimativa">
            <div id="mega-texto-estimativa">
              Estimativa de prêmio do próximo concurso. Sorteio em {" "}
              {megasena.dataProximoConcurso}
            </div>

            <div id="mega-valor-estimativa">
              R${(parseFloat(megasena.valorEstimadoProximoConcurso).
                toFixed(2)).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </div>
          </div>

        </div>
        <div id="mega-bloco-direita">
          <div className="mega-linha-bola">

            {
              linha1.map((item, index) => {
                return (
                  <div className="mega-bola" key={index}>{item} </div>
                )
              })
            }
          </div>
          {megasena.quantidadeGanhadores == 0 ? (
            <div className="mega-ganhadores"> Acumulou! </div>) : (
            <div className="mega-ganhadores"> {megasena.quantidadeGanhadores} Ganhadores</div>)}

          <div className="mega-data-concurso"> {megasena.numeroDoConcurso} - {megasena.dataPorExtenso} </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Megasena;