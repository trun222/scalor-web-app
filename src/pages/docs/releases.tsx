
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import ReactPlayer from 'react-player';

const Releases: NextPage = () => {
  return (
    <DocsLayout>
      <Text fontSize="4xl">
        Release #1
      </Text>

      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

      <Text fontSize="2xl">
        New 🙌
      </Text>

      <ul style={{ paddingLeft: '5em', width: '80%' }}>
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

      <Text fontSize="2xl">
        Improvements 🧰
      </Text>

      <ul style={{ paddingLeft: '5em', width: '80%' }}>
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
    </DocsLayout >
  )
}

export default Releases;
