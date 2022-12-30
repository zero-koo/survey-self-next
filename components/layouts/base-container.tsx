import { Box, As } from '@chakra-ui/react';

type props = React.ComponentProps<typeof Box> & {
  children: React.ReactNode;
  maxW?: string;
  as?: As;
};

export default function BaseContainer({
  children,
  maxW = '50rem',
  as = 'div',
  ...restProps
}: props) {
  return (
    <Box as={as} minW={'18.75rem'} maxW={maxW} marginInline={'auto'} {...restProps}>
      {children}
    </Box>
  );
}
