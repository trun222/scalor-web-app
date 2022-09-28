import type { NextPage } from "next";
import React from "react";
import {
  VStack,
} from "@chakra-ui/react";
import SideBarLayout from "@/src/components/layouts/SideBarLayout";

const menuItems = [
  {
    action: 'Usage',
    link: '/dashboard/usage'
  },
  {
    action: 'Billing',
    link: '/dashboard/billing'
  }
];


const DashboardPage: NextPage = () => {


  return (
    <SideBarLayout menuItems={menuItems}>
      <VStack align="center" justify="center" spacing={6} pb={10}>
      </VStack>
    </SideBarLayout>
  )
}

export default DashboardPage;
