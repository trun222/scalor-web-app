
import React from 'react';
import type { NextPage } from 'next'
import { Grid, GridItem, List, ListItem, Badge, VStack, Text, Link } from '@chakra-ui/react'
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

const QualityDocs: NextPage = () => {
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
            action="Quality"
            method="POST"
          />

          <Text fontSize="4xl" fontWeight="thin">
            Description
          </Text>

          <Text bg="white" w="60%" p={4}>
            The quality action allows you to adjust the quality of the image uploaded from 1% to 100%.
            You can use this action to get high quality compression. If you set the quality to 50% and the original
            image is fairly large in size you will be amazed to see that there is almost no difference visually in quality, but huge
            differences in file sizes.
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
              "id": "721389da-2f9e-46f1-b2e0-72498002e421",
              "quality": 50,
              "outputFileName": "image_quality_50",
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

export default QualityDocs;
