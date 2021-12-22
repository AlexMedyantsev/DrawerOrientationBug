import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const getOrientation = (width, height) => {
  if (width < height) {
    return 'PORTRAIT';
  }
  return 'LANDSCAPE';
};

 const WINDOW_WIDTH = Dimensions.get('window').width;
 const WINDOW_HEIGHT = Dimensions.get('window').height;

export function useOrientation() {
  const [orientation, setOrientation] = useState(() => (getOrientation(WINDOW_WIDTH, WINDOW_HEIGHT)));

  useEffect(() => {
    const listener = Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      const currentOrientation = getOrientation(width, height);
      setOrientation(currentOrientation);
    });

    return (() => {
      listener.remove();
    });
  }, []);

  return orientation;
}
