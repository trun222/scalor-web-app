import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';

const UploadDocs: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Upload"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/upload`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        Upload an image (10MB limit per image) so that you can perform other actions on it such as resizing, adjusting the quality (compression), sharpening the colors, and many more.
        Once the image is uploaded you will receive an uploadId that you will use for all subsequent operations on the image. The images on the server get wiped daily.
      </Description>

      <JSONSection
        title="Headers"
        json={{ 'Content-Type': 'multipart-form-data', token: '${API_TOKEN}' }}
        h="125px"
        w="70%"
      />

      <JSONSection
        title="Body"
        json={{ file: '${multipart-form-data}' }}
        h="100px"
        w="70%"
      />

      <JSONSection
        title="Response"
        json={{
          "uploadId": "9e51c122-a691-4bdf-84a7-d480xda2cf60"
        }}
        h="100px"
        w="70%"
      />
    </DocsLayout >
  )
}

export default UploadDocs;
