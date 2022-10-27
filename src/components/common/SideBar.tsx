
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
      {menuItems.map((item: any) =>
        <ListItem key={item.action}>
          <NextLink href={item.link} passHref>
            <Link fontWeight={activeRoute === item.link ? 'bold' : 'normal'}>
              <Badge colorScheme={item.type === 'POST' ? 'purple' : 'orange'} mr={4}>{item.type}</Badge>
              {item.action}
            </Link>
          </NextLink>
        </ListItem>
      )}
    </List>
  );
}