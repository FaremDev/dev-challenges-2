/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { actionSetModalOpen } from '../store/actions/app';

// TODO: create and design a Header component

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    filter: blue(8px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background-color:white;
    color:#333333;
    border-radius: 20px;
    width: 620px;
    height: 400px;
    padding: 20px 40px 20px 40px;
`;

const ModalTitle = styled.p`
    font-size: 30px;
    color: #333;
`;

const InputGroup = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-bottom:30px;
`;

const InputLabel = styled.div`
    margin-bottom: 10px;
`;

const Input = styled.input`
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 4px 5px 5px lightgray;
    padding: 10px;
    border: 1px lightgray solid;
`;

const ButtonsGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
`;

function UploadImageModal(props) {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Upload an image</ModalTitle>
        <InputGroup>
          <InputLabel>Image</InputLabel>
          <Input />
        </InputGroup>
        <InputGroup>
          <InputLabel>Image</InputLabel>
          <Input />
        </InputGroup>
        <ButtonsGroup>
          <Button cancel onClick={() => props.dispatch(actionSetModalOpen(false))}>Cancel</Button>
          <Button primary>Upload</Button>
        </ButtonsGroup>
      </ModalContent>
    </ModalContainer>
  );
}

function mapStateToProps({ images }) {
  return {
    images,
  };
}

export default connect(mapStateToProps)(UploadImageModal);
