
import React from 'react';
import type { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';
import Description from '@/src/components/docs/Description';

const ResizeDocs: NextPage = () => {
  return (
    <SideBarLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="Resize"
          method="POST"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Description>
          Resize an image. Note: Depending on the aspect ratio of the image the dimensions will remain proportional. i.e. you want to change an image to 500x500 it may return 500x300
          in order to maintain the proper ratio.
        </Description>

        <JSONSection
          title="Headers"
          json={{ 'Content-Type': 'application/json', token: '${API_TOKEN}' }}
        />

        <JSONSection
          title="Body"
          json={{
            "id": "721389da-2f9e-46f1-b2e0-72498002e421",
            "height": 500,
            "width": 500,
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
            "file": "data:image/jpg;base64, ${BASE64}"
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

export default ResizeDocs;
