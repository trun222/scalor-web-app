
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
  imageSharpenExample,
} from '@/src/data/examples';

const SharpenDocs: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Sharpen"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/sharpen`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        The sharpen action adds sharper, more vibrant color contrast to an image. Similar to the effect of changing a television
        picture profile to Vivid. The colors will pop and the edges around an object will be more defined the higher the sharpen value.
      </Description>

      <CodeSection
        title="Request"
        code={imageSharpenExample.axiosCode}
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

export default SharpenDocs;
