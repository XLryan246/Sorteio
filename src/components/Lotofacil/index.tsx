import { useContexto } from "../../hooks";
import lotoImage from '../../assets/trevo-lotofacil.png';
import './index.css';
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
// https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados

const Lotofacil: React.FC = () => {
    const { lotofacil } = useContexto();
    const [dezenas, setDezenas] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const linha1 = [], linha2 = [], linha3 = []
    if (lotofacil.dataApuracao) {
        for (let i = 0; i < 5; i++) {
            linha1.push(lotofacil.dezenas[i])
        }
        for (let i = 5; i < 10; i++) {
            linha2.push(lotofacil.dezenas[i])
        }
        for (let i = 10; i < 15; i++) {
            linha3.push(lotofacil.dezenas[i])
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
            <div id="loto-bloco-principal">
                <div >
                    <div id="loto-bloco-loteria">
                        <img src={lotoImage} alt="" />
                        <span id="loto-nome-loteria">LOTOFÁCIL</span>
                    </div>

                    <div id="loto-bloco-estimativa">
                        <div className="loto-texto-estimativa">
                            Estimativa de prêmio do próximo concurso. Sorteio em {" "}
                            {lotofacil.dataProximoConcurso}
                        </div>

                        <div id="loto-valor-estimativa">
                            R${(parseFloat(lotofacil.valorEstimadoProximoConcurso).
                                toFixed(2)).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        </div>
                    </div>
                </div>
                
                    <div id="loto-bloco-direita">
                        <div className="loto-linha-bola">
                            {
                                linha1.map((item, index) => {
                                    return (
                                        <div className="loto-bola" key={index}>{item} </div>
                                    )
                                })
                            }
                        </div>
                        <div className="loto-linha-bola">
                            {
                                linha2.map((item, index) => {
                                    return (
                                        <div className="loto-bola" key={index}>{item} </div>
                                    )
                                })
                            }
                        </div>
                        <div className="loto-linha-bola">
                            {
                                linha3.map((item, index) => {
                                    return (
                                        <div className="loto-bola" key={index}>{item} </div>
                                    )
                                })
                            }
                        </div>
                        {lotofacil.quantidadeGanhadores == 0 ? (
                            <div className="loto-ganhadores"> Acumulou! </div>) : (
                            <div className="loto-ganhadores"> {lotofacil.quantidadeGanhadores} Ganhadores</div>)}

                        <div className="loto-data-concurso"> {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso}
                        </div>
                    </div>
            </div>
      )}
        </>


    )
}

export default Lotofacil;