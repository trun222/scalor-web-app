
import React from 'react';
import { List, ListItem, Badge, Link } from '@chakra-ui/react'
import NextLink from "next/link"

const docMenuItems = [
  {
    action: 'User',
    type: 'GET'
  },
  {
    action: 'Upload',
    type: 'POST'
  },
  {
    action: 'Resize',
    type: 'POST'
  },
  {
    action: 'Quality',
    type: 'POST'
  },
  {
    action: 'Moonlight',
    type: 'POST'
  },
  {
    action: 'Sharpen',
    type: 'POST'
  },
  {
    action: 'Average',
    type: 'POST'
  },
  {
    action: 'Gray',
    type: 'POST'
  },
  {
    action: 'Collage',
    type: 'POST'
  }
];

export default function DocNavBar() {
  return (
    <List spacing={3} p={4}>
      {docMenuItems.map((item) =>
        <ListItem key={item.action}>
          <NextLink href={`/docs/${item.action.toLowerCase()}`} passHref>
            <Link>
              {item.action} <Badge colorScheme={item.type === 'POST' ? 'purple' : 'orange'} ml={4}>{item.type}</Badge>
            </Link>
          </NextLink>
        </ListItem>
      )}
    </List>
  );
}