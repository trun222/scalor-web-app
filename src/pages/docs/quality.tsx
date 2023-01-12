
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';

const QualityDocs: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Quality"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/quality`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        The quality action allows you to adjust the quality of the image uploaded from 1% to 100%.
        You can use this action to get high quality compression. If you set the quality to 50% and the original
        image is fairly large in size you will be amazed to see that there is almost no difference visually in quality, but huge
        differences in file sizes.
      </Description>

      <JSONSection
        title="Headers"
        json={{ 'Content-Type': 'application/json', token: '${API_TOKEN}' }}
      />

      <JSONSection
        title="Body"
        json={{
          "id": "721389da-2f9e-46f1-b2e0-72498002e421",
          "quality": 50,
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
    </DocsLayout >
  )
}

export default QualityDocs;
