/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
    z-index: 6;
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
    padding: 40px 40px;
`;

const ModalTitle = styled.p`
    font-size: 30px;
    margin-top: 0;
    color: #333;
`;

function Modal(props) {
  const { title, children } = props;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        { children }
      </ModalContent>
    </ModalContainer>
  );
}

function mapStateToProps({ images }) {
  return {
    images,
  };
}

export default connect(mapStateToProps)(Modal);
