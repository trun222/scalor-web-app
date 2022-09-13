import React from 'react';
import { Text, Button, HStack } from '@chakra-ui/react'
import NextLink from 'next/link';

export default function Navbar() {
  return (
    <HStack alignItems="center" justify="space-between" h="100%">
      <HStack spacing={4}>
        <NextLink href='/' passHref>
          <Text
            fontSize="4xl"
            letterSpacing={10}
            _hover={{
              color: 'gray.600'
            }}
            cursor="pointer"
          >
            Scalor
          </Text>
        </NextLink>
        <NextLink href='/docs/user' passHref>
          <Button>
            Documentation
          </Button>
        </NextLink>
        <NextLink href='/pricing' passHref>
          <Button>
            Pricing
          </Button>
        </NextLink>
        <NextLink href='/support' passHref>
          <Button>
            Support
          </Button>
        </NextLink>
      </HStack>

      <HStack spacing={4}>
        <NextLink href='/login' passHref>
          <Button>
            Log In
          </Button>
        </NextLink>
        <NextLink href='/signup' passHref>
          <Button>
            Sign Up
          </Button>
        </NextLink>
      </HStack>
    </HStack>
  );
}