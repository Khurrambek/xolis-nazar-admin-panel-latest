import React from 'react';
import { Link } from 'react-router-dom';
import './footerDashboard.css';

const FooterDashboard = () => {
    return (
        <div className="row footer-wrapper">
            <div className="col-md-4 weather-wrapper">
                <h3>Weather app</h3>
                <img src="assets/dashboard/weather.png" alt="" />
            </div>
            <div className="col-md-8 advert-wrapper">
                <div className="advert-header">
                    <h3>So'ngi Reklamar</h3>
                    <Link to="/" className="btn"><img src="assets/dashboard/share-icon.png" alt="" /></Link>
                </div>
                <div className="row adverts">
                    <div className="col-md-2 adverts-img">
                        <img src="assets/dashboard/advertimg-1.png" alt="" />
                    </div>
                    <div className="col-md-2 adverts-img">
                        <img src="assets/dashboard/advertimg-1.png" alt="" />
                    </div>
                    <div className="col-md-2 adverts-img">
                        <img src="assets/dashboard/advertimg-1.png" alt="" />
                    </div>
                    <div className="col-md-2 adverts-img">
                        <img src="assets/dashboard/advertimg-1.png" alt="" />
                    </div>
                    <div className="col-md-2 adverts-img">
                        <img src="assets/dashboard/advertimg-1.png" alt="" />
                    </div>
                    <div className="col-md-2 adverts-img">
                        <img src="assets/dashboard/advertimg-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterDashboard
