import { Button, Flex, Stack, Textarea } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import SelectUserId from '../../export-ui/SelectUserId';

const INITIAL_VALUE = {
    userId: null,
    title: '',
    body: '',
};

export const PostForm = ({ title, editPostFn, initialValues = INITIAL_VALUE }) => {

    const form = useForm({
        initialValues,
        validate: {
            userId: isNotEmpty('Required field'),
            title: isNotEmpty('Required filed'),
            body: isNotEmpty('Required filed'),
        }
    });

    const handleSubmit = async (values) => {
        await editPostFn(values)
            .then(() => {
                modals.closeAll(),
                    notifications.show({
                        title: `${title} post`,
                        message: `The todo has been successfully ${title.toLowerCase() === 'add' ? 'created' : 'updated'}.`
                    })
            })
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <Stack gap={10}>
                    <SelectUserId label='User Id' clearable {...form.getInputProps('userId')} />
                    <Textarea label='Post title' {...form.getInputProps('title')} />
                    <Textarea label='Post body' {...form.getInputProps('body')} />
                </Stack>

                <Flex justify={"space-between"} gap={15}>
                    <Button onClick={() => modals.closeAll()}> Back</Button>
                    <Button type='submit'>{title}</Button>
                </Flex>
            </Stack>
        </form>
    )
};