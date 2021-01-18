import React, { useState, useEffect} from 'react'
import URL from "../settings";
import '../App.css';


export default function EsportTeams() {
    const url = URL + '/api/esportteams'

    const[esportTeamsData, setEsportTeamsData] = useState('')

    function getEsportTeams() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setEsportTeamsData(data))
            .catch((err) => console.log("An error has occurred."))
    }

        useEffect (() => {
            getEsportTeams();
        }, [])


    
    return (
        <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <h2>Esport Teams</h2>
            <p><b>Name:</b> {esportTeamsData.teamName}</p>
            <p><b>Price/Year:</b> {esportTeamsData.pricePerYear}</p>
            <p><b>Minimum age:</b> {esportTeamsData.minAge}</p>
          </div>
        </div>
      </div>
    )
}