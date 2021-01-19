/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Button, { ButtonsGroup } from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { actionSetDeleteModalOpen } from '../store/actions/app';
import { actionSetCurrentImageKey } from '../store/actions/images';
import { actionDeleteImage } from '../store/actions';

function DeleteImageModal(props) {
  const { id } = props;

  const closeModal = () => {
    props.dispatch(actionSetDeleteModalOpen(false));
    props.dispatch(actionSetCurrentImageKey(''));
  };

  const deleteImage = () => {
    props.dispatch(actionDeleteImage(id));
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
    id: images.currentImageKey,
  };
}

export default connect(mapStateToProps)(DeleteImageModal);
