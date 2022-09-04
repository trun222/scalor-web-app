import React from 'react';
import type { NextPage } from 'next'
import { Grid, GridItem, List, ListItem, Badge, VStack, HStack, Text, Box, Link } from '@chakra-ui/react'
import NextLink from "next/link"
import PrettyJSON from 'react-prettify-json';

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

const Home: NextPage = () => {
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
          <Text>
            Landing Page
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default Home
