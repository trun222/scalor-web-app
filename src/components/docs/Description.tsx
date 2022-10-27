import { Text } from '@chakra-ui/react'

export default function Description({ children, w }: { children: any, w?: string }) {
  return (
    <Text
      bg="white"
      w={{
        base: '100%',
        sm: '',
        md: w || '70%'
      }}
      maxW="700px"
      p={4}
    >
      {children}
    </Text>
  )
}