import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Navbar from '@/src/components/Navbar';
import LandingSection from '@/src/components/LandingSection';

const Dashboard: NextPage = () => {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
    >
      <GridItem rowSpan={1} colSpan={12} bg="gray.50" px={5}>
        <Navbar />
      </GridItem>
      <GridItem rowSpan={11} colSpan={12} bg='gray.300'>
        <LandingSection />
      </GridItem>
    </Grid >
  )
}

export default Dashboard;
