import React from "react";
import {
  Button,
  useToast,
  VStack
} from "@chakra-ui/react";
import { handleImageMutation } from "@/src/util/action.service";


export default function ColorBalanceAction({ uploadId, metadata, onIsLoaded, onConvertedImage }: any) {
  const toast = useToast();

  return (
    <VStack>
      <Button
        mt={4}
        disabled={!uploadId}
        onClick={async () =>
          handleImageMutation({
            request: {
              route: 'average',
              payload: {
                id: uploadId,
                platform: 'WEB',
                mimeType: metadata?.mimeType,
              },
              token: process?.env?.NEXT_PUBLIC_USER_API_TOKEN,
            },
            onIsLoaded,
            onConvertedImage,
            toast
          })}
        colorScheme="teal"
        size="sm">
        Color Balance
      </Button>
    </VStack>
  );
}