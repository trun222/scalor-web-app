import React from 'react';
import { Box, HStack, Text, Image, Button, Input } from "@chakra-ui/react";
interface Props {
  uploadId: string,
  onSubmit: (HTMLFormElement: any) => void
  onChange?: (string: string) => void
}

export default function ImageUpload({ onSubmit, onChange }: Props) {
  const [loadedImage, setLoadedImage] = React.useState(null);
  const inputRef = React.useRef(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Send to parent component
    onSubmit(formData);
  };

  const handleImageLoad = async (e: any) => {
    let files = e.target.files;
    let file = files[0];
    let reader = new FileReader();

    reader.onload = () => {
      const imageData: any = reader.result;
      setLoadedImage(imageData);
      // Send to parent component
      if (onChange) {
        onChange(imageData);
      }
    };

    reader.readAsDataURL(file);
  }

  return (
    <Box
      height="250px"
      width="250px"
    >
      <form onSubmit={handleSubmit}>
        <Input ref={inputRef} type="file" name="file" onChange={handleImageLoad} border="none" />
        {!loadedImage && <Text fontSize="sm">Please upload a photo to test Scalor!</Text>}
        {loadedImage && (
          <>
            <Image
              src={loadedImage!}
              boxSize='lg'
              objectFit='scale-down'
              alt="Loaded Image"
              h="256px"
              w="256px"
            />
            <HStack justify="center" spacing={4} mt={4} w="256px">
              <Button
                onClick={() => {
                  setLoadedImage(null);
                  (inputRef as any).current.value = null;
                  onChange && onChange("");
                }}>Cancel</Button>
              <Button variant="solid" bg="white" type="submit">
                Upload File
              </Button>
            </HStack>
          </>
        )}
      </form>
    </Box>
  );
}