
import React from 'react';
import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Description from '@/src/components/docs/Description';
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import DocsLayout from '@/src/components/layouts/DocsLayout';
import CopyClipboard from '@/src/components/common/CopyClipboard';

const GetConnection: NextPage = () => {
  return (
    <DocsLayout>
      <ActionTitle
        action="Get Connection"
        method="GET"
      />

      <CopyClipboard
        text={`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/cloudConnection/\${connectionId}`}
      />

      <Text fontSize="2xl">
        Description
      </Text>

      <Description>
        Fetches a particular Cloud Connection based on the connectionId assuming that the connectionId is for the user requesting the Cloud Connection.

        <br />
        <br />
        <i>
          Note: All sensitive data such as access keys and secret keys are encrypted during transit and at rest.
        </i>
      </Description>

      <JSONSection
        title="Headers"
        json={{ token: '${API_TOKEN}' }}
        w="70%"
      />

      <JSONSection
        title="AWS Response"
        json={{
          "id": 4,
          "userId": 1,
          "provider": "AWS",
          "bucket": "scalor",
          "region": "us-east-1",
          "accessKey": "access key",
          "secretKey": "super secret"
        }}
        w="70%"
      />

      <JSONSection
        title="Azure Response"
        json={{
          "id": 11,
          "userId": 1,
          "provider": "AZURE",
          "accountName": "scalortest",
          "accountAccessKey": "${base64 string}"
        }}
        w="70%"
      />

      <JSONSection
        title="GCP Response"
        json={{
          "id": 12,
          "userId": 1,
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

export default GetConnection;
