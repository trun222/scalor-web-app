import type { NextPage } from 'next'
import { Button, Stack, Icon } from '@chakra-ui/react'
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
const Home: NextPage = () => {
  return (
    <div>
      <Stack spacing={4} direction='row' align='center'>
        <Button colorScheme='teal' size='xs'>
          Button
        </Button>
        <Button colorScheme='teal' size='sm'>
          Button
        </Button>
        <Button colorScheme='teal' size='md'>
          Button
        </Button>
        <Button colorScheme='teal' size='lg'>
          Button <Icon as={BsFillArrowRightSquareFill} w={8} h={8} color='red.500' pl="20px" />
        </Button>
      </Stack>
    </div>
  )
}

export default Home
