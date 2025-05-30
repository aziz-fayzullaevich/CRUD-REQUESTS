import { usePosts } from '../../hooks/usePosts'
import { ITEMS_PER_PAGE } from '../../constans/itemsPerPage';
import { Box, Button, Flex, SimpleGrid, Stack, Title } from '@mantine/core';
import CardItem from '../../ui/CardItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomPagination } from '../../export-ui/CustomPagination';
import { modals } from '@mantine/modals';
import { CreatePost } from './CreatePost';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import { LoaderWithError } from '../../ui/LoaderWithError';
import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost';
import { SearchPost } from './SearchPost';
import { useSearchPosts } from '../../hooks/useSearchPosts';

const PostList = () => {
    const { posts, isLoading, error } = usePosts();
    const [activePage, setActivePage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const { result: searchResults, isSearching, searchError } = useSearchPosts(searchQuery);

    const createPost = () => {
        modals.open({
            children: <CreatePost />,
            title: 'Craete Post'
        })
    };

    const deletePost = id => {
        modals.open({
            children: <DeletePost id={id} />,
            title: 'Delete'
        })
    };

    const editPost = id => {
        modals.open({
            children: <EditPost id={id} />,
            title: 'Edit'
        })
    }

    const start = (activePage - 1) * ITEMS_PER_PAGE;
    const paginatedPosts = posts.slice(start, start + ITEMS_PER_PAGE);
    return (
        <Stack gap={10}>
            <Flex align="center" gap={10} justify={'space-between'}>
                <Box>
                    <Flex gap={10}>
                        <Button component={Link} to="/">Back</Button>
                        <Title>Posts List</Title>
                    </Flex>
                </Box>
                <SearchPost onSearch={setSearchQuery}/>
                <Button
                    leftSection={<HiMiniPlusCircle
                        size={25} />}
                    onClick={createPost}
                >
                    Create
                </Button>
            </Flex>

            <LoaderWithError isLoading={isLoading} error={error}>
                <SimpleGrid cols={3} spacing={'lg'}>
                    {paginatedPosts.map(post => (
                        <CardItem
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            reactions={post.reactions}
                            views={post.views}
                            deletePost={deletePost}
                            editPost={editPost} />
                    ))}
                </SimpleGrid>
                <CustomPagination total={Math.ceil(posts.length / ITEMS_PER_PAGE)}
                    value={activePage} onChange={setActivePage} />
            </LoaderWithError>
        </Stack>

    )
}

export default PostList;