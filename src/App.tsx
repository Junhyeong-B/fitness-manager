import React from 'react';
import { MainMenuImage, Nav, Slider, WorkoutInfo } from './components';
import {
  MAINMENUIMAGEURL,
  MAINMENUTITLE,
  STRETCHINGIMAGEURL,
  WORKOUTIMAGEURL,
  WORKOUTINFO_THREEMAJORWORKOUT,
} from './constants';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <MainMenuImage imageUrls={MAINMENUIMAGEURL} titles={MAINMENUTITLE} />
      {WORKOUTIMAGEURL.map((url: string, i: number) => (
        <WorkoutInfo
          image={url}
          key={url}
          text={WORKOUTINFO_THREEMAJORWORKOUT[i]}
          type={'vertical'}
        />
      ))}
      <Slider urls={STRETCHINGIMAGEURL} />
    </React.Fragment>
  );
}

export default App;
