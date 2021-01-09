/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Button, { ButtonsGroup } from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { actionSetDeleteModalOpen } from '../store/actions/app';

function DeleteImageModal(props) {
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
        <Button delete>Delete</Button>
      </ButtonsGroup>
    </Modal>
  );
}

function mapStateToProps({ images }) {
  return {
    images,
  };
}

export default connect(mapStateToProps)(DeleteImageModal);
