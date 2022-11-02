
import React from 'react';
import {
  Grid, GridItem
} from '@chakra-ui/react'
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export default function NavBarLayout({ children }: { children: any }) {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
    >
      <GridItem rowSpan={1} colSpan={12} bg="pink.400" px={5}>
        <Navbar />
      </GridItem>
      <GridItem rowSpan={11} colSpan={12} bg='gray.100' overflowY="scroll">
        {children}
      </GridItem>
      <GridItem rowSpan={1} colSpan={12} bg="gray.50" p={4}>
        <Footer />
      </GridItem>
    </Grid >
  );
}