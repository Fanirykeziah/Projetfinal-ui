import axios from "axios";
import React, { useState } from "react";
import '../bootstrap/bootstrap.css';

export function AddOffers({closeModal}) {

  const [ title , setTtitle ] = useState();
  const [ description , setDescription ] = useState();
  const [ amount , setAmount ] = useState();
  const [ loading , setLoading ] = useState(false);

  const data = {
    id: 1,
    title: title ,
    description: description,
    amount: amount,
}

const postOffers = async() => {
    await axios.post("http://localhost:8080/Offers", [data])
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
            <div className="Title"><h5>Ajout d'une offre</h5></div>
              <div className="partOne">
                <div className="group1">
                  <label htmlFor="name">Titre</label>
                  <input type="name" onChange={(e) => setTtitle(e.target.value)}/>
                </div>
                <div className="group1">
                  <label htmlFor="firstName">Description</label>
                  <input type="firstName" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="group1">
                 <label htmlFor="name">Prix</label>
                 <input type="name" onChange={(e) => setAmount(e.target.value)}/>
                </div>
              <div className="bouton">
                <button className="btn btn-primary" onClick={() => {
                    postOffers();
                    setLoading(true);
                }}>Confirmer</button>
                <button className="btn1" onClick={() => closeModal()}>Annuler</button>
              </div>
         </div>
        </div>
        </>
    )
}