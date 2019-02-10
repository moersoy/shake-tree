import React from 'react';
import Landscape from '../../components/Landscape';
import TreeContainer from '../Tree';
import BasketContainer from '../Basket';
import ApplesContainer from '../Apples';
import ShakeButtonContainer from '../ShakeButton';

function App() {
  return (
    <React.Fragment>
      <Landscape>
        <TreeContainer />
        <ApplesContainer />
        <BasketContainer />
      </Landscape>
      <ShakeButtonContainer />
    </React.Fragment>
  );
}

export default App;
