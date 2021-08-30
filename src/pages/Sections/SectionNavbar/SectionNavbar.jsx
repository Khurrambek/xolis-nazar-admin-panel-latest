import React, { useContext } from 'react';
import './section-navbar.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import Context from '../Context';
import SearchBox from '../../../components/SearchBox/SearchBox';
import { NavLink } from 'react-router-dom';


const SectionNavbar = () => {
    const { viewListHandler, viewGridHandler, activeList } = useContext(Context);


    return (
        <div className="section-navbar-wrapper">
            <div className="section-navbar-list">
                <div className="section-navbar-item-left">
                    <select className="form-select select-style" >
                        <option value="1">Dunyo</option>
                        <option value="2">Yangiliklar</option>
                        <option value="3">Obuna</option>
                    </select>
                    <select class="form-select select-range-style" >
                        <option value="1">1-25</option>
                        <option value="2">26-50</option>
                        <option value="3">51-75</option>
                    </select>
                </div>
                <div className="section-navbar-item-right">

                    <NavLink to="/addsection" className="btn item-right-btn" activeClassName={'active'}>
                        <AiOutlinePlusCircle /> Add
                    </NavLink>

                    <button className={`${activeList ? '' : 'active-list'} btn item-right-btn `} onClick={viewGridHandler}> <BsFillGridFill /></button>
                    <button className={`${activeList ? 'active-list' : ''} btn item-right-btn`} onClick={viewListHandler}> <BsList /></button>
                </div>
            </div>
            <SearchBox />
        </div>
    )
}

export default SectionNavbar
