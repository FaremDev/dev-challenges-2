/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { actionSetUploadModalOpen } from '../store/actions/app';
import logo from '../logo.svg';

// TODO: Add animation when showing UploadImageModal

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100%;
  box-sizing: border-box;
  height: 110px;
  display: grid;
  background-color: white;
  padding-right: 20px;
  padding-left: 20px;
  align-items: center;
  grid-gap: 30px;
  grid-auto-rows: minmax(110px, auto);
  grid-template-columns: [logo] 138px [search-bar] auto [btn] 180px [end];
`;

const LogoContainer = styled.div`
  grid-column: logo / search-bar;
`;

const SearchBar = styled.input`
  height: 65px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 4px 5px 5px lightgray;
  padding: 10px;
  border: 1px lightgray solid;
  grid-column: search-bar / btn;
  font-size: 18px;
`;

const UploadButton = styled(Button)`
  grid-column: btn / end;
`;

function Header(props) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <SearchBar placeholder="Search by name" />
      <UploadButton primary onClick={() => props.dispatch(actionSetUploadModalOpen(true))}>
        Add a photo
      </UploadButton>
    </HeaderContainer>
  );
}

function mapStateToProps({ images, app }) {
  return {
    images,
    isModalOpen: app.isModalOpen,
  };
}

export default connect(mapStateToProps)(Header);
