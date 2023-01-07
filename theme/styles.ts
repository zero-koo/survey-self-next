import { StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
      bg: mode('#F8F9FA', '#121212')(props),
    },
    '.text-secondary': {
      color: mode('blackAlpha.600', 'whiteAlpha.600')(props),
    },
  }),
};

export default styles;
