import React from 'react';
import AreaInput from '../../components/AreaInput/AreaInput';
import './_Latests.scss';

const Latests = () => {
    return(
        <div className="latest">
            <div className="latest-wrapper">
                <form action="" className="latest-form">
                    <div className="latest-top row">
                        <div className="latest-text col-md-6">
                            <h3 className="latest-heading">Asosiy yuqorida chiqadigan yangiliklar</h3>
                            <p className="form-text">
                                Yangiliklar soni umumiy 5 tani tashkil qiladi.
                            </p>
                        </div>
                        <div className="col-md-6 ps-4">
                            <button type="submit" className="btn btn-outline-dark  px-4">Save</button>
                        </div>
                    </div>
                    <div className="latest-middle ps-3">
                        <AreaInput />
                    </div>
                    <div className="latest-bottom py-4 ps-3">
                        <button type="submit" className="btn btn-dark px-4">Yangilik qo'shish</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Latests;