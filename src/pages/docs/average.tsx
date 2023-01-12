
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Description from '@/src/components/docs/Description';
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import CopyClipboard from '@/src/components/common/CopyClipboard';

const AverageDocs: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Average"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/average`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        The color average method takes the average of all of the image pixels colors and applies that to the entire image. i.e. if there are many dark or light pixels that will effect
        the color of the rest of the pixels within the image.
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
          "quality": 50,
          "platform": "WEB",
          "mimeType": "image/jpg"
        }}
        h="175px"
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
    </DocsLayout>
  )
}

export default AverageDocs;
