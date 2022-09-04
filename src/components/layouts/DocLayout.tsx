
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import DocNavBar from '../DocNavBar';

export default function DocLayout({ children }: { children: any }) {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      p={2}
    >
      <GridItem rowSpan={2} colSpan={1} bg='teal.300'>
        <DocNavBar />
      </GridItem>
      <GridItem rowSpan={2} colSpan={4} bg='teal.300' overflowY="scroll">
        {children}
      </GridItem>
    </Grid>
  );
}