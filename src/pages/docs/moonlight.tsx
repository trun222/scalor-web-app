
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';
import Description from '@/src/components/docs/Description';

const MoonlightDocs: NextPage = () => {
  return (
    <SideBarLayout>
      <ActionTitle
        action="Moonlight"
        method="POST"
      />

      <Text fontSize="4xl" fontWeight="thin">
        Description
      </Text>

      <Description>
        The Moonlight action adds a cool moonlight effect to images without removing color from the image.
      </Description>

      <JSONSection
        title="Headers"
        json={{ 'Content-Type': 'application/json', token: '${API_TOKEN}' }}
      />

      <JSONSection
        title="Body"
        json={{
          "id": "721389da-2f9e-46f1-b2e0-72498002e421",
          "moonValue": 0.9,
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
    </SideBarLayout >
  )
}

export default MoonlightDocs;
