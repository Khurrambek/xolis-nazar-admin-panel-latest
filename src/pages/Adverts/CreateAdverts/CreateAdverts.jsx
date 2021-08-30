import React from 'react';
import ImageInput from '../../../components/ImageInput/ImageInput';
import './create-adverts.css';

const CreateAdverts = () => {
    return (
        <section className="create-advert-form-wrapper">
            <form action="" className="create-advert-form">
                <h3 className="fs-4">Reklama Qo'shish</h3>
                <div className="form-group">
                    <label htmlFor="sana" className="form-label">Sanani kiriting.</label>
                    <input type="date" name="" id="" className="form-control calendar-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="reklama" className="form-label">Reklamani joylashtiring.</label>
                    <ImageInput />
                </div>
                <div className="form-group">
                    <button className="btn btn-dark py-2 px-4">Save</button>
                </div>
            </form>
        </section>

    )
}

export default CreateAdverts
