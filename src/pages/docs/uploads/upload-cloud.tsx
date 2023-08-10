import React from 'react';
import type { NextPage } from 'next'
import { Text, Link } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';
import CodeSection from '@/src/components/docs/CodeSection';
import {
  uploadCloudExample,
} from '@/src/data/examples';

const UploadCloud: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Upload Cloud"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/upload`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        Upload Cloud is similar to Upload except that the media is uploaded to the cloud instead of the server. You must setup a Cloud Connection first before you can use this action.
        See the <Link style={{ textDecoration: 'underline', color: '#ED64A6' }} href="/docs/cloud/create-connection">Create Cloud Connection</Link> section for more information. You can upload the binary data directly,
        or use a URL.
      </Description>

      <CodeSection
        title="Request"
        code={uploadCloudExample.axiosCode}
      />


      <JSONSection
        title="Response"
        json={{
          "uploadId": "9e51c122-a691-4bdf-84a7-d480xda2cf60",
          "metadata": {
            "name": "Test.jpg",
            "mimeType": "image/jpg",
            "size": 323913
          }
        }}
        h="210px"
        w="70%"
      />
    </DocsLayout >
  )
}

export default UploadCloud;
