import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./image/logo.jpg";
import './ado.css';
import Pagination from "../Pagination/Pagination";
import { Footer } from "../Footer/Footer";
import { AddOffers } from "../AddOffers/AddOffers";
import Modal from "../modal/Modal";
import { UpdateOffers } from "../UpdateOffers/UpdateOffers";
import axios from "axios";

export function Ad() {
  const navigate = useNavigate();
  const [page, setPage] =  useState(0);
  const [users, setUsers] =  useState([]);
  const [show , setShow] = useState(false);
  const [data,setData] = useState([]);

	useEffect(() => {
		const promise = axios.get("/offers?page="+page+"&page_size=10");
		promise.then((res) => {
			setData(res.data);
			console.log(res.data);
		})	
		.catch((err)=> {
			console.log(err);
		})
	}, [data]);

  const pendAll = () => {
     setShow(!show)
     console.log(show);
  }

  const shoWindow = () => {
    setShow(!show)
    console.log(show);
 }
    
    return(
        <>
          <Modal isActive={show} handleModal={pendAll}><AddOffers closeModal={pendAll}/></Modal>
          <Modal isActive={show} handleModal={shoWindow}><UpdateOffers closeModal={shoWindow}/></Modal>
          <div className="AdminContainer">
            <div className="Navbar">
              <nav class="navbar navbar-expand-sm navbar-light">
                <div className="logo"><img src={logo} className="logo"/></div>
                <div className="btn8"><button className="btn btn-outline-warning" onClick={() => navigate("/admin")}>Entreprise</button></div>
              </nav>
            </div>
            <div className="body">
              <div className="PageContain">
                <div className="AdminHomePage">
                  <div className="menu">
                    <h1>Liste des Offres</h1>
                    <div className="btn10"><button className="btn btn-success" onClick={() => pendAll()}>Ajouter une offre</button></div>
                  </div>
                  <div className="table">
                    <div className="te">
                      <div className="search"><input type="search" /><button className="btn btn-primary">Search</button></div>
                    </div>
                    <table className="table-striped rounded-2 shadow text-center tab">
			                <thead>
		                    <th>Titre</th>
                        <th>Description</th>
                        <th>Prix</th>
	                    </thead>
	                    <tbody>
                      {
					               data?.map((elt, k) => (
						            <tr>
							            <td className="p-2">{elt?.title}</td>
							            <td className="p-2">{elt?.description}</td>
							            <td className="p-2">{elt?.amount}</td>
                          <td><button className="btn btn-warning" onClick={() => shoWindow()}>Modifier</button></td>
		      			        </tr>
					          ))
				          }
	                    </tbody>
                    </table>
                  </div>
            <Pagination page={page} setPage={setPage} data={users}/>
            </div>
            </div>
            </div>
          <Footer/>
          </div>

        </>
    )
}