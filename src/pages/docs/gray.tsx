
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';

const GrayDocs: NextPage = () => {
  return (
    <SideBarLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="Gray"
          method="POST"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Text bg="white" w="60%" p={4}>
          The gray method applies gray scale to an image or what most people consider a back and white image.
        </Text>

        <JSONSection
          title="Headers"
          json={{ 'Content-Type': 'application/json', token: '${API_TOKEN}' }}
        />

        <JSONSection
          title="Body"
          json={{
            "id": "721389da-2f9e-46f1-b2e0-72498002e421",
            "platform": "WEB",
            "mimeType": "image/jpg"
          }}
        />

        <PropertiesSection
          properties={[
            { key: 'platform', value: "string", note: 'Value can be either WEB or SERVER' }
          ]}
        />

        <JSONSection
          title="Web Response"
          json={{
            "file": "data:image/jpg;base64, ${BASE64_DATA_STRING}"
          }}
        />

        <JSONSection
          title="Server Response"
          json={{
            "file": {
              "type": "Buffer",
              "data": "${BINARY_DATA}"
            }
          }}
        />
      </VStack>
    </SideBarLayout>
  )
}

export default GrayDocs;
