import { Text, Box } from '@chakra-ui/react'
import PrettyJSON from 'react-prettify-json';

export default function JSONSection({ title, json, w }: { title: string, json: any, w?: string }) {
  return (
    <>
      <Text fontSize="3xl" className="fontBold">
        {title}
      </Text>
      <Box bg="white"
        p={{
          base: 1,
          md: 4
        }}
        w={{
          base: '100%',
          md: w || 'auto'
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