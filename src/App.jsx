/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from './views/Header';
import MasonryLayout from './views/MasonryLayout';
import UploadImageModal from './views/UploadImageModal';
import DeleteImageModal from './views/DeleteImageModal';

function App(props) {
  // eslint-disable-next-line react/prop-types
  const { isUploadModalOpen, isDeleteModalOpen, images } = props;

  return (
    <div className="App">
      <div>
        <Header />
        { !_.isEmpty(images)
          && <MasonryLayout />}
        {isUploadModalOpen && (<UploadImageModal />)}
        {isDeleteModalOpen && (<DeleteImageModal />)}
      </div>
    </div>
  );
}
function mapStateToProps({ app, images }) {
  return {
    isUploadModalOpen: app.isUploadModalOpen,
    isDeleteModalOpen: app.isDeleteModalOpen,
    images: images.images,
  };
}

export default connect(mapStateToProps)(App);
