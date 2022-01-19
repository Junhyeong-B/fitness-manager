import React from 'react';
import { Portal } from '@src/components';
import styled from 'styled-components';
import { Colors } from '@src/style';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  visible,
  onClose,
  ...props
}) => {
  return (
    <Portal>
      <ModalContainer visible={visible ? visible : false}>
        <ModalContents {...props}>
          {children}
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContents>
      </ModalContainer>
    </Portal>
  );
};

export default Modal;

const ModalContainer = styled.div<Pick<ModalProps, 'visible'>>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${Colors.backgroundModal};
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContents = styled.div`
  background-color: ${Colors.backgroundWhite};
  padding: 1.25rem;
  border-radius: 0.75rem;
`;

const CloseButton = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: ${Colors.buttonBackgroundBlack};
  color: ${Colors.buttonTextWhite};
  border: 2px solid ${Colors.buttonBackgroundBlack};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border-radius: 0.25rem;
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${Colors.buttonBackgroundBlack};
    background: ${Colors.buttonTextWhite};
  }
`;
