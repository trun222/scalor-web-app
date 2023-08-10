
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Description from '@/src/components/docs/Description';
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import CopyClipboard from '@/src/components/common/CopyClipboard';
import CodeSection from '@/src/components/docs/CodeSection';
import {
  deleteConnectionExample,
} from '@/src/data/examples';

const DeleteConnection: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Delete Connection"
        method="DELETE"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/cloudConnection/\${connectionId}`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        Delete a Cloud Connection with the connectionId.
      </Description>

      <CodeSection
        title="Request"
        code={deleteConnectionExample.axiosCode}
      />

      <JSONSection
        title="Example"
        json={{
          "id": "1",
        }}
        h="100px"
        w="70%"
      />
    </DocsLayout>
  )
}

export default DeleteConnection;
