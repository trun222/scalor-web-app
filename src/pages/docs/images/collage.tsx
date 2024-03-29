
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
  imageCollageExample,
} from '@/src/data/examples';

const CollageDocs: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Collage"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/collage`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        The collage action takes two images and combines them into one. The first uploadId will be the first image from left to right and the second uploadId
        will be the second image. If the image dimensions are radically different there will be white space to preserve the ratio of the largest image.
      </Description>

      <CodeSection
        title="Request"
        code={imageCollageExample.axiosCode}
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

export default CollageDocs;
