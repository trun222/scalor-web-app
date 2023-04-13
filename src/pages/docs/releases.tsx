
import React from 'react';
import type { NextPage } from 'next'
import { Text, Box } from '@chakra-ui/react';
import DocsLayout from '@/src/components/layouts/DocsLayout';
// import ReactPlayer from 'react-player';

const Releases: NextPage = () => {
  return (
    <DocsLayout>
      <Text fontSize="4xl">
        Release #1
      </Text>

      {/* 
      <Box h="350px" w={{ base: '100%', md: '75%', lg: '600px' }}>
        <ReactPlayer height="100%" width="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </Box> */}

      <Text fontSize="2xl">
        New 🙌
      </Text>

      <Box pl={8} w={{ base: '75%', md: "50%" }}>
        <ul style={{ width: '100%' }}>
          <li>
            Cloud Connectors - You can now add different Cloud connectors in order to save your API results to your favorite Cloud Provider! This will make it easier than ever to use Scalor.
            <br />
            <br />

            You can setup multiple connectors across different Cloud providers or with a single provider.
            <br />
            <br />
            <i>We currently support AWS, GCP and Azure.</i>
          </li>
        </ul>
      </Box>


      <Text fontSize="2xl">
        Improvements 🧰
      </Text>

      <Box pl={8} w={{ base: '75%', md: "50%" }}>
        <ul style={{ width: '100%' }}>
          <li>
            Upload - You can now do uploads from URLs and not just binary data.
          </li>
          <li>
            API - All API functionality now supports working with URLs instead of binary data.
          </li>
          <li>
            Fixed styling issues on the landing page where section colors were not distinguishable
          </li>
          <li>
            Fixed responsive issues for the nav bar for docs and demo layouts
          </li>
        </ul>
      </Box>
    </DocsLayout >
  )
}

export default Releases;
