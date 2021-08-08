import React from 'react';
import './_Opinion.scss';
import AreaInput from '../../components/AreaInput/AreaInput';
import ImageInput from '../../components/ImageInput/ImageInput';
import PageHeading from '../../components/PageHeading/PageHeading';

const Opinion = () => {
    return(
        <div className="opinion-wrapper row">
            <form action="" className="col-md-7">
                <PageHeading headingTitle="Shaxsiy fikr sahifasi uchun post" />
                <div className="opinion-content">
                    <AreaInput placeholder="Sarlavhani kiriting..." />
                    <input type="text" name="" id="" className="form-control py-3" placeholder="Jurnalistning Ismi va Familiyasi" />
                    <AreaInput placeholder="Chop etiladigan post matnini kiriting..." />
                    <ImageInput />
                </div>
                <div className="opinion-bottom">
                    <button type="submit" className="btn btn-dark">
                        Yangilik qo'shish
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Opinion;