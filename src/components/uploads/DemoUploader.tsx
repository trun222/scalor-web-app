import React from "react";
import {
  Skeleton,
  HStack,
  Button,
  Image,
  useToast
} from "@chakra-ui/react";
import ImageUpload from "@/src/components/ImageUpload";
import httpLoader from "@/src/loaders/httpLoader";
import { match } from 'ts-pattern';

interface Props {
  uploadId: string;
  uploadedImage: string;
  convertedImage: string;
  isLoaded: boolean;
  setUploadId: (data: string) => void;
  setUploadedImage: (data: string) => void;
  setConvertedImage: (data: string) => void;
}

const DemoUploader = ({
  uploadId,
  uploadedImage,
  convertedImage,
  setUploadId,
  setUploadedImage,
  setConvertedImage,
  isLoaded
}: Props) => {
  const toast = useToast();

  const onSubmit = async (formData: any) => {
    try {
      const data = await httpLoader({
        route: 'upload',
        payload: formData,
        token: process?.env?.NEXT_PUBLIC_USER_API_TOKEN,
      })
      setUploadId(data.uploadId);
      toast({
        title: 'API RESPONSE.',
        description: "Image upload successful.",
        status: 'success',
        duration: 5000,
        position: 'bottom-left'
      })
    }
    catch (e) {
      toast({
        title: 'API RESPONSE.',
        description: "Image upload failed.",
        status: 'error',
        duration: 5000,
        position: 'bottom-left'
      })
    }
  };

  return (
    <>
      <Skeleton isLoaded={isLoaded}>
        <HStack spacing={10}>
          {match(convertedImage)
            .with("", () => <ImageUpload
              uploadId={uploadId}
              onSubmit={onSubmit}
              onChange={(imageData) => {
                setUploadedImage(imageData);
              }}
            />)
            .otherwise(() => {
              return (
                <>
                  {uploadedImage &&
                    <Image
                      src={uploadedImage}
                      boxSize='md'
                      objectFit='scale-down'
                      alt="Uploaded Image"
                      h="350px"
                      w="350px"
                    />
                  }
                  <Image
                    src={convertedImage}
                    boxSize='md'
                    objectFit='scale-down'
                    alt="Modified Image"
                    h="350px"
                    w="350px"
                  />
                </>
              )
            })
          }
        </HStack>
      </Skeleton>

      {
        convertedImage &&
        <Button
          onClick={() => {
            setUploadedImage("");
            setConvertedImage("");
            setUploadId("");
          }}
          mt={4}
        >
          Reset
        </Button>
      }
    </>
  )
}

export default DemoUploader;
