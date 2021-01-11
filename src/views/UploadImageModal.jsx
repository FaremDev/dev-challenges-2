/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import Button, { ButtonsGroup } from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { actionSetUploadModalOpen } from '../store/actions/app';
import { addImageToList } from '../store/actions/images';
import { getImage } from '../utils/_api';

function UploadImageModal(props) {
  const uploadImage = () => {
    props.dispatch(addImageToList(getImage()));
    props.dispatch(actionSetUploadModalOpen(false));
  };

  return (
    <Modal title="Add an image">
      <Input label="Image" type="text" />
      <Input label="Image" type="text" />
      <ButtonsGroup>
        <Button
          cancel
          onClick={() => props.dispatch(actionSetUploadModalOpen(false))}
        >
          Cancel
        </Button>
        <Button primary onClick={() => uploadImage()}>Upload</Button>
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
