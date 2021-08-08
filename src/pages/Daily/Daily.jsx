import React from 'react';
import AreaInput from '../../components/AreaInput/AreaInput';
import ImageInput from '../../components/ImageInput/ImageInput';
import PageHeading from '../../components/PageHeading/PageHeading';
import './_Daily.scss';

const Daily = () => {
    return (

        <div className="daily-wrapper row">
            <form action="" className="col-md-7">
                <PageHeading headingTitle="Kundalik chiqariladigan xarbar matni" />
                <div className="daily-top ps-3">
                    <AreaInput placeholder="Sarlavhani kiriting..." />
                    <input type="text" name="" id="" className="form-control py-3 " placeholder="Jurnalistning ismi" />
                    <AreaInput placeholder="Blog matnini kiriting..." />
                    <ImageInput />
                </div>
                <div className="daily-bottom ps-3">
                    <button type="submit" className="btn btn-dark px-4">Yangilik qo'shish</button>
                </div>
            </form>
        </div>

    )
}

export default Daily;
