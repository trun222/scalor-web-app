import type { NextPage } from "next";
import React from "react";
import {
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import NavBarLayout from "@/src/components/layouts/NavBarLayout";
import { useSession } from 'next-auth/react';
// import type { Session } from "next-auth/core/types";

// type ScalorSession = {
//   contact: {
//     firstName: string;
//     lastName: string;
//     address: string;
//     city: string;
//     state: string;
//     zip: string;
//   },
//   usage: {
//     apiUsage: number;
//     storageUsage: number;
//     subscriptionDate: string;
//   },
//   token: string;
//   accessToken: string;
// } | Session;

const DashboardPage: NextPage = () => {
  const { data } = useSession();
  const session: any = data;

  return (
    <NavBarLayout>
      <VStack align="center" justify="center" spacing={6} h="100vh">
        <Text fontSize="4xl">Membership ({(new Date(session?.usage?.subscriptionDate)).toUTCString()})</Text>
        <Box bg="whiteAlpha.300" p={8}>
          <Text fontSize="4xl" fontWeight="bold">Free</Text>
        </Box>

        <Text fontSize="4xl">Usage</Text>
        <Box bg="whiteAlpha.300" p={8}>
          <Text fontSize="4xl" fontWeight="bold">{session?.usage?.apiUsage} / 5000</Text>
        </Box>

        <Text fontSize="4xl">API Token</Text>
        <Box bg="whiteAlpha.300" p={8}>
          <Text fontSize="4xl" fontWeight="bold">{session?.token}</Text>
        </Box>
        <Text>Note: Keep this somewhere safe..</Text>
      </VStack>
    </NavBarLayout>
  )
}

export default DashboardPage;
