import { ChatIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Spacer, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { SimpleUser } from '../types/general';
import SurveyChoice from './survey-choice';
import { timeago } from '../utils/timeago';
import SmallTag from './small-tag';

type Props = {
  title: string;
  subTitle?: string;
  numQuestions?: number;
  choices: Array<{
    text: string;
    percent: number | null;
    isOpen: boolean;
    isSelected: boolean;
  }>;
  tags: string[];
  createdBy: SimpleUser | null;
};

const DEFAULT_MAX_NUM_CHOICE = 2;

export default function SurveyCard({
  title,
  subTitle,
  numQuestions = 1,
  choices,
  tags,
  createdBy,
}: Props) {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const [choicesHidden, setChoiceHidden] = useState(choices.length > DEFAULT_MAX_NUM_CHOICE);
  const choicesToShow = useMemo(() => {
    if (!choicesHidden) return choices;
    return choices.slice(0, DEFAULT_MAX_NUM_CHOICE);
  }, [choicesHidden, choices]);

  return (
    <Box
      px={4}
      py={4}
      _notFirst={{
        borderTopStyle: 'solid',
        borderTopColor: borderColor,
        borderTopWidth: '0.25rem',
      }}
    >
      <HStack spacing={1} mb={1}>
        {tags.map((tag, index) => (
          <SmallTag key={index}>{tag}</SmallTag>
        ))}
      </HStack>
      <Text fontSize={'md'} fontWeight={700} mb={2}>
        {title}
      </Text>
      <HStack spacing={1}>
        {subTitle ? (
          <Flex mb={1} gap={1} alignItems={'center'}>
            <Text fontSize={'sm'} fontWeight={500}>{`Q. ${subTitle}`}</Text>
            {numQuestions > 1 ? (
              <Text fontSize="xs" color={'gray.500'} fontWeight={500}>{`외 ${
                numQuestions - 1
              }문항`}</Text>
            ) : null}
          </Flex>
        ) : null}
      </HStack>
      <VStack spacing={1.5}>
        {choicesToShow.map((props, index) => (
          <SurveyChoice {...props} key={index} />
        ))}
      </VStack>
      {choicesHidden ? (
        <Text
          fontSize={'xs'}
          color={'grey'}
          mt={1}
          fontWeight={500}
          textAlign={'end'}
          onClick={() => setChoiceHidden(false)}
        >{`외 ${choices.length - DEFAULT_MAX_NUM_CHOICE} 선택지 모두 보기`}</Text>
      ) : null}
      <Flex mt={2}>
        <HStack fontSize={'xs'} color={'grey'} spacing={0.5}>
          <Text>{createdBy?.name || '익명'}</Text>
          <Text>•</Text>
          <Text>{timeago('2022-12-31 15:32')}</Text>
        </HStack>
        <Spacer />
        <HStack spacing={3}>
          <StarIcon w={3} h={3} />
          <ChatIcon w={3} h={3} />
        </HStack>
      </Flex>
    </Box>
  );
}
