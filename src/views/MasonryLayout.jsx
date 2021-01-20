/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import _ from 'lodash';
import { filterObject } from '../utils';
import ImageContainer from '../components/ImageContainer';

const MasonryDiv = styled(ResponsiveMasonry)`
  max-width: 1300px;
  margin: auto;
  margin: 130px 50px;
`;

function MasonryLayout(props) {
  const { images } = props;

  return (
    <MasonryDiv columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="20px">
        { Object.keys(images).map((key) => (<ImageContainer src={images[key].url} id={images[key].key} label={images[key].label} key={key} />))}
      </Masonry>
    </MasonryDiv>
  );
}

function mapStateToProps({ images, app }) {
  return {
    // images: _.orderBy(images.images, 'creation_date', 'desc'),
    images: _.orderBy(filterObject(images.images, 'label', app.searchTerm), 'creation_date', 'desc'),
  };
}

export default connect(mapStateToProps)(MasonryLayout);
