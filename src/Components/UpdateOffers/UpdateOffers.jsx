import axios from "axios";
import React, { useState } from "react";
import '../bootstrap/bootstrap.css';

export function UpdateOffers({ closeModal }) {

  const [ loading,setLoading ] = useState(false);
  const [ title , setTitle ] = useState();
  const [ description , setDescription ] = useState();
  const [ amount , setAmount ] = useState();
  
  const putOffers = async() => {
    const data = {
        id: 0,
        title: title,
        description: description,
        amount: amount
    }
    
    console.log(data.id);
    await axios.put("http://localhost:8080/offers", data)
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
            <div className="Title"><h5>Modification d'une offre</h5></div>
              <div className="partOne">
                <div className="group1">
                  <label htmlFor="name">Titre</label>
                  <input type="name" onChange={(e) => setTitle(e.target.value)}/>
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
                  putOffers();
                  setLoading(true);
              }}>Confirmer</button>
                <button className="btn1" onClick={() => closeModal()}>Annuler</button>
              </div>
         </div>
        </div>
        </>
    )
}