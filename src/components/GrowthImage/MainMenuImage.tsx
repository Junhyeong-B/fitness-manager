import { Colors } from '@src/style';
import React from 'react';
import styled from 'styled-components';

type GrowthImageProps = {
  imageUrls: string[];
  titles: string[];
};

const GrowthImage = ({ imageUrls, titles }: GrowthImageProps): JSX.Element => {
  const backgroundImageStyle = (url: string): { backgroundImage: string } => {
    return {
      backgroundImage: `url("${url}")`,
    };
  };
  return (
    <Container>
      {imageUrls.map((url, i) => (
        <ImageContainer style={backgroundImageStyle(url)}>
          <ImageBackground className={titles[i]}>
            <Title className={titles[i]}>{titles[i]}</Title>
          </ImageBackground>
        </ImageContainer>
      ))}
    </Container>
  );
};

export default GrowthImage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const ImageContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 300ms ease-in-out;
  border-radius: 0.75rem;
  width: 25%;
  height: 50vh;
  margin: 10px;
  position: relative;

  &:hover {
    transform: scale(1.1) translateY(-30px);
  }
`;

const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 300ms ease-in-out;
  opacity: 0;
  z-index: 1;

  &:hover.Training {
    opacity: 1;
    background-color: ${Colors.trainingBackgroundColor};
  }
  &:hover.Nutrition {
    opacity: 1;
    background-color: ${Colors.nutritionBackgroundColor};
  }
  &:hover.Stretching {
    opacity: 1;
    background-color: ${Colors.stretchingBackgroundColor};
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 300ms ease-in-out;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  &:hover.Training {
    color: ${Colors.trainingColor};
  }
  &:hover.Nutrition {
    color: ${Colors.nutritionColor};
  }
  &:hover.Stretching {
    color: ${Colors.stretchingColor};
  }
`;
