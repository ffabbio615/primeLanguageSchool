import "./Footer.scss";
import React from "react";

export default function Footer(){

    function currentYear(){
        const date = new Date();
        const currentYear = date.getFullYear();
        return currentYear;
    }

    return(
        <>
        
        <footer className="footer">
            <p>® {currentYear()} - The Prime Language School | Todos os direitos reservados - CNPJ 55.387.913/0001-02 <br></br> Desenvolvido Por Fábio Marques</p>
        </footer>
        
        </>
    )
}