import React from 'react';
import {
  Text, Button, HStack, Box, Menu, MenuItem, MenuList, MenuButton, IconButton
} from '@chakra-ui/react'
import NextLink from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { MdMenu, MdMenuBook, MdCode, MdHelpCenter, MdLogout, MdLogin } from "react-icons/md";

export default function Navbar({ children }: { children?: any }) {
  const { data: session } = useSession();


  const DesktopUserSession = () => {
    if (session) {
      return (
        <HStack>
          <NextLink href='/dashboard' passHref>
            <Box h="48px" w="48px" _hover={{ boxShadow: 'lg', cursor: 'pointer' }}>
              <Image
                src={session?.user?.image!}
                alt="Profile"
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

  const MobileNav = () => {
    return (
      <HStack align="center" alignItems="center" justify="space-between" h="100%">
        <HStack spacing={4}>
          <NextLink href='/' passHref>
            <Image
              src="/images/scalor-logo.svg"
              height="38px"
              width="38px"
              alt="Scalor Logo"
            />
          </NextLink>
          <NextLink href='/' passHref>
            <Text
              fontSize="4xl"
              _hover={{
                color: 'gray.600'
              }}
              cursor="pointer"
              className="fontBold"
            >
              Scalor
            </Text>
          </NextLink>
        </HStack>

        {children}

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<MdMenu />}
            variant='outline'
          />
          <MenuList p={0}>
            <NextLink href='/docs/releases' passHref>
              <MenuItem icon={<MdMenuBook fontSize="26px" />}>
                Documentation
              </MenuItem>
            </NextLink>
            <NextLink href='/demo/resize' passHref>
              <MenuItem icon={<MdCode fontSize="26px" />}>
                Demo
              </MenuItem>
            </NextLink>
            <NextLink href='mailto:scalor-api@protonmail.com'>
              <MenuItem icon={<MdHelpCenter fontSize="26px" />}>
                Support
              </MenuItem>
            </NextLink>

            {session &&
              <MenuItem>
                <NextLink href='/dashboard' passHref>
                  <HStack align="center" justify="start" spacing={4} h="100%" w="100%">
                    <Box h="26px" w="26px">
                      <Image
                        src={session?.user?.image!}
                        alt="Profile"
                        height="26px"
                        width="26px"
                      />
                    </Box>
                    <Text>Dashboard</Text>
                  </HStack>
                </NextLink>
              </MenuItem>
            }

            {session &&
              <MenuItem onClick={() => signOut()} color="red.500" icon={<MdLogout fontSize="26px" color="red" />}>
                Sign out
              </MenuItem>
            }

            {!session &&
              <MenuItem onClick={() => signIn()} color="green.400" icon={<MdLogin fontSize="26px" color="green" />}>
                Log In
              </MenuItem>
            }
          </MenuList>
        </Menu>
      </HStack >
    );
  }

  const DesktopNav = () => {
    return (
      <HStack align="center" alignItems="center" justify="space-between" p={2}>
        <HStack spacing={4} align="center">
          <NextLink href='/' passHref>
            <Image
              src="/images/scalor-logo.svg"
              height="38px"
              width="38px"
              alt="Scalor Logo"
            />
          </NextLink>
          <NextLink href='/' passHref>
            <Text
              fontSize="4xl"
              _hover={{
                color: 'gray.600'
              }}
              cursor="pointer"
              className="fontBold"
            >
              Scalor
            </Text>
          </NextLink>
          <NextLink href='/' passHref>
            <Text
              fontSize="2xl"
              color='white'
              fontWeight="bold"
              cursor="pointer"
            >
              (BETA)
            </Text>
          </NextLink>
          <NextLink href='/docs/releases' passHref>
            <Button bg="none">
              Documentation
            </Button>
          </NextLink>
          <NextLink href='/demo/resize' passHref>
            <Button bg="none">
              Demo
            </Button>
          </NextLink>
          {/* <NextLink href='/pricing' passHref>
          <Button bg="none">
            Pricing
          </Button>
        </NextLink> */}
          <NextLink href='mailto:scalor-api@protonmail.com'>
            <Button bg="none">
              Support
            </Button>
          </NextLink>
        </HStack>

        <HStack spacing={4}>
          <DesktopUserSession />
        </HStack>
      </HStack>
    );
  }

  return (
    <>
      <Box
        display={{
          base: 'none',
          lg: 'block'
        }}
        pt="2"
      >
        <DesktopNav />
      </Box>
      <Box
        display={{
          base: 'block',
          lg: 'none'
        }}
        pt="2 "
      >
        <MobileNav />
      </Box>
    </>
  );
}