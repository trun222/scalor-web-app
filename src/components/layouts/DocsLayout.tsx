
import React from 'react';
import { Grid, GridItem, VStack, Menu, MenuItem, MenuList, MenuButton, Button, Badge, List, ListItem, Link, Text, Divider } from '@chakra-ui/react';
import Navbar from '@/src/components/Navbar';
import NextLink from 'next/link';
import { useRouter } from 'next/router'

const docMenuItems = [
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
                  <Text>Cloud Connectors</Text>
                </MenuItem>

                <Divider orientation='horizontal' borderColor="gray.400" />

                <MenuItem>
                  <NextLink href="/docs/cloud/get-connection" passHref>
                    <Link fontWeight={activeRoute === "/docs/cloud/get-connection" ? 'bold' : 'normal'}>
                      <Badge colorScheme="orange">GET</Badge>
                      <span style={{ marginLeft: '10px' }}>Get Connection</span>
                    </Link>
                  </NextLink>
                </MenuItem>

                <MenuItem>
                  <NextLink href="/docs/cloud/create-connection" passHref>
                    <Link fontWeight={activeRoute === "/docs/cloud/create-connection" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Create Connection</span>
                    </Link>
                  </NextLink>
                </MenuItem>

                <MenuItem>
                  <NextLink href="/docs/cloud/delete-connection" passHref>
                    <Link fontWeight={activeRoute === "/docs/cloud/delete-connection" ? 'bold' : 'normal'}>
                      <Badge colorScheme="red">DELETE</Badge>
                      <span style={{ marginLeft: '10px' }}>Delete Connection</span>
                    </Link>
                  </NextLink>
                </MenuItem>


                <MenuItem>
                  <Text>Image API</Text>
                </MenuItem>

                <Divider orientation='horizontal' borderColor="gray.400" />

                <MenuItem>
                  <NextLink href="/docs/upload" passHref>
                    <Link fontWeight={activeRoute === "/docs/upload" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Upload</span>
                    </Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/docs/resize" passHref>
                    <Link fontWeight={activeRoute === "/docs/resize" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Resize</span>
                    </Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/docs/quality" passHref>
                    <Link fontWeight={activeRoute === "/docs/quality" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Quality</span>
                    </Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/docs/moonlight" passHref>
                    <Link fontWeight={activeRoute === "/docs/moonlight" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Moonlight</span>
                    </Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/docs/sharpen" passHref>
                    <Link fontWeight={activeRoute === "/docs/sharpen" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Sharpen</span>
                    </Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/docs/average" passHref>
                    <Link fontWeight={activeRoute === "/docs/average" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Color Balance</span>
                    </Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/docs/gray" passHref>
                    <Link fontWeight={activeRoute === "/docs/gray" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Gray</span>
                    </Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/docs/collage" passHref>
                    <Link fontWeight={activeRoute === "/docs/collage" ? 'bold' : 'normal'}>
                      <Badge colorScheme="purple">POST</Badge>
                      <span style={{ marginLeft: '10px' }}>Collage</span>
                    </Link>
                  </NextLink>
                </MenuItem>
              </MenuList>
            </Menu>
          }
          {router.pathname.includes('/demo') &&
            <Menu>
              <MenuButton as={Button} bg="none" border="1px solid" borderColor="gray.100" p={0} fontSize="xs">
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
        bg='gray.100'
        display={{
          base: 'none',
          lg: 'grid'
        }}
      >
        <List spacing={3} p={4} minW="180px">
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
            <Text>Cloud Connectors</Text>
          </ListItem>

          <Divider orientation='horizontal' borderColor="gray.400" />

          <ListItem>
            <NextLink href="/docs/cloud/get-connection" passHref>
              <Link fontWeight={activeRoute === "/docs/cloud/get-connection" ? 'bold' : 'normal'}>
                <Badge colorScheme="orange">GET</Badge>
                <span style={{ marginLeft: '10px' }}>Get Connection</span>
              </Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/docs/cloud/create-connection" passHref>
              <Link fontWeight={activeRoute === "/docs/cloud/create-connection" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Create Connection</span>
              </Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/docs/cloud/delete-connection" passHref>
              <Link fontWeight={activeRoute === "/docs/cloud/delete-connection" ? 'bold' : 'normal'}>
                <Badge colorScheme="red">DELETE</Badge>
                <span style={{ marginLeft: '10px' }}>Delete Connection</span>
              </Link>
            </NextLink>
          </ListItem>


          <ListItem>
            <Text>Image API</Text>
          </ListItem>

          <Divider orientation='horizontal' borderColor="gray.400" />

          <ListItem>
            <NextLink href="/docs/upload" passHref>
              <Link fontWeight={activeRoute === "/docs/upload" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Upload</span>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/docs/resize" passHref>
              <Link fontWeight={activeRoute === "/docs/resize" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Resize</span>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/docs/quality" passHref>
              <Link fontWeight={activeRoute === "/docs/quality" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Quality</span>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/docs/moonlight" passHref>
              <Link fontWeight={activeRoute === "/docs/moonlight" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Moonlight</span>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/docs/sharpen" passHref>
              <Link fontWeight={activeRoute === "/docs/sharpen" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Sharpen</span>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/docs/average" passHref>
              <Link fontWeight={activeRoute === "/docs/average" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Color Balance</span>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/docs/gray" passHref>
              <Link fontWeight={activeRoute === "/docs/gray" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Gray</span>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/docs/collage" passHref>
              <Link fontWeight={activeRoute === "/docs/collage" ? 'bold' : 'normal'}>
                <Badge colorScheme="purple">POST</Badge>
                <span style={{ marginLeft: '10px' }}>Collage</span>
              </Link>
            </NextLink>
          </ListItem>
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