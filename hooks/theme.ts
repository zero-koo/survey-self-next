import { useColorModeValue } from '@chakra-ui/react';

export function usePrimaryColor() {
  return useColorModeValue('blue.500', 'yellow.400');
}
export function useSecondaryColor() {
  return useColorModeValue('blackAlpha.600', 'whiteAlpha.700');
}
