import { Button, Flex, Stack, Title, Table as TableM, Checkbox, ActionIcon } from '@mantine/core';
import { Table } from '../../ui/Table';
import { useTodosList } from '../../hooks/useTodosList';
import { HiMiniPlusCircle, HiMiniPencilSquare, HiArchiveBox } from "react-icons/hi2";
import { modals } from '@mantine/modals';
import { CreateTodos } from './CreateTodos';
import { DeleteTodos } from './DeleteTodos';
import EditTodo from './EditTodo';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ITEMS_PER_PAGE } from '../../constans/itemsPerPage';
import { CustomPagination } from '../../export-ui/CustomPagination';

const TodosList = () => {
    const { todos } = useTodosList();
    const [activePage, setActivePage] = useState(1);
    const createTodo = () => {
        modals.open({
            children: <CreateTodos />,
            title: 'Create Todo',

        })
    };

    const deleteTodo = id => {
        modals.open({
            children: <DeleteTodos id={id} />,
            title: 'Delete',

        })
    };

    const editTodo = id => {
        modals.open({
            children: <EditTodo id={id} />,
            title: 'Edit',

        })
    };

    const start = (activePage - 1) * ITEMS_PER_PAGE;
    const paginatedTodo = todos.slice(start, start + ITEMS_PER_PAGE);

    const rows = paginatedTodo.map((todo) => (
        <TableM.Tr key={todo.id}>
            <TableM.Td>{todo.id}</TableM.Td>
            <TableM.Td>{todo.userId}</TableM.Td>
            <TableM.Td>{todo.todo}</TableM.Td>
            <TableM.Td>
                <Checkbox checked={todo.completed} readOnly size='25' />
            </TableM.Td>
            <TableM.Td>
                <Flex gap={10}>
                    <ActionIcon onClick={() => editTodo(todo.id)} >
                        <HiMiniPencilSquare size={25} />
                    </ActionIcon>
                    <ActionIcon onClick={() => deleteTodo(todo.id)}>
                        <HiArchiveBox size={25} />
                    </ActionIcon>
                </Flex>
            </TableM.Td>
        </TableM.Tr >
    ));

    return (
        <Stack gap={10}>
            <Flex align={'center'} gap={10}>
                <Button component={Link} to='/'>Back</Button>
                <Title>Todos List</Title>
                <Button
                    ml={'auto'}
                    leftSection={<HiMiniPlusCircle
                        size={25} />}
                    onClick={createTodo}
                >
                    Create
                </Button>
            </Flex>

            <Table thead={['ID', 'User Id', 'Todo', 'Completed']} rows={rows} />
            <CustomPagination total={Math.ceil(todos.length / ITEMS_PER_PAGE)}
                value={activePage} onChange={setActivePage} />
        </Stack>
    )
}

export default TodosList;