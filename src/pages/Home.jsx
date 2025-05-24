import { Button, Flex, List, Title } from '@mantine/core';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Flex justify={'center'} align={'center'} h={'80vh'}>
      <List>
        <Flex gap={10} align={'center'}>
          <Title>Welcome to To-Do </Title>
          <List.Item>
            <Link to='/todos'>
              <Button>Todos</Button>
            </Link>
          </List.Item>
        </Flex>
      </List>
    </Flex>
  )
}

export default Home;