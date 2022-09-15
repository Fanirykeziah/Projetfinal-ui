import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formulaire } from "../Formulaire/Formulaire"
import '../bootstrap/bootstrap.css';
import { Footer } from "../Footer/Footer";
import Modal from "../modal/Modal";
import logo from './image/logo.jpg';
import './offers.css';


export function Offers() {

    const navigate = useNavigate(); 
    const [show , setShow] = useState(false);
    const [data,setData] = useState([]);

	useEffect(() => {
		const promise = axios.get("/offers");
		promise.then((res) => {
			setData(res.data);
			console.log(res.data);
		})	
		.catch((err)=> {
			console.log(err);
		})
	}, [data]);
    
    const shoWindows = () => {
      setShow(!show)
      console.log(show);
    }

    return (
        <>
          <Modal isActive={show} handleModal={shoWindows}><Formulaire closeModal={shoWindows}/></Modal>
           <div className="divContainer">
            <div className="Navbar">
              <nav class="navbar navbar-expand-sm bg-light navbar-light">
              <div className="logo"><img src={logo} className="logo"/></div>
              <div className="btn6"><button type="btn" className="btn btn-outline-primary" onClick={() => navigate('/')}>Quitter</button></div>
              </nav>
            </div>
            <div className="page">
              <div className="title3"><h3>Les offres disponible pour les entreprises</h3></div>
              <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

              {
					               data?.map((elt, k) => (
                  <div class="col">
                    <div class="card mb-4 rounded-3 shadow">
                      <div class="card-header py-3">
                      <h4 class="my-0 fw-normal">{elt?.title}</h4>
                      </div>
                      <div class="card-body">
                       <ul class="list-unstyled mt-3 mb-4">
                        <p>{elt?.description}</p>
                        <p>{elt?.amount}</p>
                       </ul>
                       <button type="button" class="w-100 bt</del>n btn-lg btn-outline-primary"  onClick={()=> shoWindows()}>Acheter</button>
                      </div>
                    </div>
                  </div>
                   ))
				          }
              </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}