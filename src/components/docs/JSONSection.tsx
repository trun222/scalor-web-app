import { Text, Box } from '@chakra-ui/react'
import PrettyJSON from 'react-prettify-json';

export default function JSONSection({ title, json }: { title: string, json: any }) {
  return (
    <>
      <Text fontSize="4xl" fontWeight="thin">
        {title}
      </Text>
      <Box bg="white" p={4}>
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