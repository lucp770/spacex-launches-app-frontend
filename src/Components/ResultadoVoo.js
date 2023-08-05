import React from "react";


export default function ResultadoVoo(props){
        let {numero, logo, missao, dataDeLanc,foguete,resultado, video} = props.data;
        console.log(props);

        console.log({numero, logo, missao, dataDeLanc,foguete,resultado, video});

        return(
                <tr>
                    <td>{numero}</td>
                    <td>{logo}</td>
                    <td>{missao}</td>
                    <td>{dataDeLanc}</td>
                    <td>{foguete}</td>
                    <td>{resultado}</td>
                    <td>{video}</td>
                </tr>
    )

}


/*
    <>
        <td>{numero}</td>
        <td>{logo}</td>
        <td>{missao}</td>
        <td>{dataDeLanc}</td>
        <td>{foguete}</td>
        <td>{resultado}</td>
        <td>{video}</td>
    </>
*/


/*

    <div className="resultado-voo">
        <div>{numero}</div>
        <div>{logo}</div>
        <div>{missao}</div>
        <div>{dataDeLanc}</div>
        <div>{foguete}</div>
        <div>{resultado}</div>
        <div>{video}</div>
    </div>
*/



/*

com tabela não parece mesmo dar certo !!!

TODO: fazer a implementação de ResultadoVoo com div.

*/

