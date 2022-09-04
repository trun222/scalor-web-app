import { List, ListItem, Badge, Text, Box } from '@chakra-ui/react'

export default function HeadersSection({ headers }: { headers: any }) {
  return (
    <>
      <Text fontSize="4xl" fontWeight="thin">
        Headers
      </Text>

      <Box w="60%" bg="white">
        <List spacing={3} p={4}>
          {headers.map((h: any) => <ListItem>
            {h.key} <Badge colorScheme={'purple'} ml={4}>{h.value}</Badge>
          </ListItem>
          )}
        </List>
      </Box>
    </>
  );
}