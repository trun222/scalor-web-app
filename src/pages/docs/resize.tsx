
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import HeadersSection from '@/src/components/docs/HeadersSection';
import DocLayout from '@/src/components/layouts/DocLayout';

const ResizeDocs: NextPage = () => {
  return (
    <DocLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="Resize"
          method="POST"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Text bg="white" w="60%" p={4}>
          Resize an image. Note: Depending on the aspect ratio of the image the dimensions will remain proportional. i.e. you want to change an image to 500x500 it may return 500x300
          in order to maintain the proper ratio.
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
            "height": 500,
            "width": 500,
            "outputFileName": "resized_500_by_500",
            "mimeType": "image/jpg"
          }}
        />

        <JSONSection
          title="Response"
          json={{
            "file": "data:image/jpg;base64, ${BASE64_DATA_STRING}"
          }}
        />
      </VStack>
    </DocLayout>
  )
}

export default ResizeDocs;
