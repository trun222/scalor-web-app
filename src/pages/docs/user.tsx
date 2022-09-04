
import React from 'react';
import type { NextPage } from 'next'
import { Grid, GridItem, List, ListItem, Badge, VStack, HStack, Text, Box, Link } from '@chakra-ui/react'
import NextLink from "next/link"
import ActionTitle from '@/src/components/docs/ActionTitle';
import JSONSection from '@/src/components/docs/JSONSection';
import HeadersSection from '@/src/components/docs/HeadersSection';

const docMenuItems = [
  {
    action: 'User',
    type: 'GET'
  },
  {
    action: 'Upload',
    type: 'POST'
  },
  {
    action: 'Resize',
    type: 'POST'
  },
  {
    action: 'Quality',
    type: 'POST'
  },
  {
    action: 'Moonlight',
    type: 'POST'
  },
  {
    action: 'Sharpen',
    type: 'POST'
  },
  {
    action: 'Average',
    type: 'POST'
  },
  {
    action: 'Gray',
    type: 'POST'
  },
  {
    action: 'Collage',
    type: 'POST'
  }
];

const UserDocs: NextPage = () => {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      p={2}
    >
      <GridItem rowSpan={2} colSpan={1} bg='teal.300'>
        <List spacing={3} p={4}>
          {docMenuItems.map((item) =>
            <ListItem key={item.action}>
              <NextLink href={`/docs/${item.action.toLowerCase()}`} passHref>
                <Link>
                  {item.action} <Badge colorScheme={item.type === 'POST' ? 'purple' : 'orange'} ml={4}>{item.type}</Badge>
                </Link>
              </NextLink>
            </ListItem>
          )}
        </List>
      </GridItem>
      <GridItem rowSpan={2} colSpan={4} bg='teal.300' overflowY="scroll">
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
            <Badge colorScheme="orange" ml={4}> Note: Doesn't count against API usage rate</Badge>
          </Text>

          <HeadersSection
            headers={[
              { key: 'token', value: 'API_TOKEN' }
            ]}
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
      </GridItem>
    </Grid>
  )
}

export default UserDocs;
