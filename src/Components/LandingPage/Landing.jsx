import React from "react";
import '../bootstrap/bootstrap.css';
import './Landing.css';
import logo from './image/logo.jpg';
import a from './image/company.jpg';
import b from './image/computer.jpg';
import c from './image/cotisse.png';
import d from './image/cotisseVip.png';
import e from './image/design.webp';
import f from './image/massage.jpg';
import g from './image/oeuil.jpg';
import h from './image/terrestre.jpeg';
import i from './image/travel.jpg';
import j from './image/tree.jpg';
import { Footer } from "../Footer/Footer";
import {  useNavigate } from "react-router-dom";

export function Landing() {

   const navigate = useNavigate();

    return (
    <>
      <div className="contain">

        <div className="Navbar">
         <nav class="navbar navbar-expand-sm bg-light navbar-light">
          <div className="logo"><img src={logo} className="logo"/></div>
         </nav>
        </div>
        <div className="HomePageContainer1">
          <div className="Title1"><h1>Bienvenue sur MYCALENDAR-MEET</h1></div>
          <div className="flexrow">
            <div className="header">
              <div className="user"><h5>Spécial client</h5></div>
              <div className="headerBody">
                <p>Prenez vos rendez-vous sans devoir se déplacer</p>
                <p>Gagnez du temps</p>
                <p>Facilite la gestion de votre carnet de rendez-vous professionelle</p>
                <p>Connectez vous en tant qu'utilisateur si vous voulez gérer votre agenda de rendez-vous professionelle</p>
                <button className="btn btn-primary" onClick={() => navigate("/Login")}>Utilisateur</button>
              </div>
            </div>
            <div className="header">
              <div className="company"><h5>Spécial entreprise</h5></div>
              <div className="headerBody">
                <p>Donnez aux utilisateurs la possibilité de prendre un rendez-vous en ligne dans votre entreprise</p>
                <p>Faire partie de nos partenaires</p>
                <p>Gagnez plus de temps</p>
                <p>Augmentez le nombre de client qui vous consulte</p>
                <p>Être professionelle et numérique</p>
                <button className="btn btn-success" onClick={() => navigate("/LandingCompany")}>Devenir partenaire</button>
              </div>
            </div>
            <div className="header">
              <div className="admin"><h5>Spécial Administrateur</h5></div>
              <div className="headerBody">
                <p>Réserver aux administrateurs</p>
                <p>Seul l'administrateur peut se connecter sur cette partie</p>
                <p>Accès à tout</p>
                <button className="btn btn-warning" onClick={() => navigate("/signup")}>Se connecter</button>
              </div>
            </div>
          </div>  
        </div>
        <div className="HomePageContainer2">
          <div className="title2"><h1>En partenariat avec ces entreprises</h1></div>
          <div className="row">
            <img src={a}/> <img src={b}/> <img src={c}/> <img src={d}/> <img src={e}/>
          </div>
          <div className="row">
            <img src={f}/> <img src={g}/> <img src={h}/> <img src={i}/> <img src={j}/>
          </div>
        </div>
        <Footer/>
      </div> 
      </>
    )
}