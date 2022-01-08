import React, { useState } from 'react';
import styled from 'styled-components';

type ImageUrls = {
  url: string;
  alt: string;
};

interface SliderProps extends React.FC {
  width?: string;
  height?: string;
  urls: ImageUrls[];
}

const Slider = ({
  width,
  height,
  urls,
  ...props
}: SliderProps): JSX.Element => {
  const SliderStyle = {
    width,
    height,
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const PrevButtonClickHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(urls.length - 1);
    } else {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const NextButtonClickHandler = () => {
    if (currentIndex === urls.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <SliderContainer style={SliderStyle} {...props}>
      <PrevButton onClick={PrevButtonClickHandler}>
        <svg height="24px" viewBox="0 0 24 24" width="24px">
          <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
        </svg>
      </PrevButton>
      <ImageContainer style={{ transform: `translateX(-${currentIndex}00%)` }}>
        {urls.map(({ url }) => (
          <Image
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        ))}
      </ImageContainer>
      <NextButton onClick={NextButtonClickHandler}>
        <svg height="24px" viewBox="0 0 24 24" width="24px">
          <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
        </svg>
      </NextButton>
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: all 500ms;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  flex-shrink: 0;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem 0.5rem;
  border: none;
  z-index: 1;

  svg {
    fill: white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    svg {
      fill: black;
    }
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.7);
    svg {
      fill: white;
    }
  }
`;

const PrevButton = styled(Button)`
  left: 1px;
`;

const NextButton = styled(Button)`
  right: 1px;
`;

const defaultProps: { width: string; height: string; urls: string[] } = {
  width: '700px',
  height: '400px',
  urls: [''],
};

Slider.defaultProps = defaultProps;
