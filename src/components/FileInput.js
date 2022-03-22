import React from 'react'
import styled from "styled-components";
import Buttons from "./Buttons";
const FileInput = props => {

    const hiddenFileInput = React.useRef(null);
    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    return (
        <>
            <Buttons primary onClick={handleClick}>
                Upload avatar
            </Buttons>
            <input type="file" accept={props.accept} ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}} />
        </>
    );
};
