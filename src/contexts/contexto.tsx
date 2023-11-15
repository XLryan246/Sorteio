import loteria from "../services/Loteria";
import { LoteriaProps,Props } from "../types";
import { createContext, useEffect, useState } from "react";


const Contexto = createContext({} as LoteriaProps); //mais importante

function Provider ({children} : any) {
    const [megasena, setMegasena] = useState({} as Props);
    const [lotofacil, setLotofacil] = useState({} as Props);
    const [quina, setquina] = useState({} as Props);
 
    useEffect( function (){
        loteria.get().then(
            (data:LoteriaProps) => {
                setMegasena(data.megasena);
                setLotofacil(data.lotofacil);
                setquina(data.quina);
            })
    }, []);

    return (
        <Contexto.Provider value={{megasena, lotofacil, quina}}>
            {children}
        </Contexto.Provider>
    );

}


export {Contexto, Provider};
