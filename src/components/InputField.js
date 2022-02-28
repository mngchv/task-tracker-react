import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  border: 3px solid rgba(125, 0, 255, 0.4);
  border-radius: 6px;
  font-size: 32px;
  display: block;
  margin-bottom: 10px;
  margin-left: 40px;
`


function InputField(props) {
    const {type, id, placeholder, onChange, onBlur} = props;

    return (
            <Input type={type} id={id} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
    );
}

export default InputField;