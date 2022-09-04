
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import HeadersSection from '@/src/components/docs/HeadersSection';
import DocLayout from '@/src/components/layouts/DocLayout';

const CollageDocs: NextPage = () => {
  return (
    <DocLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="Collage"
          method="POST"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Text bg="white" w="60%" p={4}>
          The collage action takes two images and combines them into one to make a collage. The first uploadId will be the first image from left to right and the second uploadId
          will be the second image.
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
            "idOne": "721389da-2f9e-46f1-b2e0-72498002e421",
            "idTwo": "721389da-2f9e-46f1-b2e0-72498002e421",
            "outputFileName": "collage_image",
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

export default CollageDocs;
