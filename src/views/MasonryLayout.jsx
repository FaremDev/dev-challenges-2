/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageContainer from '../components/ImageContainer';

const MasonryDiv = styled(ResponsiveMasonry)`
  max-width: 1300px;
  margin: auto;
  margin-top: 130px;
`;

function MasonryLayout(props) {
  const { images } = props;

  return (
    <MasonryDiv columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="20px">
        { Object.keys(images).map((key) => (<ImageContainer src={images[key].url} id={key} label={images[key].label} key={key} />))}
      </Masonry>
    </MasonryDiv>
  );
}

function mapStateToProps({ images }) {
  return {
    images: images.images,
  };
}

export default connect(mapStateToProps)(MasonryLayout);
