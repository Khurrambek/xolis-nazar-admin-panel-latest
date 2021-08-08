import React from 'react';
import './_Subscribe.scss';

const Subscribe = () => {
    return (
        <>  
            <h3 className="subscribe-heading">Obuna bo'lganlar</h3>
            <div className="table-responsive-xl">
                <h3 className="fs-5 py-3">Obuna</h3>
                <table className="table table-bordered bg-dark text-light">
                    <thead>
                        <tr>
                            <th>Ism va Familiya</th>
                            <th>Oy nomi</th>
                            <th>Obuna narxi</th>
                            <th>Obunachi raqami</th>
                            <th>Email manzili</th>
                            <th>Yashash manzili</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Yanvar</td>
                            <td>200.000 sum</td>
                            <td>989988888</td>
                            <td>example@gmail.com</td>
                            <td>Adress, street and house</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Yanvar</td>
                            <td>200.000 sum</td>
                            <td>989988888</td>
                            <td>example@gmail.com</td>
                            <td>Adress, street and house</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Yanvar</td>
                            <td>200.000 sum</td>
                            <td>989988888</td>
                            <td>example@gmail.com</td>
                            <td>Adress, street and house</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Yanvar</td>
                            <td>200.000 sum</td>
                            <td>989988888</td>
                            <td>example@gmail.com</td>
                            <td>Adress, street and house</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Yanvar</td>
                            <td>200.000 sum</td>
                            <td>989988888</td>
                            <td>example@gmail.com</td>
                            <td>Adress, street and house</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Yanvar</td>
                            <td>200.000 sum</td>
                            <td>989988888</td>
                            <td>example@gmail.com</td>
                            <td>Adress, street and house</td>
                        </tr>
                    </tbody>
                </table>
                <div className="subscribe-button py-3">
                    <button className="btn btn-outline-dark more-btn px-4 ">More</button>
                </div>
            </div>
        </>
    )
}

export default Subscribe;