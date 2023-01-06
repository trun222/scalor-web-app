
import React from 'react';
import type { NextPage } from 'next'
import ActionTitle from '@/src/components/docs/ActionTitle';
import SideBarLayout from '@/src/components/layouts/SideBarLayout';

const Releases: NextPage = () => {
  return (
    <SideBarLayout>
      <ActionTitle
        action="Releases"
        method=""
      />


    </SideBarLayout >
  )
}

export default Releases;
