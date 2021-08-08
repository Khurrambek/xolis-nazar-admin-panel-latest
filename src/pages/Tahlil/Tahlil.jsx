import React from 'react';
import './_Tahlil.scss';
import AreaInput from '../../components/AreaInput/AreaInput';
import ImageInput from '../../components/ImageInput/ImageInput';
import PageHeading from '../../components/PageHeading/PageHeading';

const Tahlil = () => {
    return (
        <div className="row">
            <form action="" className="col-md-7">
                <PageHeading headingTitle="Tahlil sahifasi uchun chiqariladigan post paneli" />
                <div className="tahlil-content">
                    <AreaInput placeholder="Sarlavhani kiriting..." />
                    <input type="text" className="form-control py-3" placeholder="Jurnalist ismi va familiyasi"/>
                    <AreaInput placeholder="Chiqariladigan post matnini kiriting..." />
                </div>
                <div className="tahlil-bottom">
                    <button type="submit" className="btn btn-dark">Yangilik qo'shish</button>
                </div>
            </form>
        </div>
    )
}

export default Tahlil;