
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import HeadersSection from '@/src/components/docs/HeadersSection';
import DocLayout from '@/src/components/layouts/DocLayout';

const QualityDocs: NextPage = () => {
  return (
    <DocLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="Quality"
          method="POST"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Text bg="white" w="60%" p={4}>
          The quality action allows you to adjust the quality of the image uploaded from 1% to 100%.
          You can use this action to get high quality compression. If you set the quality to 50% and the original
          image is fairly large in size you will be amazed to see that there is almost no difference visually in quality, but huge
          differences in file sizes.
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
      </VStack>
    </DocLayout>
  )
}

export default QualityDocs;
