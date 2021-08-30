import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import './adverts-img.css';

const AdvertsImg = () => {
    return (

        <div className="col-md-3 adverts-img">
            <h5 className="date fs-6">24/08/2021</h5>
            <div className="img">
                <img src="assets/adverts/advert-image.png" alt="" />
            </div>
            <div className="adverts-btn">
                <button className="btn btn-success btn-advert-custom">
                    <div className="btn-custom-icon"><AiOutlineEdit /></div>
                    Edit
                </button>
                <button className="btn btn-danger btn-advert-custom">
                    <div className="btn-custom-icon"><AiOutlineDelete /></div>
                    Delete
                </button>
            </div>
        </div>

    )
}

export default AdvertsImg;
