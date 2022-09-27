import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useWindowDimensions = () => {
  const [info, setInfo] = useState(Dimensions.get('screen'));
  const onChange = result => {
    setInfo(result.screen);
  };
  useEffect(() => {
    let listener = Dimensions.addEventListener('change', onChange);
    return () => {
      listener.remove();
    };
  });

  return {
    ...info,
    isPortrait:info.width<info.height
  }
};

export default useWindowDimensions
