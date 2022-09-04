
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

const CollageDocs: NextPage = () => {
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
            action="Collage"
            method="POST"
          />

          <Text fontSize="4xl" fontWeight="thin">
            Description
          </Text>

          <Text bg="white" w="60%" p={4}>
            The collage action takes two images and combines them into one to make a collage. The first uploadId will be the first image from left to right and the second uploadId
            will be the second image.
          </Text>


          <HeadersSection
            headers={[
              { key: 'Content-Type', value: 'application/json' },
              { key: 'token', value: 'API_TOKEN' }
            ]}
          />

          <JSONSection
            title="Body"
            json={{
              "idOne": "721389da-2f9e-46f1-b2e0-72498002e421",
              "idTwo": "721389da-2f9e-46f1-b2e0-72498002e421",
              "outputFileName": "collage_image",
              "mimeType": "image/jpg"
            }}
          />

          <JSONSection
            title="Response"
            json={{
              "file": "data:image/jpg;base64, ${BASE64_DATA_STRING}"
            }}
          />
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default CollageDocs;
