/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import { setDeleteModalOpen } from '../store/actions/app';
import { setCurrentImageKey } from '../store/actions/images';

const Container = styled.div`
  border-radius: 20px;
  position: relative;
  max-width: 400px;
  max-height: 600px;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 600px;
  border-radius: 20px;
  position: relative;
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;

  div${Container}:hover & {
    opacity: 0.3;
  }
`;

const ImageOverlay = styled.div`
  display: none;
  border-radius: 20px;
  margin: auto;
  color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  div${Container}:hover & {
    display: block;
  }
`;

const DeleteButton = styled(Button)`
  div${Container}:hover & {
    background-color: rgba(255,255,255,0.2);
    color: #222222;
    border: solid 2px #222222;
    border-radius: 50px;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 1;
    cursor: pointer;
  }
`;

const ImageLabel = styled.div`
  div${Container}:hover & {
    position: absolute;
    bottom: 0;
    padding-left: 20px;
    box-sizing: border-box;
    width: 100%;
    max-height: 20%;
    min-height: 100px;
    text-align: left;
    font-size: 25px;
    color:#222222;
    background: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1));  }
`;

function ImageContainer(props) {
  // eslint-disable-next-line react/prop-types
  const { src, label, id } = props;

  const openDeleteModal = () => {
    props.dispatch(setCurrentImageKey(id));
    props.dispatch(setDeleteModalOpen(true));
  };

  return (
    <Container>
      <Image src={src} alt={label} />
      <ImageOverlay>
        <DeleteButton
          onClick={() => openDeleteModal()}
        >
          ×
        </DeleteButton>
        <ImageLabel>{label}</ImageLabel>
      </ImageOverlay>
    </Container>
  );
}

function mapStateToProps({ images }) {
  return {
    images,
  };
}

export default connect(mapStateToProps)(ImageContainer);
