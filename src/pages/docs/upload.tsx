
import React from 'react';
import type { NextPage } from 'next'
import { Grid, GridItem, List, ListItem, Badge, VStack, Text, Box, Link } from '@chakra-ui/react'
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

const UploadDocs: NextPage = () => {
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
            action="Upload"
            method="POST"
          />

          <Text fontSize="4xl" fontWeight="thin">
            Description
          </Text>

          <Text bg="white" w="60%" p={4}>
            Upload an image so that you can perform other actions on it such as resizing, adjusting the quality (compression), sharpening the colors, and many more.
            Once the image is uploaded you will receive an uploadId that you will use for all subsequent operations on the image. The images on the server get wiped daily.
          </Text>

          <HeadersSection
            headers={[
              { key: 'Content-Type', value: 'multipart/form-data' },
              { key: 'token', value: 'API_TOKEN' }
            ]}
          />

          <Text fontSize="4xl" fontWeight="thin">
            Body
          </Text>
          <Box w="60%" bg="white">
            <List spacing={3} p={4}>
              <ListItem>
                file <Badge colorScheme={'purple'} ml={4}>multipart/form-data</Badge>
              </ListItem>
            </List>
          </Box>

          <JSONSection
            title="Response"
            json={{
              "uploadId": "9e51c122-a691-4bdf-84a7-d480xda2cf60"
            }}
          />
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default UploadDocs;
