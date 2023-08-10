
import React from 'react';
import { Grid, GridItem, VStack, Menu, MenuItem, MenuList, MenuButton, Button, Badge, List, ListItem, Link, Text } from '@chakra-ui/react';
import Navbar from '@/src/components/Navbar';
import NextLink from 'next/link';
import { useRouter } from 'next/router'

const docMenuItems = {
  getStarted: {
    title: 'Get Started',
    link: '/docs/get-started'
  },
  examples: {
    title: 'Examples',
    link: '/docs/examples'
  },
  uploads: {
    title: 'Upload',
    items: [
      {
        action: 'Upload',
        type: 'POST',
        link: '/docs/uploads/upload',
        color: 'purple',
      },
      {
        action: 'Upload Cloud',
        type: 'POST',
        link: '/docs/uploads/upload-cloud',
        color: 'purple',
      },
      {
        action: 'Start Large Upload',
        type: 'POST',
        link: '/docs/uploads/start-large-upload',
        color: 'purple',
      },
      {
        action: 'Finish Large Upload',
        type: 'POST',
        link: '/docs/uploads/finish-large-upload',
        color: 'purple',
      }
    ]
  },
  cloud: {
    title: 'Cloud',
    items: [
      {
        action: 'Get Connection',
        type: 'GET',
        link: '/docs/cloud/get-connection',
        color: 'orange',
      },
      {
        action: 'Create Connection',
        type: 'POST',
        link: '/docs/cloud/create-connection',
        color: 'purple',
      },
      {
        action: 'Delete Connection',
        type: 'DELETE',
        link: '/docs/cloud/delete-connection',
        color: 'red',
      }
    ]
  },
  image: {
    title: 'Image',
    items: [
      {
        action: 'Resize',
        type: 'POST',
        link: '/docs/images/resize',
        demo: '/demo/resize',
        color: 'purple',
      },
      {
        action: 'Quality',
        type: 'POST',
        link: '/docs/images/quality',
        demo: '/demo/quality',
        color: 'purple',
      },
      {
        action: 'Moonlight',
        type: 'POST',
        link: '/docs/images/moonlight',
        demo: '/demo/moonlight',
        color: 'purple',
      },
      {
        action: 'Sharpen',
        type: 'POST',
        link: '/docs/images/sharpen',
        demo: '/demo/sharpen',
        color: 'purple',
      },
      {
        action: 'Color Balance',
        type: 'POST',
        link: '/docs/images/average',
        demo: '/demo/color-balance',
        color: 'purple',
      },
      {
        action: 'Gray',
        type: 'POST',
        link: '/docs/images/gray',
        demo: '/demo/gray',
        color: 'purple',
      },
      {
        action: 'Collage',
        type: 'POST',
        link: '/docs/images/collage',
        demo: '/demo/collage',
        color: 'purple',
      }
    ]
  },
  video: {
    title: 'Video',
    items: [
      {
        action: 'Encode',
        type: 'POST',
        link: '/docs/video/encode',
        color: 'purple',
      }
    ]
  }
};

