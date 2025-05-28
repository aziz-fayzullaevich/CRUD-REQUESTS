import { Button, Flex, List, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Flex justify={'center'} align={'center'} h={'80vh'}>
      <List align={'center'}>
        <Title>CRUD Requests </Title>
        <List.Item>
          <Flex gap={20} align={'center'}>
            <Link to='/todos'>
              <Button>Todos</Button>
            </Link>
            <Link to='/posts'>
              <Button>Posts</Button>
            </Link>
            <Link to='/comments'>
              <Button>Comments</Button>
            </Link>
          </Flex>
        </List.Item>
      </List>
    </Flex>
  )
}

export default Home;