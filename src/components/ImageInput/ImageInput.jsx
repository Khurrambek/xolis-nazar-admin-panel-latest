import React, { useState, useEffect } from 'react';
import './imageinput.css';

const ImageInput = () => {
    const [fileName, setfileName] = useState('Select Your Files');
    const [image, setimage] = useState('');
    const [preview, setpreview] = useState()
    const fileHandler = (event) => {
        setfileName(event.target.files["0"].name);
        if (event.target.files["0"]) {
            setimage(event.target.files["0"])
        } else {
            setimage(null)
        }
    }
    useEffect(()=> {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setpreview(`${reader.result}`)
            }
            reader.readAsDataURL(image)

        } else {
            setpreview(null)
        }
    }, [image])
    return (
        <div className="file-upload-container">
            <div className="file-upload-preview">
                <img src={preview} accept = "image/*" />
            </div>
            <div className="file-upload-wrapper" data-text={fileName}>
                <input type="file" src="" alt="" className="form-control form-image" onChange={fileHandler} />
            </div>
        </div>
    )
}

export default ImageInput;