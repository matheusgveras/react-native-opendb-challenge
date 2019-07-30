import { Animated } from 'react-native';
import posed from 'react-native-pose';

const createComponentFade = (hiddenY = 0, config = {}) => posed.View({
  visible: {
    opacity: 1,
    y: 0,
    transition: ({ value, toValue, useNativeDriver, key }) => {
      if(key === 'opacity') return Animated.timing(value, { toValue, useNativeDriver, ...config });
      if(key === 'y') return Animated.spring(value, { toValue, useNativeDriver, ...config });
    }
  },
  hidden: { opacity: 0, y: hiddenY }
});

const FadeUp = createComponentFade(20);
const FadeDown = createComponentFade(-20);

export { FadeUp, FadeDown };
export default createComponentFade;
