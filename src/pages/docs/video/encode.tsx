
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import DocsLayout from '@/src/components/layouts/DocsLayout';
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import Description from '@/src/components/docs/Description';
import CopyClipboard from '@/src/components/common/CopyClipboard';
import CodeSection from '@/src/components/docs/CodeSection';
import {
  videoEncodeExample,
} from '@/src/data/examples';

const Encode: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Encode"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/encode`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        The Encode action will convert your video to a different resolution. The video will be encoded in the background and you will receive a
        message with the file id. When the file is done encoding, you will receive a url and other necessary metadata at the webhook url you
        provided when you sent the request. The server will attempt multiple times to send the webhook if it fails. Please note you cannot
        increase the resolution of the video you are encoding. You can only decrease the resolution.
      </Description>

      <CodeSection
        title="Request"
        code={videoEncodeExample.axiosCode}
      />

      <JSONSection
        title="Response"
        json={{
          "message": "Your file with id 3122f4cd-21bc-45c9-95c8-a608ae962ee6 is being encoded."
        }}
        h="100px"
        w="70%"
      />
    </DocsLayout>
  )
}

export default Encode;
