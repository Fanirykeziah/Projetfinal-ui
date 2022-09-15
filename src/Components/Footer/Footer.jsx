import React from "react"
import '../bootstrap/bootstrap.css';
import './Footer.css';

export function Footer() {
    return (
        <>
          <div className="Footer">
        <footer id="footer" className="mt-5">
        <div className="container d-flex py-2 text-muted">
                <div className="col-md-3 reveal-2">
                <p></p>
                <h6>MYCalendar-meet<i className="mx-2 fab fa-linkedin fa-1x"></i></h6>
                </div>
                <div className="col-md-3 reveal-3">
                <h5>Email<i className="mx-2 fas fa-envelope fa-1x"></i></h5>
                <p>MYcalendarMeet@gmail.com</p>
                </div>
                <div className="col-md-3 reveal-4">
                <h5>Téléphone<i className="mx-2 fas fa fa-phone 1x"></i></h5>
                <p>+261 32 40 636 16</p>
                </div>
                <div className="col-md-3 reveal-5">
                 <p></p>
                <h6>MYcalendarMeet<i className="mx-2 text-muted fab fa-facebook fa-1x"></i></h6> 
                </div>   
            </div>
            </footer>
            <div>
            <div className="container-fluid pt-2 bg-dark text-white">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="ending reveal-2">© Copyright 2022 </p> 
                        </div>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}