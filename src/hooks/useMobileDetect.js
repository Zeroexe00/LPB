import { useState, useLayoutEffect } from 'react';
import { useMedia } from 'react-use';

const useIsomorphicLayoutEffect = useLayoutEffect;

export default function useMobileDetect() {
  const mediaState = useMedia('(max-width: 650px)');
  const [isMobile, setIsMobile] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setIsMobile(mediaState);
  }, [mediaState]);

  return isMobile;
}
