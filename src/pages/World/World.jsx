import React from 'react';
import AreaInput from '../../components/AreaInput/AreaInput';
import ImageInput from '../../components/ImageInput/ImageInput';
import PageHeading from '../../components/PageHeading/PageHeading';

const World = () => {
    return(
        <div className="world-wrapper row">
            <form action="" className="col-md-7">
                <PageHeading headingTitle="Dunyo sahifasi uchun xabarlar" />
                <div className="world-content">
                    <AreaInput placeholder="Sarlavhani kiriting" />
                    <input type="text" name="" id="" className="form-control py-3 mb-4" placeholder="Jurnalist ismi" />
                    <ImageInput />
                </div>
            </form>
        </div>
    )
}

export default World;