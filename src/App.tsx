import React from 'react';
import { MainMenuImage, Nav } from './components';
import { MAINMENUIMAGEURL, MAINMENUTITLE } from './constants';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <MainMenuImage imageUrls={MAINMENUIMAGEURL} titles={MAINMENUTITLE} />
    </React.Fragment>
  );
}

export default App;
