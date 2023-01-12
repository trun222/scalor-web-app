import { List, ListItem, Badge, Text, Box } from '@chakra-ui/react'

export default function PropertiesSection({ properties }: { properties: any }) {
  return (
    <>
      <Text fontSize="4xl" fontWeight="thin">
        Properties
      </Text>

      <Box w={{
        base: '100%',
        md: '70%'
      }}
        maxW="700px"
        bg="white"
        overflowX="scroll"
      >
        <List spacing={3} p={4} w="100%">
          {properties.map((h: any) => <ListItem key={h.key}>
            {h.key} <Badge colorScheme={'red'} ml={4}>{h.value}</Badge> {h.note ? <Badge colorScheme={'purple'} ml={4}>{h.note}</Badge> : ''}
          </ListItem>
          )}
        </List>
      </Box>
    </>
  );
}