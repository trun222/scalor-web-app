
import React from 'react';
import type { NextPage } from 'next'
import { Badge, VStack, Text } from '@chakra-ui/react'
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import DocLayout from '@/src/components/layouts/DocLayout';

const UserDocs: NextPage = () => {
  return (
    <DocLayout>
      <VStack align="start" spacing={6} p={6}>
        <ActionTitle
          action="User"
          method="GET"
        />

        <Text fontSize="4xl" fontWeight="thin">
          Description
        </Text>

        <Text bg="white" w="60%" p={4}>
          Retrieve user contact information, token, and usage.
          <Badge colorScheme="orange" ml={4}> Note: Doesn&apos;t count against API usage rate</Badge>
        </Text>

        <JSONSection
          title="Headers"
          json={{ token: '${API_TOKEN}' }}
        />

        <JSONSection
          title="Response"
          json={{
            "id": 1,
            "email": "johndoe@gmail.com",
            "token": "{API_TOKEN}",
            "contact": {
              "id": 1,
              "firstName": "John",
              "lastName": "Doe",
              "address": "1400 Kings Ln",
              "city": "Louisville",
              "state": "KY",
              "zip": "40223",
              "userId": 1
            },
            "usage": {
              "id": 1,
              "userId": 1,
              "apiUsage": 238,
              "storageUsage": 0,
              "subscriptionDate": "2022-08-17T01:24:14.708Z"
            }
          }}
        />
      </VStack>
    </DocLayout>
  )
}


export default UserDocs;
