import React, { useState } from 'react';
import './_ImageInput.scss';

const ImageInput = () => {
    const [fileName, setfileName] = useState('Select Your Files');
    const fileHandler = (event) => {
        setfileName(event.target.files['0'].name);
    }
    return(
        <div className="file-upload-wrapper" data-text={fileName}>
            <input type="file" src="" alt="" className="form-control form-image" onChange={fileHandler}/>
        </div>
    )
}

export default ImageInput;