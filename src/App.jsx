import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './views/Header';
import MasonryLayout from './views/MasonryLayout';
import UploadImageModal from './views/UploadImageModal';
import DeleteImageModal from './views/DeleteImageModal';

function App(props) {
  // eslint-disable-next-line react/prop-types
  const { isUploadModalOpen, isDeleteModalOpen } = props;
  return (
    <div className="App">
      <div>
        <Header />
        <MasonryLayout />
        {isUploadModalOpen && (<UploadImageModal />)}
        {isDeleteModalOpen && (<DeleteImageModal />)}
      </div>
    </div>
  );
}
function mapStateToProps({ images, app }) {
  return {
    images,
    isUploadModalOpen: app.isUploadModalOpen,
    isDeleteModalOpen: app.isDeleteModalOpen,
  };
}

export default connect(mapStateToProps)(App);
