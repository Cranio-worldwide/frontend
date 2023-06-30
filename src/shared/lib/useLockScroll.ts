import { useCallback } from 'react';

export const useLockScroll = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
  }, []);
  return { lockScroll, unlockScroll };
};
