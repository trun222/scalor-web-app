// import type { NextPage } from "next";
// import React from "react";
// import {
//   Box,
//   HStack,
//   VStack,
//   Text,
//   List,
//   ListItem,
//   Button
// } from "@chakra-ui/react";
// import NavBarLayout from "@/src/components/layouts/NavBarLayout";
// import { STRIPE_MEMBERSHIP } from "@/src/interfaces/Stripe.interface";
// import axios from 'axios';
// import Router from "next/router";

// const PricingPage: NextPage = () => {
//   const handleSubscribe = async (type: STRIPE_MEMBERSHIP) => {
//     const response = await axios.post('/api/subscribe/checkout-session', { lookup_key: STRIPE_MEMBERSHIP[type], email: 'thomasunderwoodii@gmail.com' });
//     Router.push(response.data);
//   }

//   const handleManageStripeAccount = async () => {
//     const response = await axios.post('/api/subscribe/portal-session', { email: 'thomasunderwoodii@gmail.com' });
//     Router.push(response.data);
//   }

//   return (
//     <NavBarLayout>
//       <VStack align="center" justify="center" spacing={6} pb={10}>
//         <Text fontSize="8xl" fontWeight="bold" color="white">
//           Pricing
//         </Text>

//         <HStack spacing={6}>
//           <Box border="1px" borderColor="gray.400" borderStyle="ridge" textAlign="center" bg="gray.500" borderRadius="md" h="auto" w="350px" p={8}>
//             <Text fontSize="3xl" color="white">Hobbiest</Text>

//             <List mt={4}>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 10,000 API Requests / Month
//               </ListItem>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 1MB Image Uploads
//               </ListItem>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 Basic Email Support
//               </ListItem>

//               <Text fontSize="2xl" fontWeight="bold" color="white">Price</Text>
//               <Text fontSize="xl" color="white">Free 😊</Text>

//               <Button variant="outline" color="white" _hover={{ color: 'black' }} mt={2}>
//                 Sign Up
//               </Button>
//             </List>
//           </Box>
//           <Box border="1px" borderColor="gray.400" borderStyle="ridge" textAlign="center" bg="gray.500" borderRadius="md" h="auto" w="350px" p={8}>
//             <Text fontSize="3xl" color="white">Premium</Text>

//             <List mt={4}>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 50,000 API Requests / Month
//               </ListItem>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 10MB Image Uploads
//               </ListItem>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 Advanced Email Support
//               </ListItem>

//               <Text fontSize="2xl" fontWeight="bold" color="white">Price</Text>
//               <Text fontSize="xl" color="white">$3.99/mo 🤓</Text>

//               <Button variant="outline" color="white" _hover={{ color: 'black' }} mt={2} onClick={() => handleSubscribe(STRIPE_MEMBERSHIP.PREMIUM)}>
//                 Subscribe
//               </Button>
//             </List>
//           </Box>
//           <Box border="1px" borderColor="gray.400" borderStyle="ridge" textAlign="center" bg="gray.500" borderRadius="md" h="auto" w="350px" p={8}>
//             <Text fontSize="3xl" color="white">Pro</Text>

//             <List mt={4}>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 100,000 API Requests / Month
//               </ListItem>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 50MB Image Uploads
//               </ListItem>
//               <ListItem bg="white" p="4" w="100%" mb={4}>
//                 Priority Support
//               </ListItem>

//               <Text fontSize="2xl" fontWeight="bold" color="white">Price</Text>
//               <Text fontSize="xl" color="white">$6.99/mo 💪</Text>

//               <Button variant="outline" color="white" _hover={{ color: 'black' }} mt={2} onClick={() => handleSubscribe(STRIPE_MEMBERSHIP.PRO)}>
//                 Subscribe
//               </Button>
//             </List>
//           </Box>
//         </HStack>

//         <Button onClick={handleManageStripeAccount}>
//           Manage Account
//         </Button>

//         <Text>
//           Please consider subscribing to support Scalor so that we can continue to expand features for all users!
//         </Text>
//       </VStack>
//     </NavBarLayout>
//   )
// }

// export default PricingPage;
