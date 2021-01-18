import React, { useState, useEffect } from 'react'
import URL from "../settings";
import '../App.css';

export default function Esports(props) {

    const displayEsports = (props) => {
        const {menu, esports} = props;

        if (esports.length > 0) {
            return(
                esports.map((esport, index) => {
                    console.log(esport);
                    return(
                        <div className='esport' key={esport.id}>
                            <h3 classname="esport_name">{esport.name}</h3>
                            <p className="esport_description">{esport.description}</p>
                            <p classname="esport_teams">{esport.esportTeams}</p>
                        </div>
                    )
                })
            )
        } else {
            return (<h3>No esports yet...</h3>)
        }
    }
    return(
        <>
        {displayEsports(props)}
        </>
    )
}