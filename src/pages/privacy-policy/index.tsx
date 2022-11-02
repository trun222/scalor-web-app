import React from 'react';
import { VStack, Text, Center, UnorderedList, ListItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import NavBarLayout from '@/src/components/layouts/NavBarLayout';

const PrivacyPolicy: NextPage = () => {
  return (
    <NavBarLayout>
      <Center>
        <VStack align="center" justify="center" p={10} spacing={8} w="50%" bg="white">
          <Text fontSize="4xl">Scalor Privacy Policy</Text>

          <Text fontSize="xl">
            At Scalor, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of
            information that is collected and recorded by Scalor.app and how we use it.
          </Text>

          <Text fontSize="xl">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </Text>

          <Text fontSize="xl">
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the
            information that they shared and/or collect in Scalor.app. This policy is not applicable to any information collected offline
            or via channels other than this website.
          </Text>


          <Text fontSize="2xl">
            Consent
          </Text>

          <Text fontSize="xl">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </Text>

          <Text fontSize="2xl">
            Information we collect
          </Text>

          <Text fontSize="xl">
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point
            we ask you to provide your personal information.
          </Text>

          <Text fontSize="xl">
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the
            message and/or attachments you may send us, and any other information you may choose to provide.
          </Text>

          <Text fontSize="2xl">
            How we use your information
          </Text>

          <Text fontSize="xl">
            We use the information we collect in various ways, including to:
          </Text>

          <UnorderedList p={4} spacing={4}>
            <ListItem fontSize="xl">Provide, operate, and maintain our website</ListItem>
            <ListItem fontSize="xl">Improve, personalize, and expand our website</ListItem>
            <ListItem fontSize="xl">Understand and analyze how you use our website</ListItem>
            <ListItem fontSize="xl">Communicate with you, either directly or through one of our partners, including for customer service,
              to provide you with updates and other information relating to the website, and for marketing and promotional purposes</ListItem>
            <ListItem fontSize="xl">Send you emails</ListItem>
            <ListItem fontSize="xl">Find and prevent fraud</ListItem>
          </UnorderedList>

          <Text fontSize="2xl">
            Log Files
          </Text>

          <Text fontSize="xl">
            These files log visitors when they visit websites.All hosting companies do this and a part of hosting services&apos; analytics. The information collected
            by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and
            possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends,
            administering the site, tracking users&apos; movement on the website, and gathering demographic information.
          </Text>

          <Text fontSize="2xl">
            Third Party Privacy Policies
          </Text>

          <Text fontSize="xl">
            Scalor.app&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-parties
            for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </Text>

          <Text fontSize="xl">
            We do not sell any of your data to any third party.
          </Text>

          <Text fontSize="2xl">
            GDPR Data Protection Rights
          </Text>

          <Text fontSize="xl">
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </Text>

          <Text fontSize="xl">
            The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
          </Text>

          <Text fontSize="xl">
            The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is incomplete.
          </Text>

          <Text fontSize="xl">
            The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
          </Text>

          <Text fontSize="xl">
            The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
          </Text>

          <Text fontSize="xl">
            The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
          </Text>

          <Text fontSize="xl">
            The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
          </Text>

          <Text fontSize="xl">
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at scalor-api@protonmail.com.
          </Text>
        </VStack>
      </Center>
    </NavBarLayout>
  )
}

export default PrivacyPolicy;
