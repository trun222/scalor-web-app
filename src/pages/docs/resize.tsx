
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';

const ResizeDocs: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Resize"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/resize`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        Resize an image. Note: Depending on the aspect ratio of the image the dimensions will remain proportional. i.e. you want to change an image to 500x500 it may return 500x300
        in order to maintain the proper ratio.
      </Description>

      <JSONSection
        title="Headers"
        json={{ 'Content-Type': 'application/json', token: '${API_TOKEN}' }}
        h="125px"
        w="70%"
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
        h="200px"
        w="70%"
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
        h="100px"
        w="70%"
      />

      <JSONSection
        title="Server Response"
        json={{
          "file": {
            "type": "Buffer",
            "data": "${BINARY_DATA}"
          }
        }}
        h="175px"
        w="70%"
      />
    </DocsLayout >
  )
}

export default ResizeDocs;