export default function DocsLayout({ menuItems, children }: { menuItems?: any, children: any }) {
  const router = useRouter();
  const activeRoute = router?.pathname;

  return (
    <Grid
      h='100vh'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
    >
      <GridItem rowSpan={1} colSpan={12} bg='pink.400' px={{
        base: 2,
        md: 5
      }}>
        <Navbar>
          {router.pathname.includes('/docs') &&
            <Menu>
              <MenuButton as={Button} bg="none" border="1px solid" borderColor="gray.100" p={0} fontSize="xs">
                API
              </MenuButton>
              <MenuList p={0}>

                <MenuItem>
                  <NextLink href={docMenuItems.getStarted.link} passHref>
                    <Link fontWeight="bold" color={activeRoute === docMenuItems.getStarted.link ? 'pink.500' : 'black'}>
                      <span>{docMenuItems.getStarted.title}</span>
                    </Link>
                  </NextLink>
                </MenuItem>

                <MenuItem>
                  <NextLink href={docMenuItems.examples.link} passHref>
                    <Link fontWeight="bold" color={activeRoute === docMenuItems.examples.link ? 'pink.500' : 'black'}>
                      <span>{docMenuItems.examples.title}</span>
                    </Link>
                  </NextLink>
                </MenuItem>

                <MenuItem>
                  <Text fontWeight="bold">{docMenuItems.uploads.title}</Text>
                </MenuItem>

                {docMenuItems.uploads.items.map((menuItem: any) => {
                  return (
                    <MenuItem key={menuItem.link}>
                      <NextLink href={menuItem.link} passHref>
                        <Link color={activeRoute === menuItem.link ? 'pink.500' : 'black'}>
                          <Badge colorScheme={menuItem.color}>{menuItem.type}</Badge>
                          <span style={{ marginLeft: '10px' }}>{menuItem.action}</span>
                        </Link>
                      </NextLink>
                    </MenuItem>
                  )
                })}

                <MenuItem>
                  <Text>{docMenuItems.cloud.title}</Text>
                </MenuItem>

                {docMenuItems.cloud.items.map((menuItem: any) => {
                  return (
                    <MenuItem key={menuItem.link}>
                      <NextLink href={menuItem.link} passHref>
                        <Link color={activeRoute === menuItem.link ? 'pink.500' : 'black'}>
                          <Badge colorScheme={menuItem.color}>{menuItem.type}</Badge>
                          <span style={{ marginLeft: '10px' }}>{menuItem.action}</span>
                        </Link>
                      </NextLink>
                    </MenuItem>
                  )
                })}

                <MenuItem>
                  <Text>{docMenuItems.image.title}</Text>
                </MenuItem>

                {docMenuItems.image.items.map((menuItem: any) => {
                  return (
                    <MenuItem key={menuItem.link}>
                      <NextLink href={menuItem.link} passHref>
                        <Link color={activeRoute === menuItem.link ? 'pink.500' : 'black'}>
                          <Badge colorScheme="purple">{menuItem.type}</Badge>
                          <span style={{ marginLeft: '10px' }}>{menuItem.action}</span>
                        </Link>
                      </NextLink>
                    </MenuItem>
                  )
                })}

                <MenuItem>
                  <Text fontWeight="bold">{docMenuItems.video.title}</Text>
                </MenuItem>

                {docMenuItems.video.items.map((menuItem: any) => {
                  return (
                    <MenuItem key={menuItem.link}>
                      <NextLink href={menuItem.link} passHref>
                        <Link color={activeRoute === menuItem.link ? 'pink.500' : 'black'}>
                          <Badge colorScheme={menuItem.color}>{menuItem.type}</Badge>
                          <span style={{ marginLeft: '10px' }}>{menuItem.action}</span>
                        </Link>
                      </NextLink>
                    </MenuItem>
                  )
                })}
              </MenuList>
            </Menu>
          }
          {router.pathname.includes('/demo') &&
            <Menu>
              <MenuButton as={Button} bg="none" border="1px solid" borderColor="gray.100" p={0} fontSize="xs">
                Demo
              </MenuButton>
              <MenuList p={0}>
                {docMenuItems.image.items.map((menuItem: any) => {
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
        bg='gray.100'
        display={{
          base: 'none',
          lg: 'grid'
        }}
      >
        <List spacing={3} p={4} minW="180px" overflowY="scroll">
          {activeRoute.startsWith('/docs') &&
            <ListItem>
              <NextLink href="/docs/releases" passHref>
                <Link>
                  <Badge colorScheme='yellow' fontWeight={activeRoute === '/docs/releases' ? 'bold' : 'normal'} p={3} w="32" textAlign="center">Releases</Badge>
                </Link>
              </NextLink>
            </ListItem>
          }

          <ListItem>
            <NextLink href={docMenuItems.getStarted.link} passHref>
              <Link fontWeight="bold" color={activeRoute === docMenuItems.getStarted.link ? 'pink.500' : 'black'}>
                <span>{docMenuItems.getStarted.title}</span>
              </Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href={docMenuItems.examples.link} passHref>
              <Link fontWeight="bold" color={activeRoute === docMenuItems.examples.link ? 'pink.500' : 'black'}>
                <span>{docMenuItems.examples.title}</span>
              </Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <Text fontWeight="bold">{docMenuItems.uploads.title}</Text>
          </ListItem>


          {docMenuItems.uploads.items.map((menuItem: any) => {
            return (
              <ListItem key={menuItem.link}>
                <NextLink href={menuItem.link} passHref>
                  <Link color={activeRoute === menuItem.link ? 'pink.500' : 'black'}>
                    <Badge colorScheme={menuItem.color}>{menuItem.type}</Badge>
                    <span style={{ marginLeft: '10px' }}>{menuItem.action}</span>
                  </Link>
                </NextLink>
              </ListItem>
            )
          })}

          <ListItem>
            <Text fontWeight="bold">{docMenuItems.cloud.title}</Text>
          </ListItem>

          {docMenuItems.cloud.items.map((menuItem: any) => {
            return (
              <ListItem key={menuItem.link}>
                <NextLink href={menuItem.link} passHref>
                  <Link color={activeRoute === menuItem.link ? 'pink.500' : 'black'}>
                    <Badge colorScheme={menuItem.color}>{menuItem.type}</Badge>
                    <span style={{ marginLeft: '10px' }}>{menuItem.action}</span>
                  </Link>
                </NextLink>
              </ListItem>
            )
          })}

          <ListItem>
            <Text fontWeight="bold">{docMenuItems.image.title}</Text>
          </ListItem>

          {docMenuItems.image.items.map((menuItem: any) => {
            return (
              <ListItem key={menuItem.link}>
                <NextLink href={menuItem.link} passHref>
                  <Link color={activeRoute === menuItem.link ? 'pink.500' : 'black'}>
                    <Badge colorScheme={menuItem.color}>{menuItem.type}</Badge>
                    <span style={{ marginLeft: '10px' }}>{menuItem.action}</span>
                  </Link>
                </NextLink>
              </ListItem>
            )
          })}

          <ListItem>
            <Text fontWeight="bold">{docMenuItems.video.title}</Text>
          </ListItem>

          {docMenuItems.video.items.map((menuItem: any) => {
            return (
              <ListItem key={menuItem.link}>
                <NextLink href={menuItem.link} passHref>
                  <Link color={activeRoute === menuItem.link ? 'pink.500' : 'black'}>
                    <Badge colorScheme={menuItem.color}>{menuItem.type}</Badge>
                    <span style={{ marginLeft: '10px' }}>{menuItem.action}</span>
                  </Link>
                </NextLink>
              </ListItem>
            )
          })}
        </List>
      </GridItem>
      <GridItem
        rowSpan={11}
        colSpan={{
          base: 12,
          lg: 10
        }}
        bg='gray.100'
        overflowY="scroll"
      >
        <VStack
          align={{ base: 'center', lg: 'start' }}
          justify="center"
          spacing={6}
          p={{
            base: 8,
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