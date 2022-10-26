import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react';
import React, { useEffect } from "react";
import Hotjar from '@hotjar/browser';
import GoogleAnalytics from '@/src/components/3rdParty/GoogleAnalytics';

function MyApp({ Component, session, pageProps }: any) {
  const siteID: any = process?.env?.NEXT_PUBLIC_HOTJAR_SITE_ID!;

  useEffect(() => {
    Hotjar.init(siteID, 6, {
      debug: true
    });
  });

  return (
    <>
      <GoogleAnalytics />
      <SessionProvider session={session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp
