import { Colors, FontSize } from '@src/style';
import React from 'react';
import styled from 'styled-components';

interface WorkoutInfoProps extends React.ComponentProps<'div'> {
  type: 'vertical' | 'horizontal';
  image: string;
  text: string;
}

const WorkoutInfo = ({ type, image, text }: WorkoutInfoProps): JSX.Element => {
  const containerStyle: {
    width: string;
    height: string;
    backgroundImage: string;
  } = {
    width: type === 'vertical' ? '200px' : '300px',
    height: type === 'vertical' ? '300px' : '200px',
    backgroundImage: `url(${image})`,
  };
  return (
    <WorkoutInfoContainer style={containerStyle}>
      <WorkoutInfoTitle>
        <Title>{text} ✔</Title>
      </WorkoutInfoTitle>
    </WorkoutInfoContainer>
  );
};

export default WorkoutInfo;

const WorkoutInfoContainer = styled.div`
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 0.5rem;
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover h6 {
    transform: translateY(0);
    opacity: 1;
  }
`;

const WorkoutInfoTitle = styled.h6`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  transition: all 400ms;
  transform: translateY(100%);
  opacity: 0;
`;

const Title = styled.span`
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: ${FontSize.medium};
  transition: color 250ms ease;

  &:hover {
    color: ${Colors.accentColor};
  }
`;

const defaultProps: WorkoutInfoProps = {
  type: 'vertical',
  image: '',
  text: '',
};

WorkoutInfo.defaultProps = defaultProps;
