import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import styles from './styles';
import colors from './colors';
import layerStyles from './layer-styles';

const config: ThemeConfig = {
  initialColorMode: 'system',
};

export default extendTheme({
  colors,
  styles,
  layerStyles,
  config,
});
