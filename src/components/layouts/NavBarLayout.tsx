
import React from 'react';
import {
  Grid, GridItem
} from '@chakra-ui/react'
import Navbar from '@/src/components/Navbar';

export default function NavBarLayout({ children }: { children: any }) {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
    >
      <GridItem rowSpan={1} colSpan={12} bg="gray.50" px={10}>
        <Navbar />
      </GridItem>
      <GridItem rowSpan={11} colSpan={12} bg='gray.300' overflowY="scroll">
        {children}
      </GridItem>
    </Grid >
  );
}