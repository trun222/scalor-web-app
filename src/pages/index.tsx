import React from 'react';
import { Grid, GridItem, VStack, HStack, Text, Box, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Navbar from '@/src/components/Navbar';
import LandingSection from '@/src/components/LandingSection';
import Image from 'next/image';

const HomePage: NextPage = () => {
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
        <LandingSection />
      </GridItem>
      <GridItem rowSpan={11} colSpan={12} bg='white' p={8}>
        <Center mb={4}>
          <Text fontSize="3xl">Lossy Compression</Text>
        </Center>

        <Center mb={8} textAlign="center">
          <Text fontSize="2xl">Save bandwidth, disk space, and cloud storage without compromising on quality.</Text>
        </Center>

        <HStack justify="center" spacing={10}>
          <Box
            h={{
              base: "300px",
              md: 'auto'
            }}>
            <Image
              src="https://scalor.s3.amazonaws.com/site-examples/compress_before.jpeg"
              height="450px"
              width="550px"
            />

            <Text>Full Resolution (3.1 MB)</Text>
          </Box>
          <Box h={{
            base: "300px",
            md: 'auto'
          }}>
            <Image
              src="https://scalor.s3.amazonaws.com/site-examples/compress_after.jpg"
              height="450px"
              width="550px"
            />

            <Text>Lossy Compressed (955 KB) at 50% compression</Text>
          </Box>
        </HStack>
      </GridItem>
      <GridItem rowSpan={11} colSpan={12} bg='gray.200' p={8}>
        <Center mb={4}>
          <Text fontSize="3xl">Easily Resize</Text>
        </Center>

        <Center mb={8} textAlign="center">
          <Text fontSize="2xl">Automate your image resize workflow, spend less time editing images and creating custom solutions.</Text>
        </Center>

        <HStack justify="center" spacing={20}>
          <Box
            h={{
              base: "300px",
              md: 'auto'
            }}>
            <Image
              src="https://scalor.s3.amazonaws.com/site-examples/resize_before.jpg"
              height="450px"
              width="550px"
            />

            <Text>3264x2448 (2.6 MB)</Text>
          </Box>
          <Box h={{
            base: "300px",
            md: 'auto'
          }}>
            <Image
              src="https://scalor.s3.amazonaws.com/site-examples/resize_after.jpg"
              height="96px"
              width="128px"
            />

            <Text>96x128 (12 KB)</Text>
          </Box>
        </HStack>
      </GridItem>
      <GridItem rowSpan={11} colSpan={12} bg='white' p={8}>
        <Center mb={4}>
          <Text fontSize="3xl">Quickly Enhance</Text>
        </Center>

        <Center mb={8} textAlign="center">
          <Text fontSize="2xl">Simple image color enhancements that make your images pop.</Text>
        </Center>

        <HStack justify="center" spacing={20}>
          <Box
            h={{
              base: "300px",
              md: 'auto'
            }}>
            <Image
              src="https://scalor.s3.amazonaws.com/site-examples/enhance_before.jpeg"
              height="450px"
              width="550px"
            />

            <Text>Non-Vibrant</Text>
          </Box>
          <Box h={{
            base: "300px",
            md: 'auto'
          }}>
            <Image
              src="https://scalor.s3.amazonaws.com/site-examples/enhance_after.jpg"
              height="450px"
              width="550px"
            />

            <Text>Vibrant</Text>
          </Box>
        </HStack>
      </GridItem>
    </Grid >
  )
}

export default HomePage;
