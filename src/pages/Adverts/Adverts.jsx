import React from 'react';
import './_Adverts.scss';
import ImageInput from '../../components/ImageInput/ImageInput';


const Adverts = () => {
    return(
        <div className="row g-5 advert-wrapper">
            <div className="col-md-6 advert-box py-5">
                <h3 className="adverts-heading pb-5">asosiy yuqorida chiqadigan reklama</h3>
                <div className="advert-desktop">
                    <h5>desktop</h5>
                    <p className="form-text">PC uchun reklama joylayotganda o'lcham 1250x368 bo'lishi kerak. Portret shaklida</p>
                    <ImageInput />
                </div>
                <div className="advert-mobile my-5">
                    <h5>mobile</h5>
                    <p className="form-text">PC uchun reklama joylayotganda o'lcham 1250x368 bo'lishi kerak. Portret shaklida</p>
                    <ImageInput />
                </div>
            </div>
            <div className="col-md-6 py-5 ">
                <h3 className="adverts-heading pb-5">Qo'shimcha sahifalardagi reklama</h3>
                <div className="advert-desktop">
                    <h5>desktop</h5>
                    <p className="form-text">PC uchun reklama joylayotganda o'lcham 1250x368 bo'lishi kerak. Portret shaklida</p>
                    <ImageInput />
                </div>
            </div>
        </div>
    )
}

export default Adverts;