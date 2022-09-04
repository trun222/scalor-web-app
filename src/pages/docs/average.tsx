
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import HeadersSection from '@/src/components/docs/HeadersSection';
import DocLayout from '@/src/components/layouts/DocLayout';

const AverageDocs: NextPage = () => {
  return (
    <DocLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="Average"
          method="POST"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Text bg="white" w="60%" p={4}>
          The color average method takes the average of all of the image pixels colors and applies that to the entire image. i.e. if there are many dark or light pixels that will effect
          color of the rest of the pixels within the image.
        </Text>

        <HeadersSection
          headers={[
            { key: 'Content-Type', value: 'application/json' },
            { key: 'token', value: 'API_TOKEN' }
          ]}
        />

        <JSONSection
          title="Body"
          json={{
            "id": "721389da-2f9e-46f1-b2e0-72498002e421",
            "quality": 50,
            "outputFileName": "image_quality_50",
            "mimeType": "image/jpg"
          }}
        />

        <JSONSection
          title="Response"
          json={{
            "file": "data:image/jpg;base64, ${BASE64_DATA_STRING}"
          }}
        />
      </VStack >
    </DocLayout>
  )
}

export default AverageDocs;
