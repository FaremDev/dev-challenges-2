/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import Button, { ButtonsGroup } from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { actionSetUploadModalOpen } from '../store/actions/app';
import { uploadImage } from '../utils/_api';

function UploadImageModal(props) {
  const [label, setLabel] = useState('');
  const [img, setImg] = useState('');

  const onClickOnUpload = () => {
    uploadImage(img, label);
    props.dispatch(actionSetUploadModalOpen(false));
  };

  function handleLabelChange(newLabel) {
    setLabel(newLabel);
  }

  function handleImgChange(newImg) {
    setImg(newImg);
  }

  return (
    <Modal title="Add an image">
      <Input label="Label" type="text" onValueChange={handleLabelChange} value={label} />
      <Input type="file" accept="image/*" name="imageToUpload" value={img} onValueChange={handleImgChange} />
      <ButtonsGroup>
        <Button
          cancel
          onClick={() => props.dispatch(actionSetUploadModalOpen(false))}
        >
          Cancel
        </Button>
        <Button primary onClick={() => onClickOnUpload()}>Upload</Button>
      </ButtonsGroup>
    </Modal>
  );
}

function mapStateToProps({ images }) {
  return {
    images,
  };
}

export default connect(mapStateToProps)(UploadImageModal);
