import React from 'react';
import AreaInput from '../../components/AreaInput/AreaInput';
import ImageInput from '../../components/ImageInput/ImageInput';
import PageHeading from '../../components/PageHeading/PageHeading';
import './_Sale.scss';

const Sale = () => {
    return (
        <div className="row">
            <form action="" className="col-md-7">
                <PageHeading headingTitle="Aksiya sahifasiga joylanadigan postlar." />
                <div className="sale-content">
                    <AreaInput placeholder="Sarlavhani kiriting..." />
                    <input type="text" name="" id="" className="form-control py-3 mb-4" placeholder="Jurnalistning ismi va familiyasi"/>
                    <ImageInput />
                </div>
                <div className="sale-bottom">
                    <button type="submit" className="btn btn-dark">Yangilik qo'shish</button>
                </div>
            </form>
        </div>
    )
}

export default Sale;