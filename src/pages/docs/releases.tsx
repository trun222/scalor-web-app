
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';
import ReactPlayer from 'react-player';

const Releases: NextPage = () => {
  return (
    <SideBarLayout>
      <VStack align="start" spacing={8} px={2}>
        <Text fontSize="4xl">
          Version 0.0.1
        </Text>

        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

        <Text fontSize="2xl">
          New 🙌
        </Text>

        <ul style={{ paddingLeft: '5em' }}>
          <li>
            Cloud Connectors -- You can now add different Cloud connectors in order to save your API results to your favorite Cloud Provider! This will make it easier than ever to use Scalor.
            <i> In the future we will be providing even more way to manage your digital assets.</i>
          </li>
        </ul>

        <Text fontSize="2xl">
          Improvements 🧰
        </Text>

        <ul style={{ paddingLeft: '5em' }}>
          <li>
            Fixed styling issues on the landing page where section colors were not distinguishable
          </li>
          <li>
            Fixed responsive issues for the nav bar for docs and demo layouts
          </li>
        </ul>
      </VStack>
    </SideBarLayout >
  )
}

export default Releases;
