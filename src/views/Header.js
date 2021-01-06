import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from '../components/Button'
import logo from '../logo.svg'



const HeaderContainer = styled.header`
    width: 100%;
    box-sizing: border-box;
    height: 110px;
    display: flex;
    background-color: white;
    padding-right: 20px;
    padding-left: 20px;
    align-items: center;
`

const LogoContainer = styled.div`

`

const SearchBar = styled.input`
    height: 50px;
    width: 500px;
    border-radius: 20px;
    box-shadow: 4px 5px 5px lightgray;
    padding: 10px;
    border: 1px lightgray solid;
`



function Header() {
  return (
    <HeaderContainer>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>
        <SearchBar placeholder="Search by name" />
        <Button primary>
            Add a photo
        </Button>
    </HeaderContainer>
  );
}


function mapStateToProps({ images }) {  
    return {
      images
    };
  }
  
  export default connect(mapStateToProps)(Header);
