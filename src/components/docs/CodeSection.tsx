import { Text } from '@chakra-ui/react'
import { CopyBlock, github } from "react-code-blocks";

export default function CodeSection({ title, code, h, w }: { title: string, code: string, h?: string, w?: string }) {
  return (
    <>
      <Text fontSize="2xl">
        {title}
      </Text>

      <CopyBlock
        // @ts-ignore
        text={code}
        language="tsx"
        showLineNumbers
        theme={github}
        codeBlock
        copied
        customStyle={{ width: w || '60%' }}
      />
    </>
  );
}