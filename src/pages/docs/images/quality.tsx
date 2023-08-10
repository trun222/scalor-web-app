
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
  imageQualityExample,
} from '@/src/data/examples';

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

      <CodeSection
        title="Request"
        code={imageQualityExample.axiosCode}
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
        h="170px"
        w="70%"
      />
    </DocsLayout >
  )
}

export default QualityDocs;
