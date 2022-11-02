import React from 'react';
import {
  Text, HStack, Icon
} from '@chakra-ui/react'
import NextLink from 'next/link';
import { BsFillXDiamondFill } from 'react-icons/bs'

export default function Footer() {
  return (
    <HStack align="center" justify="center">
      <Text
        fontSize="md"
        cursor="pointer"
      >
        Copyright &copy; {(new Date()).getFullYear()} - Scalor
      </Text>
      <Icon as={BsFillXDiamondFill} />
      <NextLink href='/privacy-policy' passHref>
        <Text
          fontSize="md"
          cursor="pointer"
        >
          Privacy Policy
        </Text>
      </NextLink>
      {/* <Icon as={BsFillXDiamondFill} /> */}
      {/* <NextLink href='/terms-and-conditions' passHref>
        <Text
          fontSize="md"
          cursor="pointer"
        >
          Terms & Conditions
        </Text>
      </NextLink> */}
    </HStack>
  );
}