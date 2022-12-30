import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, HStack, IconButton, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import BaseContainer from './base-container';

export default function RootHeader() {
  return (
    <BaseContainer as={'header'}>
      <Flex h={['3.5rem', '3.5rem', '4rem']} px={4} py={3} alignItems={'center'}>
        <Heading size={'md'}>Survey-self</Heading>
        <Spacer />
        <HStack>
          <Link href={'/login'}>
            <Button size={'sm'} aria-label="Login">
              로그인
            </Button>
          </Link>
          <IconButton
            size={'sm'}
            variant="outline"
            aria-label="Search Icon"
            icon={<SearchIcon />}
          />
          <IconButton
            size={'sm'}
            variant="outline"
            aria-label="Menu Icon"
            icon={<HamburgerIcon />}
          />
        </HStack>
      </Flex>
    </BaseContainer>
  );
}
