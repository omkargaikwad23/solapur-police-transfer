import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="full-footer">
            <div className="container top-footer p-md-3 p-1">
                <div className="row">
                    <div className="col-md-4 pl-3 pr-3">
                        <img className="img-fluid" src="/images/logoUS.png" height="25px" width="150px" alt="" />
                        <p>
                            <b>StartStock</b> is a financial website for helping the people who wants to start learning, investing
                            in stock market
                            <Link style={{ color: "blue" }} to="/learn">Read more..</Link>
                        </p>
                        <a style={{ color: "white" }} className="p-1" href="https://www.facebook.com" ><i className="fab fa-2x fa-facebook-square"></i></a>
                        <a style={{ color: "white" }} className="p-1" href="https://www.facebook.com"><i className="fab fa-2x fa-instagram-square"></i></a>
                        <a style={{ color: "white" }} className="p-1" href="https://www.facebook.com"><i className="fab fa-2x fa-linkedin"></i></a>
                    </div>
                    <hr />
                    <div className="col-md-4 pl-3 pr-3">
                        <h3>Our Address</h3>
                        <p><b>PICT, Pune </b>Survey No. 27,<br /> Near Trimurti Chowk, Dhankawadi,<br /> Pune-411043,
                            <br />
                                Maharashtra(India)
                            </p>
                    </div>

                    <div className="col-md-4 pl-3 pr-3">
                        <h3>Contact Us</h3>
                        <a href="mailto:startstockpbl@gmail.com"><i className="fas fa-envelope"></i> startstockpbl@gmail.com </a>
                        <br />
                        <div className="embed-responsive mt-2 embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                title="google map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254224!2d73.84864491484174!3d18.45754208744567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1614008622838!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid bottom-footer">
                <div className="col-12 text-center pt-2">
                    <p>Copyright &copy; 2021 StartStock. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer