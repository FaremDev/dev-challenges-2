/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import Button, { ButtonsGroup } from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { actionSetUploadModalOpen } from '../store/actions/app';

function UploadImageModal(props) {
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
        <Button primary>Delete</Button>
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
