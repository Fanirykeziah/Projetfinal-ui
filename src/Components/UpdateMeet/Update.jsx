import React, { useState } from "react";
import './update.css';
import '../bootstrap/bootstrap.css';
import axios from "axios";

export function Update({closeModal}) {

  const [ loading,setLoading ] = useState(false);
  const [ location , setLocation ] = useState();
  const [ date , setDate ] = useState();
  const [ time , setTime ] = useState();
  const [ description , setDescription ] = useState();
  
  const putMeet = async() => {
    const data = {
        id: 0,
        location: location,
        date:date,
        time : time,
        description: description
    }
    
    console.log(data.id);
    await axios.put("http://localhost:8080/meet", data)
    .then((res) => {
        console.log("nice");
        setLoading(false);
    })
    .catch((err) => {
        console.log("error");
        setLoading(false);
    })
}
const handleSubmit = (e) => {
    e.preventDefault();
 };

    return (
        <>
         <div className="PageContainer">
            <div className="Title"><h5>Modification d'un rendez-vous</h5></div>
              <div className="partOne">
                <div className="group1">
                  <label htmlFor="name">Nom de l'entreprise</label>
                  <input type="name"/>
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
                  <label htmlFor="type">Heure</label>
                  <input type="text" onChange={(e) => setTime(e.target.value)}/>
                </div>
                <div className="group1">
                  <label htmlFor="text">Description</label>
                  <input type="lieu" onChange={(e) => setDescription(e.target.value)}/>
                </div>
              </div>
              <div className="bouton">
                <button className="btn btn-primary"
                onClick={() => {
                  putMeet();
                  setLoading(true);
              }}>Confirmer</button>
                <button className="btn1" onClick={() => closeModal()}>Annuler</button>
              </div>
         </div>
        </>
    )
}