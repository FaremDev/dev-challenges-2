/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Button, { ButtonsGroup } from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { setDeleteModalOpen } from '../store/actions/app';
import { setCurrentImageKey } from '../store/actions/images';
import { deleteImage } from '../store/actions';

function DeleteImageModal(props) {
  const { id } = props;

  const closeModal = () => {
    props.dispatch(setDeleteModalOpen(false));
    props.dispatch(setCurrentImageKey(''));
  };

  function handleDeleteImage() {
    // TODO : check that the password is correct
    props.dispatch(deleteImage(id));
    closeModal();
  }

  return (
    <Modal title="Are you sure?">
      <Input label="Password" type="password" />
      <ButtonsGroup>
        <Button
          cancel
          onClick={() => props.dispatch(setDeleteModalOpen(false))}
        >
          Cancel
        </Button>
        <Button
          delete
          onClick={() => handleDeleteImage()}
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
    id: images.currentImageKey,
  };
}

export default connect(mapStateToProps)(DeleteImageModal);
