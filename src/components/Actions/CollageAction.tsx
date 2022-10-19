import React from "react";
import {
  Button,
  useToast,
  VStack,
  Skeleton,
  HStack,
} from "@chakra-ui/react";
import { handleImageMutation } from "@/src/util/action.service";
import ImageUpload from "@/src/components/ImageUpload";
import httpLoader from "@/src/loaders/httpLoader";

export default function CollageAction({ uploadId, onIsLoaded, onConvertedImage }: any) {
  const [uploadIdTwo, setUploadIdTwo] = React.useState("");
  const [_, setUploadedImage] = React.useState("");
  const [isLoaded] = React.useState(true);
  const toast = useToast();

  const onSubmit = async (formData: any) => {
    try {
      const data = await httpLoader({
        route: 'upload',
        payload: formData,
        token: process?.env?.NEXT_PUBLIC_USER_API_TOKEN,
      })
      setUploadIdTwo(data.uploadId);
      toast({
        title: 'API RESPONSE.',
        description: "Image upload successful.",
        status: 'success',
        duration: 5000,
        position: 'top-left'
      })
    }
    catch (e) {
      toast({
        title: 'API RESPONSE.',
        description: "Image upload failed.",
        status: 'error',
        duration: 5000,
        position: 'top-left'
      })
    }
  };

  return (
    <VStack>
      <Button
        disabled={!uploadId || !uploadIdTwo}
        onClick={async () =>
          handleImageMutation({
            request: {
              route: 'collage',
              payload: {
                idOne: uploadId,
                idTwo: uploadIdTwo,
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
        size="sm"
        my="4"
      >
        Collage
      </Button>

      <Skeleton isLoaded={isLoaded}>
        <HStack spacing={10}>
          <ImageUpload
            uploadId={uploadId}
            onSubmit={onSubmit}
            onChange={(imageData) => {
              setUploadedImage(imageData);
            }}
          />
        </HStack>
      </Skeleton>
    </VStack>
  );
}