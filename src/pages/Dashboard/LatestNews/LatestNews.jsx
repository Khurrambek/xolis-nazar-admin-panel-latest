import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <>
            <div className="col-md-12 latest-news-wrapper">
                <div className="latest-header">
                    <h3>So'ngi yangiliklar</h3>
                    <Link to="/" className="btn"><img src="assets/dashboard/share-icon.png" alt="" /></Link>
                </div>
                <div className="news-wrapper row">
                    <div className="col-md-2 latest-img">
                        <img src="assets/dashboard/news-1.png" alt="" />
                    </div>
                    <div className="col-md-10 latest-text">
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, numquam.

                        </h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim molestias minima veniam possimus cupiditate corporis in omnis delectus alias corrupti?</p>
                    </div>
                </div>
                <div className="news-wrapper row">
                    <div className="col-md-2 latest-img">
                        <img src="assets/dashboard/news-1.png" alt="" />
                    </div>
                    <div className="col-md-10 latest-text">
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, numquam.

                        </h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim molestias minima veniam possimus cupiditate corporis in omnis delectus alias corrupti?</p>
                    </div>
                </div>
                <div className="news-wrapper row">
                    <div className="col-md-2 latest-img">
                        <img src="assets/dashboard/news-1.png" alt="" />
                    </div>
                    <div className="col-md-10 latest-text">
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, numquam.

                        </h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim molestias minima veniam possimus cupiditate corporis in omnis delectus alias corrupti?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestNews
