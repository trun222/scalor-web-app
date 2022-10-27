
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import SideBar from '@/src/components/common/SideBar';
import Navbar from '@/src/components/Navbar';

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
    link: '/docs/resize'
  },
  {
    action: 'Quality',
    type: 'POST',
    link: '/docs/quality'
  },
  {
    action: 'Moonlight',
    type: 'POST',
    link: '/docs/moonlight'
  },
  {
    action: 'Sharpen',
    type: 'POST',
    link: '/docs/sharpen'
  },
  {
    action: 'Average',
    type: 'POST',
    link: '/docs/average'
  },
  {
    action: 'Gray',
    type: 'POST',
    link: '/docs/gray'
  },
  {
    action: 'Collage',
    type: 'POST',
    link: '/docs/collage'
  }
];

export default function SideBarLayout({ menuItems, children }: { menuItems?: any, children: any }) {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(12, 1fr)'
      templateColumns='repeat(12, 1fr)'
    >
      <GridItem rowSpan={1} colSpan={12} bg='gray.50' px={10}>
        <Navbar />
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
        bg='gray.300'
        overflowY="scroll"
      >
        {children}
      </GridItem>
    </Grid>
  );
}