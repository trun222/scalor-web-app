
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';
import Description from '@/src/components/docs/Description';

const UploadDocs: NextPage = () => {
  return (
    <SideBarLayout>
      <ActionTitle
        action="Upload"
        method="POST"
      />

      <Text fontSize="4xl" fontWeight="thin">
        Description
      </Text>

      <Description>
        Upload an image so that you can perform other actions on it such as resizing, adjusting the quality (compression), sharpening the colors, and many more.
        Once the image is uploaded you will receive an uploadId that you will use for all subsequent operations on the image. The images on the server get wiped daily.
      </Description>

      <JSONSection
        title="Headers"
        json={{ 'Content-Type': 'multipart-form-data', token: '${API_TOKEN}' }}
      />

      <JSONSection
        title="Body"
        json={{ file: '${multipart-form-data}' }}
      />

      <JSONSection
        title="Response"
        json={{
          "uploadId": "9e51c122-a691-4bdf-84a7-d480xda2cf60"
        }}
      />
    </SideBarLayout >
  )
}

export default UploadDocs;
