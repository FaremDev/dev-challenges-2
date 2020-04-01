import './App.css';
import styled from 'styled-components';
import Header from './components/Header'
import ImagesMosaic from './components/ImagesMosaic'

// TODO: create and design a Header component
// TODO: create and design a ImagesMosaic component

const Body = styled.main`

`

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <ImagesMosaic />
      </Body>
    </div>
  );
}

export default App;
