
import React from 'react';
import type { NextPage } from 'next'
import { VStack, HStack, Text } from '@chakra-ui/react';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';

const Releases: NextPage = () => {
  return (
    <SideBarLayout>
      <VStack>
        <Text fontSize="4xl">
          Version 0.0.1
        </Text>

        <Text>

        </Text>
      </VStack>
    </SideBarLayout >
  )
}

export default Releases;
