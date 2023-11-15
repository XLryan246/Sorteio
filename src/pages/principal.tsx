import { useContext } from "react";
import { Contexto } from "../contexts/contexto";
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import Quina from "../components/Quina";
import Navbar from "../components/Navbar";


export default function Principal() {
    const {megasena} = useContext(Contexto);
    return (
        <>
        <div className="principal_bloco">
        {/* <Navbar /> */}
            <Megasena />
            <Lotofacil />
            <Quina />
        </div>
        </>
    );
}