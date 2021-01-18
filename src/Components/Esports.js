import React, { useState, useEffect } from 'react'
import URL from "../settings";
import '../App.css';


export default function Esports() {
  const url = URL + '/api/esports/all'
  const [esports, setEsports] = useState(null);

  const fetchData = async () => {
    const response = await fetch(url);
    setEsports(response.data);
  };

  return (
    <div className="Esports">
      <h1>Esports</h1>
      <h2>Fetch a list of different Esports</h2>

      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      <div className="esports">
        {esports &&
          esports.map((esport, index) => {
            const esportName = esport.name.join(', ');
            const description = esport.description.join(', ');

            return (
              <div className="esport" key={index}>
                <h2>{esportName}</h2>

                <div className="details">
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  )

  //____________________________________________________________________________
  // const [esportsData, getEsports] = useState('');

  // useEffect(() => {

  //   getAllEsports();

  // }, [])

  // const getAllEsports = () => {
  //   fetch(url)
  //     .then((response) => {
  //       const allEsports = response.data;
  //       getEsports(allEsports);
  //     })
  //     .catch(error => console.error(`Error: ${error}`));
  // }

  // return (
  //   <Esports esportsData={esportsData} />
  // )
  //___________________________________________________________________________________
  // const getAllEsports = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setEsportsData(data))
  //     .catch((err) => console.log("An error has occurred."))
  // }


  // function makeEsportsTable() {
  //   getAllEsports()
  //     .then(data => {
  //       const esports = esportsData;
  //       const tableRows = esports.map(esport => `
  //     <tr>
  //       <td>${esport.id}</td>
  //       <td>${esport.name}</td>
  //       <td>${esport.description}</td>
  //     </tr>
  //     `)
  //       const tableRowsAsString = tableRows.join("");
  //       document.getElementById("tbody").innerHTML = tableRowsAsString;

  //     })
  // }
  // makeEsportsTable();
  // return (
  //   //   <div className="container mt-3">
  //   //   <div className="row">
  //   //     <div className="col-6">
  //   //       <h2>Esports</h2>
  //   //       <p><b>Fact:</b> {catfactData.text}</p>
  //   //       <p><b>Created At:</b> {catfactData.createdAt}</p>
  //   //       <p className="time">{catfactData.time}</p>
  //   //       <button onClick={getCatFact}>Get a new fact</button>
  //   //     </div>
  //   //   </div>
  //   // </div>
  //   <div style="min-height: 200px;">
  //     <table className="table" style="width: 90%">
  //       <thead>
  //         <tr>
  //           <td>ID</td>
  //           <td>First Name</td>
  //           <td>Last name</td>
  //           <td>Phone</td>
  //           <td>Street</td>
  //           <td>Zip</td>
  //           <td>City</td>
  //         </tr>
  //       </thead>
  //       <tbody id="tbody"></tbody>
  //     </table>
  //   </div>
  // )

}