import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import './account-controls.css';

const AccountControls = (props) => {
    const { accountPlaceholder, controlType } = props;
    return (
        <div className="account-form-group">
            <input 
            className="account-form-control form-control" 
            type={controlType}
            name="" 
            id="" 
            placeholder={accountPlaceholder} />
            <span className="account-control-icon">
                <AiOutlineEdit />
            </span>
        </div>
    )
}

export default AccountControls
