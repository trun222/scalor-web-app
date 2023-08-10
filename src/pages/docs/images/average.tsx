
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Description from '@/src/components/docs/Description';
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import CopyClipboard from '@/src/components/common/CopyClipboard';
import CodeSection from '@/src/components/docs/CodeSection';
import {
  imageColorBalanceExample,
} from '@/src/data/examples';

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

      <CodeSection
        title="Request"
        code={imageColorBalanceExample.axiosCode}
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
