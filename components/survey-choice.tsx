import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { useSecondaryColor, usePrimaryColor } from '../hooks/theme';

type Props = {
  text: string;
  percent?: number | null;
  isOpen?: boolean;
  isSelected?: boolean;
};

export default function SurveyChoice({
  text,
  percent = null,
  isOpen = false,
  isSelected = false,
}: Props) {
  const primaryColor = usePrimaryColor();
  const secondaryColor = useSecondaryColor();

  return (
    <Flex
      as="button"
      position={'relative'}
      w="100%"
      borderWidth={'1px'}
      borderRadius={'0.25rem'}
      borderColor={isSelected ? primaryColor : secondaryColor}
      color={isSelected ? primaryColor : secondaryColor}
      px={1.5}
      py={1}
      fontSize={'xs'}
      fontWeight={isSelected ? 500 : 400}
    >
      <Text>{text}</Text>
      <Spacer />
      <Text>{`${Math.round(percent || 0)}%`}</Text>
      <Box w="100%" h="100%" p={'0.0625rem'} position={'absolute'} top={0} left={0}>
        {isOpen && percent !== null ? (
          <Box
            w={`${percent}%`}
            borderRadius={'0.1875rem'}
            height={'100%'}
            backgroundColor={isSelected ? primaryColor : secondaryColor}
            opacity={0.15}
          ></Box>
        ) : null}
      </Box>
    </Flex>
  );
}
