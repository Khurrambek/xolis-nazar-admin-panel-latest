import React from 'react';
import './addsection.css';
import AreaInput from '../../components/AreaInput/AreaInput';
import ImageInput from '../../components/ImageInput/ImageInput';

const AddSection = () => {
    return (
        <>
            <section className="navbar-secondary">
                <select name="" id="" className="form-select select-style addsection-select">
                    <option value="1">Dunyo</option>
                    <option value="2">Advertisement</option>
                    <option value="3">LatesNews</option>
                    <option value="4">Yangilikalr</option>
                    <option value="5">Dunyo</option>
                </select>
                <button type="submit" className="btn btn-dark py-1 px-4">Save</button>
            </section>
            <section className="create-news-section">
                <form action="" className="create-news-wrapper">
                    <div className="create-news-input">
                        <div className="create-news-header">
                            <h4>Yangilik Qo'shish</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Sarlavha" className="form-label">Sarlavha</label>
                            <AreaInput />
                        </div>
                        <div className="form-group">
                            <label htmlFor="muharrir" className="form-label">
                                Muharrir
                            </label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Rasm" className="form-label">Rasm</label>
                            <ImageInput />
                        </div>
                        <div className="form-group">
                            <label htmlFor="paragraph" className="form-label">Paragraph</label>
                            <AreaInput />
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddSection
