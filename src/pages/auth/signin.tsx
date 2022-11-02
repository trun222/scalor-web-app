import React from "react";
/* @ts-ignore */
import { signIn, getSession, getProviders } from "next-auth/react";
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function SignIn({ providers }: any) {
  return (
    <VStack h="100vh" w="100vw" spacing={12} pt={20} bg="gray.100">
      <HStack justify="center" spacing={4}>
        <Image
          src="/images/scalor-logo.svg"
          height="78px"
          width="78px"
          alt="Scalor Logo"
        />
        <Text
          fontSize="7xl"
          className="fontBold"
          _hover={{
            color: 'gray.600'
          }}
        >
          Scalor
        </Text>
      </HStack>

      <Box bg="white" h="400px" w="400px" borderRadius="md" p={10}>
        <VStack justify="center">
          <Text fontSize="4xl" className="fontBold" mb={4}>Welcome</Text>

          {Object.values(providers).map((provider: any) => {
            return (
              <Box key={provider.name} mb={4}>
                <Button variant="outline" onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </Button>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </VStack>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders()

  return {
    props: {
      providers
    },
  }
}