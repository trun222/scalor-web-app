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
  finishLargeUploadExample,
} from '@/src/data/examples';

const FinishLargeUpload: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Finish Large Upload"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/finish-large-upload`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        In order to finish or complete a large upload. You must first call the <Link style={{ textDecoration: 'underline', color: '#ED64A6' }} href="/docs/uploads/start-large-upload">Start Large Up</Link>
        &nbsp; action before you can call this action. You will supply the fileURI and all the upload parts that were created in the Start Large Upload action and their corresponding part number and ETag. You must
        also include a connectionId which is the connection you want to use to upload the file to the cloud. See the <Link style={{ textDecoration: 'underline', color: '#ED64A6' }} href="/docs/cloud/create-connection">Create Cloud Connection</Link> &nbsp;
        section for more information.
      </Description>

      <CodeSection
        title="Request"
        code={finishLargeUploadExample.axiosCode}
      />

      <JSONSection
        title="Response"
        json={{
          "url": "https://scalor.s3.amazonaws.com/test/Test12MB.mp4"
        }}
        h="100px"
        w="70%"
      />
    </DocsLayout >
  )
}

export default FinishLargeUpload;
