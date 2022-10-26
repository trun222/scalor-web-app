import React from 'react';
import { HStack, VStack, Button, Text, Grid, GridItem, Link } from '@chakra-ui/react'

const LandingSection = () => {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
      style={{
        background: 'url("/images/landing-collage.jpg") 100%'
      }}
    >
      <GridItem rowSpan={10} colSpan={6}>

      </GridItem>
      <GridItem rowSpan={10} colSpan={6} paddingTop="40">
        <VStack align="left" justify="center" h="80%" spacing={4} padding={6} bg='rgba(0,0,0,.6)' borderRadius="md">
          <Text fontSize="5xl" fontWeight="bold" color="white">The Image API that makes app development fun</Text>
          <Text fontSize="2xl" fontWeight="semibold" color="white">Focus on your code, not resizing images.</Text>

          <HStack spacing={4} mt={10}>
            <Link href="/auth/signin">
              <Button>SIGN UP TODAY!</Button>
            </Link>
          </HStack>
        </VStack>
      </GridItem>
    </Grid >
  )
}

export default LandingSection;
