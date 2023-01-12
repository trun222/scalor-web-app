
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Description from '@/src/components/docs/Description';
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import CopyClipboard from '@/src/components/common/CopyClipboard';

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

      <Text fontSize="3xl" className="fontBold">
        Description
      </Text>

      <Description>
        Delete a Cloud Connection with the connectionId.
      </Description>

      <JSONSection
        title="Headers"
        json={{ token: '${API_TOKEN}' }}
        w="70%"
      />

      <JSONSection
        title="Example"
        json={{
          "id": "9",
        }}
        w="70%"
      />
    </DocsLayout>
  )
}

export default DeleteConnection;
