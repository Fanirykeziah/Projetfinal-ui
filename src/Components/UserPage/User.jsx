import React, { useEffect, useState } from "react";
import './user.css';
import '../bootstrap/bootstrap.css';
import logo from './image/logo.jpg';
import {  useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Pagination } from "../Pagination/Pagination";
import Modal from "../modal/Modal";
import { Addmeet } from "../AddNewMeet/Addmeet";
import { Update } from "../UpdateMeet/Update";
import axios from "axios";

export function User() {
  const [page, setPage] =  useState(0);
  const [users, setUsers] =  useState([]);
  const [show , setShow] = useState(false);
  const [data,setData] = useState([]);

	useEffect(() => {
		const promise = axios.get("/meet?page="+page+"&page_size=10");
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

  const updateShow = () => {
    setShow(!show)
    console.log(show);
 }

  const navigate = useNavigate();

    return (
        <>
        <Modal isActive={show} handleModal={pendAll}><Addmeet closeModal={pendAll}/></Modal>
        <Modal isActive={show} handleModal={updateShow}><Update closeModal={updateShow}/></Modal>
          <div className="PageContain">
            <div className="Nav">
              <nav className="navbar navbar-expand-sm navbar-light">
                <div className="logo"><img src={logo} className="logo"/></div>
                <div className="btn2"><button type="btn" className="btn btn-outline-primary" onClick={()=>navigate('/')} >Se déconnecter</button></div>
              </nav>
            </div>
            <div className="AdminHomePage">
              <div className="menu">
                <h1>Liste de mes rendez-vous</h1>
                <div className="btn3"><button className="btn btn-success" onClick={() => pendAll()}>Prendre un rendez-vous</button></div>
              </div>
              <div className="tab1">
                <div className="tete">
                <div className="filter">
                  <select className="btn btn-outline-secondary rounded-2" >
                    <option value="titre">Tous</option>
                    <option value="titre">Aujourd'hui</option>
                    <option value="titre">Cette semaine</option>
                    <option value="titre">Ce mois-ci</option>
                    <option value="auteur">Cette année</option>
                  </select>
                </div>
                <div className="search1"><input type="search" /><button className="btn btn-primary">Search</button></div>
                </div>
                <table className="table-striped rounded-2 shadow text-center tab">
			            <thead>
		                <th>Nom de l'entreprise</th>
                    <th>Lieu</th>
                    <th>Date</th>
                    <th>heure</th>
                    <th>Description</th>
	                </thead>
                  <tbody>
                  {
					          data?.map((elt, k) => (
						        <tr>
							        <td className="p-2">{elt?.id}</td>
							        <td className="p-2">{elt?.location}</td>
							        <td className="p-2">{elt?.date}</td>
							        <td className="p-2">{elt?.time}</td>
							        <td className="p-2">{elt?.description}</td>
                      <td><button className="btn4">modifier</button></td>
		      			    </tr>
					          ))
				          }
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination page={page} setPage={setPage} data={users}/>
            <Footer/>
          </div>
        </>
    )
}