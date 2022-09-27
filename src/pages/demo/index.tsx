import type { NextPage } from "next";
import React from "react";
import {
  Skeleton,
  HStack,
  VStack,
  Text,
  Button,
  Image,
  useToast
} from "@chakra-ui/react";
import ImageUpload from "@/src/components/ImageUpload";
import ActionsBar from "@/src/components/ActionsBar";
import httpLoader from "@/src/loaders/httpLoader";
import NavBarLayout from "@/src/components/layouts/NavBarLayout";
import { match } from 'ts-pattern';

const DemoPage: NextPage = () => {
  const [uploadedImage, setUploadedImage] = React.useState("");
  const [convertedImage, setConvertedImage] = React.useState("");
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [uploadId, setUploadId] = React.useState("");
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
    <NavBarLayout>
      <VStack align="center" justify="center" spacing={10}>
        <Text fontSize="8xl">
          Demo
        </Text>

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

        {convertedImage &&
          <Button onClick={() => {
            setUploadedImage("");
            setConvertedImage("");
            setUploadId("");
          }}>
            Reset
          </Button>
        }

        {uploadId &&
          <ActionsBar
            uploadId={uploadId}
            onIsLoaded={(state: boolean) => setIsLoaded(state)}
            onConvertedImage={(imageData: string) => setConvertedImage(imageData)}
            convertedImage={convertedImage}
          />
        }
      </VStack>
    </NavBarLayout>
  )
}

export default DemoPage;
