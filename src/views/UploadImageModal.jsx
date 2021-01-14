/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import Button, { ButtonsGroup } from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { actionSetUploadModalOpen } from '../store/actions/app';
import { addImageToList } from '../store/actions/images';
import { getImage } from '../utils/_api';

function UploadImageModal(props) {
  const [label, setLabel] = useState('');
  const [url, setURL] = useState('');

  const uploadImage = () => {
    props.dispatch(addImageToList({ label, url }));
    props.dispatch(actionSetUploadModalOpen(false));
  };

  function handleLabelChange(newLabel) {
    setLabel(newLabel);
  }

  function handleURLChange(newURL) {
    // TODO : Implement a check to ensure newURL is a link and directs to an image
    setURL(newURL);
  }

  return (
    <Modal title="Add an image">
      <Input label="Label" type="text" onValueChange={handleLabelChange} value={label} />
      <Input label="URL" type="text" onValueChange={handleURLChange} value={url} />
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
