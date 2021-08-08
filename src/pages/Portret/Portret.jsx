import React from 'react';
import './_Portret.scss';
import AreaInput from '../../components/AreaInput/AreaInput';
import ImageInput from '../../components/ImageInput/ImageInput';
import PageHeading from '../../components/PageHeading/PageHeading';

const Portret = () => {
    return(
        <div className="row">
            <form action="" className="col-md-7">
                <PageHeading headingTitle="Portret sahifasi uchun joylanadigan postlar" />
                <div className="portret-content">
                    <AreaInput placeholder ="Post sarlavhasi uchun ..." />
                    <input type="text" name="" id="" className="form-control py-3 mb-4" placeholder="Jurnalistningn ismi va familiyasi" />
                    <ImageInput />
                    <div className="link-input">
                        <input type="text" name="" id="" className="form-control py-3" placeholder="Yangilik uchun linkni kiriting..." />
                        <button type="submit" className="btn btn-dark link-input-btn">Save</button>
                    </div>
                </div>
                <div className="portret-bottom">
                    <button type="submit" className="btn btn-dark py-2 px-3">Yangilik qo'shish</button>
                </div>
            </form>
        </div>
    )
}

export default Portret;