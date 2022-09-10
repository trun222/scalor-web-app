import { List, ListItem, Badge, Text, Box } from '@chakra-ui/react'

export default function PropertiesSection({ properties }: { properties: any }) {
  return (
    <>
      <Text fontSize="4xl" fontWeight="thin">
        Properties
      </Text>

      <Box w="60%" bg="whiteAlpha.500">
        <List spacing={3} p={4}>
          {properties.map((h: any) => <ListItem key={h.key}>
            {h.key} <Badge colorScheme={'red'} ml={4}>{h.value}</Badge> {h.note ? <Badge colorScheme={'purple'} ml={4}>{h.note}</Badge> : ''}
          </ListItem>
          )}
        </List>
      </Box>
    </>
  );
}