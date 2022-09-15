import React, { useState } from "react";
import './addmeet.css';
import '../bootstrap/bootstrap.css';
import axios from "axios";


export function Addmeet({closeModal}) {
  
  const [ location , setLocation ] = useState();
  const [ date , setDate ] = useState();
  const [ time , setTime ] = useState();
  const [ description , setDescription ] = useState();
  const [ loading , setLoading] = useState();

  const data = {
    id: 1,
    location: location ,
    date: date,
    time: time,
    description: description
}

const postMeet = async() => {
    await axios.post("http://localhost:8080/meet", [data])
    .then((res) => {
        setLoading(false);
        console.log("nice");
    })
    .catch((err) => {
        setLoading(false);
        console.log("error");
    })
} 

    return (
        <>
         <div className="PageContainer">
            <div className="Title"><h5>Nouveau rendez-vous</h5></div>
              <div className="partOne">
                <div className="group1">
                  <label htmlFor="name">Nom de l'entreprise</label>
                  <input type="name" />
                </div>
                <div className="group1">
                 <label htmlFor="firstName">Lieu</label>
                 <input type="firstName" onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className="group1">
                 <label htmlFor="name">Date</label>
                 <input type="name" onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="group1">
                  <label htmlFor="type" onChange={(e) => setTime(e.target.value)}>Heure</label>
                  <input type="text" />
                </div>
                <div className="group1">
                  <label htmlFor="text" onChange={(e) => setDescription(e.target.value)}>Description</label>
                  <input type="lieu"/>
                </div>
              </div>
              <div className="bouton">
                <button className="btn btn-primary" onClick={() => {
                    postMeet();
                    setLoading(true);
                }
              }>Confirmer</button>
                <button className="btn1" onClick={() => closeModal()}>Annuler</button>
              </div>
         </div>
        </>
    )
}