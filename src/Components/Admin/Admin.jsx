import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./image/logo.jpg";
import './admin.css';
import Pagination from "../Pagination/Pagination";
import { Footer } from "../Footer/Footer";
import axios from "axios";

export function Admin() {

    const navigate = useNavigate();
    const [page, setPage] =  useState(0);
    const [users, setUsers] =  useState([]);
    const [data,setData] = useState([]);

	useEffect(() => {
		const promise = axios.get("localhost:8080/company");
		promise.then((res) => {
			setData(res.data);
			console.log(res.data);
		})	
		.catch((err)=> {
			console.log(err);
		})
	}, [data]);

    return(

        <>
          <div className="AdminContainer">
            <div className="Navbar">
              <nav class="navbar navbar-expand-sm navbar-light">
                <div className="logo"><img src={logo} className="logo"/></div>
                <div className="btn8"><button className="btn btn-success" onClick={() => navigate("/adminOffers")}>Offres</button></div>
                <div className="btn9"><button type="btn" className="btn btn-outline-primary" onClick={()=>navigate('/')} >Se déconnecter</button></div>
              </nav>
            </div>
            <div className="body">
              <div className="PageContain">
                <div className="AdminHomePage">
                  <div className="menu">
                    <h1>Liste des entreprises</h1>
                  </div>
                  <div className="table">
                    <div className="te">
                      <div className="search"><input type="search" /><button className="btn btn-primary">Search</button></div>
                    </div>
                    <table className="table-striped rounded-2 shadow text-center tab">
			          <thead>
                        <th>n</th>
		                   <th>Nom(s)</th>
                        <th>Prénom(s)</th>
                        <th>Nom de l'entreprise</th>
                        <th>Type de l'entreprise</th>
                        <th>Description</th>
                        <th>Email</th>
                        <th>Mobile</th>
	                  </thead>
	                  <tbody>
                    {
					          data?.map((elt, k) => (
						        <tr>
							        <td className="p-2">{elt?.id}</td>
							        <td className="p-2">{elt?.responsableName}</td>
							        <td className="p-2">{elt?.responsableFirstName}</td>
							        <td className="p-2">{elt?.title}</td>
							        <td className="p-2">{elt?.description}</td>
                      <td className="p-2">{elt?.email}</td>
                      <td className="p-2">{elt?.mobile}</td>
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
            <div className="foot">
              <Footer/>
            </div>
            
          </div>
         
        </>
    )
}