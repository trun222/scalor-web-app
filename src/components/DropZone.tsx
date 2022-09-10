import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, VStack, Icon, Button, Text, Flex } from "@chakra-ui/react";
import { MdImage } from "react-icons/md";

interface DropzoneProps {
  multiple?: boolean;
  /**
   * onChange - once the file has been uploaded
   */
  onChange: any;
  /**
   * onError - if an error occurs
   */
  onError?: any;
}

const MAX_FILE_SIZE = 5 * 1000000; // 5MB

export default function DropZone({
  onChange,
  onError,
  multiple,
}: DropzoneProps) {
  const [isError, setIsError] = useState({ error: false, message: "" });

  const onDrop = useCallback(
    (acceptedFiles) => {
      try {
        acceptedFiles.forEach((file: any) => {
          const reader = new FileReader();

          if (file.size > MAX_FILE_SIZE) {
            throw new Error(`File size is too big. Max size is 5MB`);
          }

          reader.onabort = () => console.log("file reading was aborted");
          reader.onerror = () => console.log("file reading has failed");
          reader.onload = () => {
            // Do whatever you want with the file contents
            const imageData: any = reader.result;
            console.log('result: ', imageData)
            setImageUrl(imageData);
            const cleaned = (imageData.split(','))[1];
            console.log(Buffer.from(cleaned));
            file.data = Buffer.from(cleaned);
            file.mimetype = file.type;
            onChange(file);
          };
          console.log(file);
          reader.readAsDataURL(file);
        });
      } catch (e: any) {
        setIsError({ error: true, message: e?.message });
        onError(e);
      }
    },
    [onChange]
  );
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      maxFiles: multiple ? 10 : 1,
    });
  let [imageUrl, setImageUrl] = useState<any>();

  return (
    <Box
      height="auto"
      min-height="364px"
      width="360px"
      mb={5}
      p={4}
      bg="gray.100"
      borderRadius="md"
      onClick={() => {
        if (!imageUrl) {
        }
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <Flex {...getRootProps()} justify="center">
        {isError?.error && (
          <VStack justify="center">
            <Text
              align="center"
              color="red.500"
              fontSize="sm"
              fontWeight="bold"
              p={4}
            >
              {isError?.message}
            </Text>
            <Button
              colorScheme="facebook"
              onClick={() => setIsError({ error: false, message: "" })}
            >
              Reset
            </Button>
          </VStack>
        )}

        {!imageUrl && !isError?.error && (
          <>
            <input {...getInputProps()} />
            <Box
              height="350px"
              width="350px"
              border="2px"
              borderRadius="4px"
              borderStyle="dashed"
              borderColor="gray.300"
            >
              <VStack h="100%" w="100%" align="center" justify="center" pb={3}>
                <Icon h="48px" w="48px" as={MdImage} color="gray.300" />

                <Button variant="solid" bg="white">
                  Upload FIle
                </Button>
              </VStack>
            </Box>
          </>
        )}
      </Flex>

      {imageUrl && !isError?.error && (
        <>
          <div
            style={{
              height: "350px",
              width: "325px",
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
            }}
          />
          <Text
            variant="paragraph"
            color="blue.400"
            textAlign="center"
            onClick={() => {
              setImageUrl(undefined);
            }}
            mt={3}
          >
            Cancel
          </Text>
        </>
      )}
    </Box>
  );
}
