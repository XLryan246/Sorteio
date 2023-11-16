import loteria from "../services/Loteria";
import { LoteriaProps,Props } from "../types";
import { createContext, useEffect, useState } from "react";


const Contexto = createContext({} as LoteriaProps); //mais importante

function Provider ({children} : any) {
    const [megasena, setMegasena] = useState({} as Props);
    const [timemania, settimemania] = useState({} as Props);
    const [quina, setquina] = useState({} as Props);
 
    useEffect( function (){
        loteria.get().then(
            (data:LoteriaProps) => {
                setMegasena(data.megasena);
                settimemania(data.timemania);
                setquina(data.quina);
            
                
            })
    }, []);

    return (
        <Contexto.Provider value={{megasena, timemania, quina}}>
            {children}
        </Contexto.Provider>
    );

}


export {Contexto, Provider};
