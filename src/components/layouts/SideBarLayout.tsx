
import React from 'react';
import { Grid, GridItem, VStack, Menu, MenuItem, MenuList, MenuButton, Button, Badge } from '@chakra-ui/react';
import SideBar from '@/src/components/common/SideBar';
import Navbar from '@/src/components/Navbar';
import NextLink from 'next/link';
import { useRouter } from 'next/router'

const docMenuItems = [
  // {
  //   action: 'User',
  //   type: 'GET',
  //   link: '/docs/user'
  // },
  {
    action: 'Upload',
    type: 'POST',
    link: '/docs/upload'
  },
  {
    action: 'Resize',
    type: 'POST',
    link: '/docs/resize',
    demo: '/demo/resize'
  },
  {
    action: 'Quality',
    type: 'POST',
    link: '/docs/quality',
    demo: '/demo/quality'
  },
  {
    action: 'Moonlight',
    type: 'POST',
    link: '/docs/moonlight',
    demo: '/demo/moonlight'
  },
  {
    action: 'Sharpen',
    type: 'POST',
    link: '/docs/sharpen',
    demo: '/demo/sharpen'
  },
  {
    action: 'Color Balance',
    type: 'POST',
    link: '/docs/average',
    demo: '/demo/color-balance'
  },
  {
    action: 'Gray',
    type: 'POST',
    link: '/docs/gray',
    demo: '/demo/gray'
  },
  {
    action: 'Collage',
    type: 'POST',
    link: '/docs/collage',
    demo: '/demo/collage'
  }
];

export default function SideBarLayout({ menuItems, children }: { menuItems?: any, children: any }) {
  const router = useRouter();

  return (
    <Grid
      h='100vh'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
    >
      <GridItem rowSpan={1} colSpan={12} bg='gray.50' px={{
        base: 2,
        md: 5
      }}>
        <Navbar>
          {router.pathname.includes('/docs') &&
            <Menu>
              <MenuButton as={Button} bg="none" border="1px solid" borderColor="gray.200">
                API
              </MenuButton>
              <MenuList p={0}>
                {docMenuItems.map((menuItem: any) => {
                  return (
                    <NextLink key={menuItem.action} href={menuItem.link} passHref>
                      <MenuItem>
                        <Badge colorScheme="purple" mr={4}>{menuItem.type}</Badge>
                        {menuItem.action}
                      </MenuItem>
                    </NextLink>
                  )
                })
                }
              </MenuList>
            </Menu>
          }
          {router.pathname.includes('/demo') &&
            <Menu>
              <MenuButton as={Button} bg="none" border="1px solid" borderColor="gray.200">
                Demo
              </MenuButton>
              <MenuList p={0}>
                {docMenuItems.map((menuItem: any) => {
                  if (menuItem.action === 'Upload') {
                    return;
                  }

                  return (
                    <NextLink key={menuItem.action} href={menuItem.demo} passHref>
                      <MenuItem>
                        {menuItem.action}
                      </MenuItem>
                    </NextLink>
                  )
                })
                }
              </MenuList>
            </Menu>
          }
        </Navbar>
      </GridItem>
      <GridItem
        rowSpan={11}
        colSpan={2}
        bg='gray.200'
        display={{
          base: 'none',
          lg: 'grid'
        }}
      >
        <SideBar menuItems={menuItems || docMenuItems} />
      </GridItem>
      <GridItem
        rowSpan={11}
        colSpan={{
          base: 12,
          lg: 10
        }}
        bg='gray.200'
        overflowY="scroll"
      >
        <VStack
          align={{ base: 'center', lg: 'start' }}
          justify="center"
          spacing={6}
          p={{
            base: 1,
            md: 2,
            lg: 6
          }}
        >
          {children}
        </VStack>
      </GridItem>
    </Grid>
  );
}