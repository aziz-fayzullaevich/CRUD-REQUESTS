import { Flex, Pagination } from '@mantine/core';

export const CustomPagination = ({ total, value, onChange }) => {
    return (
        <Flex justify='center' mt='md'>
            <Pagination
                total={total}
                value={value}
                onChange={onChange}
                mt="md"
                radius="md"
                size="md"
                withEdges
            />
        </Flex>
    );
};