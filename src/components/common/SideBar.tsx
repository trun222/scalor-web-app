
import React from 'react';
import { List, ListItem, Badge, Link } from '@chakra-ui/react'
import NextLink from "next/link"
import { useRouter } from 'next/router';
import Image from 'next/image';

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
              {item.type ?
                <Badge colorScheme={item.type === 'POST' ? 'purple' : 'orange'}>{item.type}</Badge>
                : <Image
                  src="/images/scalor-logo.svg"
                  height="20px"
                  width="20px"
                  alt="Scalor Logo"
                />
              }

              <span style={{ marginLeft: '10px' }}>{item.action}</span>
            </Link>
          </NextLink>
        </ListItem>
      )}
    </List>
  );
}