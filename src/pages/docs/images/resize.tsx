
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';
import CodeSection from '@/src/components/docs/CodeSection';
import {
  imageResizeExample,
} from '@/src/data/examples';

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

      <CodeSection
        title="Request"
        code={imageResizeExample.axiosCode}
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
