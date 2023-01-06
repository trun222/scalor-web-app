import { Badge, HStack, Text } from '@chakra-ui/react'

export default function ActionTitle({ action, method }: { action: string, method: 'GET' | 'POST' | '' }) {
  return (
    <HStack justify="space-between" spacing={6}>
      {method ?
        <>
          <Badge colorScheme={method === 'GET' ? 'orange' : 'purple'}>
            <Text fontSize="3xl">{method}</Text>
          </Badge>

        </>
        : <Text fontSize="4xl" className="fontBold">{action}</Text>
      }
    </HStack>
  );
}