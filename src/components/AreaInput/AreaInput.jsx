import React from 'react';
import './areainput.css';
import Editor from '@ckeditor/ckeditor5-build-classic/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react';






const AreaInput = ({ placeholder }) => {
    console.log(Editor);
    return (
        <CKEditor
            editor={ Editor }
            data={ placeholder }
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log(editor);
            }}
        />

    )
}


export default AreaInput;