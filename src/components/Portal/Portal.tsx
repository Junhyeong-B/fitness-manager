import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import React from 'react';

type PortalProps = {
  children: JSX.Element;
};

const Portal: React.FC<PortalProps> = ({ children }) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  });

  return createPortal(children, element);
};

export default Portal;
