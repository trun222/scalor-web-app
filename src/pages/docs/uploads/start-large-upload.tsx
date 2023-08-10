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
  startLargeUploadExample,
} from '@/src/data/examples';

const StartLargeUpload: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Start Large Upload"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/start-large-upload`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        Start Large Upload is intended for a multimedia file larger than 10MB. You can upload any size file larger than this depending on
        your plan. Once you have begun the process for the large upload, you will receive an array of signed URLs which you will use to upload
        your multimedia file in chunks. Once you have uploaded all the chunks, you will need to call the <Link style={{ textDecoration: 'underline', color: '#ED64A6' }} href="/docs/uploads/finish-large-upload">Finish Large Upload</Link>
        &nbsp; endpoint to complete the upload.
      </Description>

      <CodeSection
        title="Request"
        code={startLargeUploadExample.axiosCode}
      />

      <JSONSection
        title="Response"
        json={{
          "signedUrls": [
            "https://scalor.s3.us-east-1.amazonaws.com/test/Test12MB.mp4?{long-auth-string}",
            "https://scalor.s3.us-east-1.amazonaws.com/test/Test12MB.mp4?{long-auth-string}",
            "https://scalor.s3.us-east-1.amazonaws.com/test/Test12MB.mp4?{long-auth-string}",
          ],
          "assetId": "{long-asset-id}",
          "key": "test/Test12MB.mp4"
        }}
        h="300px"
        w="60%"
      />
    </DocsLayout >
  )
}

export default StartLargeUpload;
