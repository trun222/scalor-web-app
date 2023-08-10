import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';
import CodeSection from '@/src/components/docs/CodeSection';
import {
  uploadExample,
} from '@/src/data/examples';

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
        Upload an image or video (10MB limit) so that you can perform other actions on it such as encoding, resizing, adjusting the quality (compression), sharpening the colors, and many more.
        Once the media is uploaded you will receive an uploadId that you will use for all subsequent operations on the media. You can upload the binary data directly, or use a URL. The media on the server gets wiped daily.
      </Description>

      <CodeSection
        title="Request"
        code={uploadExample.axiosCode}
      />

      <JSONSection
        title="Response"
        json={{
          "uploadId": "9e51c122-a691-4bdf-84a7-d480xda2cf60",
          "metadata": {
            "name": "Test.mp4",
            "mimeType": "video/mp4",
            "size": 66323913
          }
        }}
        h="210px"
        w="70%"
      />
    </DocsLayout >
  )
}

export default UploadDocs;
