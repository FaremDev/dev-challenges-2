/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Button, { ButtonsGroup } from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { actionSetDeleteModalOpen } from '../store/actions/app';
import { actionRemoveImage, actionSetCurrentImageUrl } from '../store/actions/images';

function DeleteImageModal(props) {
  const { url } = props;

  const closeModal = () => {
    props.dispatch(actionSetDeleteModalOpen(false));
    props.dispatch(actionSetCurrentImageUrl(''));
  };

  const deleteImage = () => {
    props.dispatch(actionRemoveImage(url));
    closeModal();
  };

  return (
    <Modal title="Are you sure?">
      <Input label="Password" type="password" />
      <ButtonsGroup>
        <Button
          cancel
          onClick={() => props.dispatch(actionSetDeleteModalOpen(false))}
        >
          Cancel
        </Button>
        <Button
          delete
          onClick={() => deleteImage()}
        >
          Delete
        </Button>
      </ButtonsGroup>
    </Modal>
  );
}

function mapStateToProps({ images }) {
  return {
    images,
    url: images.currentImageUrl,
  };
}

export default connect(mapStateToProps)(DeleteImageModal);
