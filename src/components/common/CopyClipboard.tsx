
import React from 'react';
import { HStack, Text, useToast, IconButton } from '@chakra-ui/react'
import Description from '@/src/components/docs/Description';
import { MdOutlineCopyAll } from 'react-icons/md'

const CopyClipboard = ({ text }: { text: any }) => {
  const toast = useToast();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied',
      description: "Sucessfully copied to clipboard.",
      status: 'success',
      duration: 5000,
      position: 'bottom'
    })
  }

  return (
    <Description>
      <HStack justify="space-between">
        <Text fontSize="md">
          {text}
        </Text>
        <IconButton
          aria-label='Copy to Clipboard'
          icon={<MdOutlineCopyAll />}
          onClick={handleCopyToClipboard}
        ></IconButton>
      </HStack>

    </Description>
  )
}

export default CopyClipboard;
