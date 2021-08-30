import React from 'react';
import './addcategory.css';

const AddCategory = () => {
    return (
        <>
            <section className="addcategory-form-section">
                <div className="addcategory-form-wrapper">
                    <form action="" className="addcategory-form">
                        <h3>Kategoriya Qo'shish</h3>
                        <div className="form-group ">
                            <label htmlFor="kategoriyaNomi" className="form-label">Kategoriya nomi </label>
                            <input type="text" name="" id="" className="form-control addcategory-input" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-dark px-5 ">Save</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddCategory
