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

function MasonryLayout() {
  return (
    <MasonryDiv columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="20px">
        <ImageContainer src="https://picsum.photos/400/600" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/600" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/300" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/300" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/600" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/600" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/600" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/300" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/600" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/300" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/300" alt="this is a file" />
        <ImageContainer src="https://picsum.photos/400/600" alt="this is a file" />
      </Masonry>
    </MasonryDiv>
  );
}

function mapStateToProps({ images }) {
  return {
    images,
  };
}

export default connect(mapStateToProps)(MasonryLayout);
