import { usePosts } from '../../hooks/usePosts'
import { ITEMS_PER_PAGE } from '../../constans/itemsPerPage';
import { Button, Flex, SimpleGrid, Stack, Title } from '@mantine/core';
import CardItem from '../../ui/CardItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomPagination } from '../../export-ui/CustomPagination';

const PostList = () => {
    const { posts } = usePosts();
    const [activePage, setActivePage] = useState(1);

    const start = (activePage - 1) * ITEMS_PER_PAGE;
    const paginatedPosts = posts.slice(start, start + ITEMS_PER_PAGE);
    return (
        <Stack gap={10}>
            <Flex align="center" gap={10}>
                <Button component={Link} to="/">Back</Button>
                <Title>Posts List</Title>
            </Flex>

            <SimpleGrid cols={3} spacing={'lg'}>
                {paginatedPosts.map(post => (
                    <CardItem
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        reactions={post.reactions}
                        views={post.views} />
                ))}
            </SimpleGrid>
            <CustomPagination total={Math.ceil(posts.length / ITEMS_PER_PAGE)}
                value={activePage} onChange={setActivePage} />
        </Stack>

    )
}

export default PostList