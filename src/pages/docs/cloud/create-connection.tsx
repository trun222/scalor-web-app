
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Description from '@/src/components/docs/Description';
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import CopyClipboard from '@/src/components/common/CopyClipboard';

const CreateConnection: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Create Connection"
        method="POST"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/cloudConnection`}
      />

      <Text fontSize="3xl" className="fontBold">
        Description
      </Text>

      <Description>
        Easily create a Cloud Connection with AWS, GCP and Azure.
      </Description>

      <JSONSection
        title="Headers"
        json={{ 'Content-Type': 'application/json', token: '${API_TOKEN}' }}
        w="70%"
      />

      <JSONSection
        title="AWS Example"
        json={{
          "provider": "AWS",
          "bucket": "scalor",
          "region": "us-east-1",
          "accessKey": "access key",
          "secretKey": "secret key"
        }}
        w="70%"
      />

      <JSONSection
        title="Azure Example"
        json={{
          "provider": "AZURE",
          "accountName": "scalortest",
          "accountAccessKey": "${base64 string}"
        }}
        w="70%"
      />

      <JSONSection
        title="GCP Example"
        json={{
          "provider": "GCP",
          "bucket": "scalor-test",
          "clientEmail": "scalor-test@scalor.iam.gserviceaccount.com",
          "privateKey": "-----BEGIN PRIVATE KEY----------END PRIVATE KEY-----\n"
        }}
        w="70%"
      />
    </DocsLayout>
  )
}

export default CreateConnection;
