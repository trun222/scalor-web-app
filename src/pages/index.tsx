import React from 'react';
import { Grid, GridItem, HStack, Stack, Text, Box, Center, Icon } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Navbar from '@/src/components/Navbar';
import LandingSection from '@/src/components/LandingSection';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '@/src/components/Footer';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { MdOutlineWbCloudy } from 'react-icons/md';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        {/* Used for browser tab title */}
        <title>Image Upload API</title>
        {/* Used for SE site preview */}
        <meta
          name="description"
          content="Image Upload API that makes building apps with images easy."
          key="desc"
        />
        <meta name="keywords" content="image api, developer, developer api, image conversion, upload, image upload, frontend, frontend developer, fullstack, fullstack developer, backend, backend developer" />
        {/* Properly scale for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      </Head>
      <Grid
        h='100%'
        templateRows='repeat(12, 1fr)'
        templateColumns='repeat(12, 1fr)'
      >
        <GridItem rowSpan={1} colSpan={12} bg="pink.400" px={5}>
          <Navbar />
        </GridItem>
        <GridItem rowSpan={11} colSpan={12} bg='gray.100'>
          <LandingSection />
        </GridItem>

        <GridItem rowSpan={11} colSpan={12} bg='gray.400' p={8}>
          <Center mb={4}>
            <Text className="fontBold"
              fontSize="3xl">Bring your own Storage!</Text>
          </Center>

          <Center mb={8} textAlign="center">
            <Text fontSize="2xl">Easily store your data directly to your cloud infrastructure.</Text>
          </Center>

          <Stack align="center" justify="center" direction={{ base: 'column', md: 'row' }} spacing={{ base: 0, md: 20 }}>
            <Box
              h={{
                base: "150px",
                md: 'auto'
              }}>
              <Icon h="128px" w="128px" as={FaAws} />
            </Box>

            <Box
              h={{
                base: "150px",
                md: 'auto'
              }}>
              <Icon h="128px" w="128px" as={VscAzure} />
            </Box>

            <Box
              h={{
                base: "150px",
                md: 'auto'
              }}>
              <Icon h="128px" w="128px" as={MdOutlineWbCloudy} />
            </Box>
          </Stack>
        </GridItem>
        <GridItem rowSpan={11} colSpan={12} bg='white' p={8}>
          <Center mb={4}>
            <Text className="fontBold" fontSize="3xl">Lossy Compression</Text>
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
                alt="Before Compression"
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
                alt="After Compression"
              />

              <Text>Lossy Compressed (955 KB) at 50% compression</Text>
            </Box>
          </HStack>
        </GridItem>

        <GridItem rowSpan={11} colSpan={12} bg='gray.400' p={8}>
          <Center mb={4}>
            <Text className="fontBold"
              fontSize="3xl">Easily Resize</Text>
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
                alt="Before Resize"
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
                alt="After Resize"
              />

              <Text>96x128 (12 KB)</Text>
            </Box>
          </HStack>
        </GridItem>
        <GridItem rowSpan={11} colSpan={12} bg='white' p={8}>
          <Center mb={4}>
            <Text className="fontBold"
              fontSize="3xl">Quickly Enhance</Text>
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
                alt="Before Enhance"
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
                alt="After Enhance"
              />

              <Text>Vibrant</Text>
            </Box>
          </HStack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={12} bg='gray.400' p={4}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage;
