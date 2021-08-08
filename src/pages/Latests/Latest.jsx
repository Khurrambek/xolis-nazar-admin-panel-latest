import React from 'react';
import AreaInput from '../../components/AreaInput/AreaInput';
import PageHeading from '../../components/PageHeading/PageHeading';
import './_Latests.scss';

const Latests = () => {
    return(
        <div className="row">
            <form action="" className="col-md-7">
                <PageHeading headingTitle="Asosiy Yuqorida chiqadigan Yangiliklar." />
                <div className="latest-content">
                    <AreaInput placeholder="Post uchun matnni kiriting..." />
                </div>
                <div className="latest-bottom">
                    <button type="submit" className="btn btn-dark">Yangilik qo'shish</button>
                </div>
            </form>
            
        </div>
    )
}

export default Latests;