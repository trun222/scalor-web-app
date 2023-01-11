import { Badge, HStack, Text } from '@chakra-ui/react'

export default function ActionTitle({ action, method }: { action: string, method: 'GET' | 'POST' | 'DELETE' | '' }) {

  const selectColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'orange';
      case 'POST':
        return 'purple';
      case 'DELETE':
        return 'red';
      default: 'orange';
    }
  }

  return (
    <HStack justify="space-between" spacing={6}>
      <Badge colorScheme={selectColor(method)}>
        <Text fontSize="3xl">{method}</Text>
      </Badge>
      <Text fontSize="4xl" className="fontBold">{action}</Text>
    </HStack>
  );
}