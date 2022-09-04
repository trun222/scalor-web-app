
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import HeadersSection from '@/src/components/docs/HeadersSection';
import DocLayout from '@/src/components/layouts/DocLayout';

const GrayDocs: NextPage = () => {
  return (
    <DocLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="Gray"
          method="POST"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Text bg="white" w="60%" p={4}>
          The gray method applies gray scale to an image or what most people consider a 'back and white' image.
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
            "outputFileName": "gray_image",
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

export default GrayDocs;
