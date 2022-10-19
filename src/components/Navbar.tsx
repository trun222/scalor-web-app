import React from 'react';
import { Text, Button, HStack, Box } from '@chakra-ui/react'
import NextLink from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  const UserSession = () => {
    if (session) {
      return (
        <HStack>
          <NextLink href='/dashboard' passHref>
            <Box h="48px" w="48px" _hover={{ boxShadow: 'lg', cursor: 'pointer' }}>
              <Image
                src={session?.user?.image!}
                height="48px"
                width="48px"
              />
            </Box>
          </NextLink>
          <Button onClick={() => signOut()} color="red.500">Sign out</Button>
        </HStack>
      )
    }

    return (
      <Button onClick={() => signIn()} bg="none">
        Log In
      </Button>
    )
  }

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
          <Button bg="none">
            Documentation
          </Button>
        </NextLink>
        <NextLink href='/demo/resize' passHref>
          <Button bg="none">
            Demo
          </Button>
        </NextLink>
        <NextLink href='/pricing' passHref>
          <Button bg="none">
            Pricing
          </Button>
        </NextLink>
        <NextLink href='mailto:scalor@protonmail.com'>
          <Button bg="none">
            Support
          </Button>
        </NextLink>
      </HStack>

      <HStack spacing={4}>
        <UserSession />
      </HStack>
    </HStack >
  );
}