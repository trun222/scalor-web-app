import React from 'react';
import { Box, HStack, Image, Button, Input } from "@chakra-ui/react";
interface Props {
  uploadId: string,
  onSubmit: (HTMLFormElement) => void
  onChange?: (string) => void
}

export default function ImageUpload({ onSubmit, onChange, uploadId }: Props) {
  const [loadedImage, setLoadedImage] = React.useState(null);
  const inputRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Send to parent component
    onSubmit(formData);
  };

  const handleImageLoad = async (e) => {
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
      height="350px"
      width="350px"
    >
      <form onSubmit={handleSubmit}>
        <Input ref={inputRef} type="file" name="file" onChange={handleImageLoad} border="none" />

        {loadedImage && (
          <>
            <Image
              src={loadedImage!}
              boxSize='lg'
              objectFit='scale-down'
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
                Upload FIle
              </Button>
            </HStack>
          </>
        )}
      </form>
    </Box>
  );
}