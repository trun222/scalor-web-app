
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import PropertiesSection from '@/src/components/docs/PropertiesSection';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';

const CollageDocs: NextPage = () => {
  return (
    <SideBarLayout>
      <ActionTitle
        action="Collage"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/collage`}
      />

      <Text fontSize="4xl" fontWeight="thin">
        Description
      </Text>

      <Description>
        The collage action takes two images and combines them into one. The first uploadId will be the first image from left to right and the second uploadId
        will be the second image. If the image dimensions are radically different there will be white space to preserve the ratio of the largest image.
      </Description>




      <JSONSection
        title="Headers"
        json={{ 'Content-Type': 'application/json', token: '${API_TOKEN}' }}
      />

      <JSONSection
        title="Body"
        json={{
          "idOne": "721389da-2f9e-46f1-b2e0-72498002e421",
          "idTwo": "721389da-2f9e-46f1-b2e0-72498002e421",
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

export default CollageDocs;
