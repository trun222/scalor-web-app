import { Text, Textarea } from '@chakra-ui/react'
import type { _ } from 'ts-pattern/dist/patterns';

export default function JSONSection({ title, json, h, w }: { title: string, json: any, h?: string, w?: string }) {
  return (
    <>
      <Text fontSize="2xl">
        {title}
      </Text>
      <Textarea bg="white"
        p={{
          base: 1,
          md: 4
        }}
        w={{
          base: '100%',
          md: w || 'auto'
        }}
        h={h || "250px"}
        maxW="700px"
      >
        {JSON.stringify(json, null, 4)}
      </Textarea>
    </>
  );
}