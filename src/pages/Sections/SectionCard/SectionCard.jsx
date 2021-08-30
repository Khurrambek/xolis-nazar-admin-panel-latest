import React, { useContext } from 'react';
import Context from '../Context';
import './section-card.css';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const SectionCard = () => {
    const { activeList } = useContext(Context);
    return (

        <div className={`${activeList ? '' : 'active-grid-view'} card-inner-wrapper`}>
            <div className="row card-inner">
                <div className={`${activeList ? 'col-md-2' : 'col-md-12'} inner-card-img`}>
                    <img src="assets/sections/inner-card-img.png" alt="" />
                </div>
                <div className={`${activeList ? 'col-md-8' : 'col-md-12'} inner-card-text`}>
                    <div className="inner-card-text-heading">
                        <h5 className="mb-1">Low-income countries and non-alignment in the wake of the pandemic</h5>
                        <small>by <Link to="/" style = {{textDecoration: 'none'}} >Username</Link></small>
                    </div>
                    <p className="py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde recusandae, animi ratione voluptatem vero culpa temporibus voluptate facere assumenda debitis neque laudantium hic similique. Necessitatibus!</p>
                </div>
                <div className={`${activeList ? 'col-md-2' : 'col-md-12 inner-card-btn-grid'} inner-card-btns`}>
                    <span className="views btn-custom btn-primary">
                        <div className="btn-custom-icon"><AiOutlineEye /></div> 12.6k</span>
                    <button className="btn edit-btn btn-success btn-custom"> 
                        <div className="btn-custom-icon"> <AiOutlineEdit /></div> Edit</button>
                    <button className="btn delete-btn btn-danger btn-custom"> 
                        <div className="btn-custom-icon"><AiOutlineDelete /></div>  Delete</button>
                </div>
            </div>
        </div>

    )
}

export default SectionCard
