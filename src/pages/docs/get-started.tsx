
import React from 'react';
import type { NextPage } from 'next'
import Image from 'next/image';
import { Text, Link } from '@chakra-ui/react'
import DocsLayout from '@/src/components/layouts/DocsLayout';

const GetStarted: NextPage = () => {
  return (
    <DocsLayout>
      <Text fontSize={{ base: "xl", md: "3xl" }}>Get Started</Text>

      <Text w='60%' p={2}>
        Welcome to Scalor! Scalor will help you spend less time on multimedia asset management and more time building awesome products. <br />
        <br />
        1. The first thing you will need to do is <Link style={{ textDecoration: 'underline', color: '#ED64A6' }} href={`${process.env.NEXTAUTH_URL}/api/auth/signin`}>create</Link> an account. We support many popular social providers for easy signup and account creation.  <br />
        <Image
          src="https://scalor.s3.amazonaws.com/site-examples/get-started/login-screen.png"
          alt="Login Screen"
          height={600}
          width={700}
        />
        2. After you login for the first time. Be sure to copy your API token and keep it somewhere safe!  <br />

        <Image
          src="https://scalor.s3.amazonaws.com/site-examples/get-started/api-token-example.png"
          alt="API Token Example"
          height={200}
          width={700}
        />

        3. The API token will be used to make HTTP requests to Scalor. <br />
        <br />
        <Image
          src="https://scalor.s3.amazonaws.com/site-examples/get-started/HTTP-token-example.png"
          alt="HTTP Token Example"
          height={200}
          width={700}
        />
        <br />
        <br />
        4. From here you can checkout the rest of the docs, or checkout the <Link style={{ textDecoration: 'underline', color: '#ED64A6' }} href="/demo/resize">demos</Link> and <Link style={{ textDecoration: 'underline', color: '#ED64A6' }} href="/docs/examples">examples</Link> page  <br />
        <br />

        <Text fontSize="2xl">Happy Building! 😀</Text>
      </Text>
    </DocsLayout>
  )
}

export default GetStarted;
