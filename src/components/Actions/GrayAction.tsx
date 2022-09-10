import React from "react";
import {
  Button,
  useToast,
  Text,
  VStack
} from "@chakra-ui/react";
import { handleImageMutation } from "@/src/util/action.service";

export default function GrayAction({ uploadId, onIsLoaded, onConvertedImage }: any) {
  const toast = useToast();

  return (
    <VStack>
      <Text fontSize="4xl" fontWeight="thin">Gray Example</Text>

      <Button
        mt={4}
        disabled={!uploadId}
        onClick={async () =>
          handleImageMutation({
            request: {
              route: 'gray',
              payload: {
                id: uploadId,
                platform: 'WEB',
                mimeType: "image/jpg"
              },
              token: process?.env?.NEXT_PUBLIC_USER_API_TOKEN,
            },
            onIsLoaded,
            onConvertedImage,
            toast
          })}
        colorScheme="teal"
        size="md">
        Gray
      </Button>
    </VStack>
  );
}