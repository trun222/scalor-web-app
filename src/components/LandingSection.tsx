import React from 'react';
import { HStack, VStack, Button, Text, Grid, GridItem, Link } from '@chakra-ui/react'

const LandingSection = () => {
  return (
    <Grid
      h='100%'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
      style={{
        background: 'url("/images/landing-collage.jpg") 100%'
      }}
    >
      <GridItem rowSpan={10} colSpan={12}>
        <VStack
          align="center"
          justify="center"
          h="120%"
          w="100%"
          spacing={4}
          bg='rgba(0,0,0,.6)'
          borderRadius="md"
        >
          <Text
            textAlign="center"
            fontSize={{
              base: '3xl',
              sm: '4xl',
              md: '5xl',
            }}
            fontWeight="bold"
            color="white"
          >
            The Image API that makes app development fun
          </Text>
          <Text
            textAlign="center"
            fontSize={{
              base: 'xl',
              sm: '2xl',
              md: '3xl',
            }}
            fontWeight="semibold"
            color="white"
          >
            Focus on your code, not resizing images.
          </Text>

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
