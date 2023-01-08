
import React from 'react';
import { List, ListItem, Badge, Link } from '@chakra-ui/react'
import NextLink from "next/link"
import { useRouter } from 'next/router';

interface Props {
  menuItems: any
}

export default function SideBar({ menuItems }: Props) {
  const router = useRouter();
  const activeRoute = router?.pathname;

  return (
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

      {menuItems.map((item: any) =>
        <ListItem key={item.action}>
          <NextLink href={item.link} passHref>
            <Link fontWeight={activeRoute === item.link ? 'bold' : 'normal'}>
              {item.type &&
                <Badge colorScheme={item.type === 'POST' ? 'purple' : 'orange'}>{item.type}</Badge>
              }

              <span style={{ marginLeft: '10px' }}>{item.action}</span>
            </Link>
          </NextLink>
        </ListItem>
      )}
    </List>
  );
}