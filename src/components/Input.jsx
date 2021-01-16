/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

export const InputContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-bottom:30px;
`;

export const Label = styled.div`
    margin-bottom: 10px;
`;

export const TextInput = styled.input`
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 4px 5px 5px lightgray;
    padding: 10px;
    border: 1px lightgray solid;
`;

function Input(props) {
  const {
    label,
    type,
    value,
    onValueChange,
  } = props;

  const imgRef = useRef({});

  function changeValue(e) {
    // console.log(e.target);
    onValueChange(e.target.value);
  }

  function changeFileValue() {
    onValueChange(imgRef.current.files[0]);
  }

  return (
    <InputContainer>
      <Label>{label}</Label>
      { type !== 'file'
        ? <TextInput type={type} onChange={changeValue} value={value} />
        : <TextInput type={type} onChange={changeFileValue} ref={imgRef} /> }
    </InputContainer>
  );
}

function mapStateToProps({ images }) {
  return {
    images,
  };
}

export default connect(mapStateToProps)(Input);
