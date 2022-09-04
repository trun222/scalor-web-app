
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import HeadersSection from '@/src/components/docs/HeadersSection';
import DocLayout from '@/src/components/layouts/DocLayout';

const MoonlightDocs: NextPage = () => {
  return (
    <DocLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="Moonlight"
          method="POST"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Text bg="white" w="60%" p={4}>
          The Moonlight action adds a cool moonlight effect to images without removing color from the image.
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
            "moonValue": 0.9,
            "outputFileName": "moonlight_90",
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

export default MoonlightDocs;
