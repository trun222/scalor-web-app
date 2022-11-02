
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';

const SharpenDocs: NextPage = () => {
  return (
    <SideBarLayout>
      <ActionTitle
        action="Sharpen"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/sharpen`}
      />

      <Text fontSize="3xl" className="fontBold">
        Description
      </Text>

      <Description>
        The sharpen action adds sharper, more vibrant color contrast to an image. Similar to the effect of changing a television
        picture profile to Vivid. The colors will pop and the edges around an object will be more defined the higher the sharpen value.
      </Description>

      <JSONSection
        title="Headers"
        json={{ 'Content-Type': 'application/json', token: '${API_TOKEN}' }}
      />

      <JSONSection
        title="Body"
        json={{
          "id": "721389da-2f9e-46f1-b2e0-72498002e421",
          "sharpenValue": 2,
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
    </SideBarLayout>
  )
}

export default SharpenDocs;
