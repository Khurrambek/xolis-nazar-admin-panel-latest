import React from 'react';
import AreaInput from '../../components/AreaInput/AreaInput';
import ImageInput from '../../components/ImageInput/ImageInput';
import PageHeading from '../../components/PageHeading/PageHeading';
import './_Newspaper.scss';

const Newspaper = () => {
    return (
        <div className="row">
            <form action="" className="col-md-7">
                <PageHeading headingTitle="So'ngi gazeta sahifasiga joylanadigan postlar." />
                <div className="newspaper-content">
                    <AreaInput placeholder="Gazeta uchun qisqacha ma'lumot bering ...." />
                    <input type="text" name="" id="" className="form-control py-3 mb-4" placeholder="Jurnalistning ismi va familiyasi" />
                    <ImageInput />
                </div>
                <div className="newspaper-bottom">
                    <button type="submit" className="btn btn-dark">Yangilik qo'shish</button>
                </div>
            </form>
        </div>
    )
}

export default Newspaper;