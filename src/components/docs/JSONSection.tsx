import { Text, Box } from '@chakra-ui/react'
import PrettyJSON from 'react-prettify-json';

export default function JSONSection({ title, json, w }: { title: string, json: any, w?: string }) {
  return (
    <>
      <Text fontSize="4xl" fontWeight="thin">
        {title}
      </Text>
      <Box bg="white"
        p={4}
        w={{
          base: '100%',
          sm: '',
          md: w || '70%'
        }}
        maxW="700px"
      >
        <PrettyJSON
          jsonObject={json}
          colors={{
            punctuation: '#000',
            key: '#000',
            value: 'purple',
            string: 'purple',
          }}
        />
      </Box>
    </>
  );
}