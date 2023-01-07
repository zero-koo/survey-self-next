import { Tag } from '@chakra-ui/react';

type Prop = {
  children: React.ReactNode;
};

export default function SmallTag({ children }: Prop) {
  return (
    <Tag fontSize={'xs'} minHeight={'10px'} paddingBlock={'2px'} px={1} borderRadius={3}>
      {children}
    </Tag>
  );
}
