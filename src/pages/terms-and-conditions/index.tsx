import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const TermsAndConditions: NextPage = () => {
  return (
    <Grid
      h='100%'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
    >
      <GridItem rowSpan={1} colSpan={12} bg="gray.50" px={5}>
        <Navbar />
      </GridItem>
      <GridItem rowSpan={11} colSpan={12} bg='gray.300'>
      </GridItem>
      <GridItem rowSpan={1} colSpan={12} bg='gray.200' p={4}>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default TermsAndConditions;
