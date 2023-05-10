import React, { useEffect, useRef } from 'react';

interface IProps {
  children?: React.ReactNode;
  onClose: () => void;
}

export const Dropdown: React.FC<IProps> = ({ onClose, children }: IProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClose]);

  return <div ref={ref}>{children}</div>;
};
