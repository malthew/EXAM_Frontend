import React, { useState, useEffect} from 'react'
import URL from "../settings";
import '../App.css';


export default function SchoolClasses() {
    const url = URL + '/api/schoolclasses'

    const[schoolClassesData, setSchoolClassesData] = useState('')

    function getSchoolClasses() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setSchoolClassesData(data))
            .catch((err) => console.log("An error has occurred."))
    }

        useEffect (() => {
          getSchoolClasses();
        }, [])


    
    return (
        <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <h2>Classes</h2>
            <p><b>Semester:</b> {schoolClassesData.semester}</p>
            <p><b>Number of Students:</b> {schoolClassesData.numberOfStudents}</p>
          </div>
        </div>
      </div>
    )
}