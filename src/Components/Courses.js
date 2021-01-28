import React, { useState, useEffect } from 'react'
import { render } from "react-dom";
import URL from "../settings";
import '../App.css';

const url = URL + '/api/courses/all'

function Courses() {
  
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(url).then(res => {
        return res.json();
      });

      setCourses(data);
      console.log(data);
    }
    fetchData();
  }, []);


  return (
    <div className="container mt-3">
      {courses.map(course => (
        <div className="row">
          <div className="col-6">
          <h4>{course.name}</h4>
            <p>{course.description}</p>
          </div>
        </div>
      ))}
      
    </div>
  );

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

export default Courses;