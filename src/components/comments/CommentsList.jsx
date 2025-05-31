import { useState } from 'react'
import { useComments } from '../../hooks/useComments'
import { ITEMS_PER_PAGE } from '../../constans/itemsPerPage';
import { Button, Flex, Stack, Title } from '@mantine/core';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import { LoaderWithError } from '../../ui/LoaderWithError';
import { CustomPagination } from '../../export-ui/CustomPagination';
import { Link } from 'react-router-dom';
import { CommentsBlock } from '../../ui/CommentsBlock';

const CommentsList = () => {
    const { comments, isLoading, error } = useComments();
    const [activePage, setActivePage] = useState(1);

    const start = (activePage - 1) * ITEMS_PER_PAGE;
    const paginatedComment = comments.slice(start, start + ITEMS_PER_PAGE);

    return <Stack gap={10}>
        <Flex align={'center'} gap={10}>
            <Button component={Link} to='/'>Back</Button>
            <Title>Comments List</Title>
            <Button
                ml={'auto'}
                leftSection={<HiMiniPlusCircle
                    size={25} />}
            >
                Create
            </Button>
        </Flex>
        <LoaderWithError isLoading={isLoading} error={error}>
            {
                paginatedComment.map(comment => (
                    <CommentsBlock
                        key={comment.id}
                        body={comment.body}
                        postId={comment.postId}
                        likes={comment.likes}
                    />
                ))
            }
            <CustomPagination total={Math.ceil(comments.length / ITEMS_PER_PAGE)}
                value={activePage} onChange={setActivePage} />
        </LoaderWithError>
    </Stack>
}

export default CommentsList