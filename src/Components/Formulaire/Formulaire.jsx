import React, { useState } from "react";
import './formulaire.css';
import '../bootstrap/bootstrap.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Formulaire({ closeModal }) {

    const navigate = useNavigate();
    const [ responsableName , setResponsableName ] = useState();
    const [ responsableFirstName , setResponsableFirstName ] = useState();
    const [ title , setTitle ] = useState();
    const [ email , setEmail ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ description , setDescription ] = useState();
    const [ loading , setLoading ] = useState(false);

  const data = {
    id: 1,
    responsableName: responsableName ,
    responsableFirstName: responsableFirstName,
    title: title,
    description: description,
    email: email,
    mobile: mobile
}

const postCompany = async() => {
    await axios.post("http://localhost:8080/company", [data])
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
            <div className="Title"><h5>Nouvelle entreprise</h5></div>
              <div className="partOne">
                <div className="group1">
                  <label htmlFor="name">Nom(s) du responsable</label>
                  <input type="name" onChange={(e) => setResponsableName(e.target.value)}/>
                </div>
                <div className="group1">
                 <label htmlFor="firstName">Prénom(s) du responsable</label>
                 <input type="firstName" onChange={(e) => setResponsableFirstName(e.target.value)}/>
                </div>
                <div className="group1">
                 <label htmlFor="name">Nom de l'entreprise</label>
                 <input type="name" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="group1">
                  <label htmlFor="text">Description</label>
                  <input type="lieu" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="group1">
                  <label htmlFor="text">Email</label>
                  <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="group1">
                  <label htmlFor="mobile">Mobile</label>
                  <input type="phone" onChange={(e) => setMobile(e.target.value)}/>
                </div>
              </div>
              <div className="bouton">
                <button className="btn btn-primary" onClick={() => {
                    postCompany();
                    setLoading(true);
                }}>Confirmer</button>
                <button className="btn1" onClick={() => closeModal() }>Annuler</button>
              </div>
         </div>
        </>
    )
}