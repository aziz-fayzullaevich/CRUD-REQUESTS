import { Button, Flex, Stack, Textarea } from '@mantine/core';
import SelectUserId from '../../export-ui/SelectUserId';
import { modals } from '@mantine/modals';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

const INITIAL_VALUE = {
    body: '',
    postId: null,
    userId: null,
};

const CommentsForm = ({ title, onSubmitFn, initialValues = INITIAL_VALUE }) => {
    const form = useForm({
        initialValues,
        validate: {
            body: isNotEmpty('Required field'),
            postId: isNotEmpty('Select post'),
            userId: isNotEmpty('Select user'),
        },
    });

    const handleSubmit = async (values) => {
        try {
            await onSubmitFn({
                ...values,
                postId: Number(values.postId),
                userId: Number(values.userId),
            });

            modals.closeAll();

            notifications.show({
                title: `${title} comment`,
                message: `The comment has been successfully ${title.toLowerCase() === 'add' ? 'created' : 'updated'}.`,
            });
        } catch (error) {
            notifications.show({
                title: 'Error',
                message: 'Something went wrong while submitting the comment.',
                color: 'red'
            });
        }
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <Stack gap={10}>
                    <Textarea label="Comment" {...form.getInputProps('body')} />
                    <SelectUserId label="Post ID" clearable {...form.getInputProps('postId')} />
                    <SelectUserId label="User ID" clearable {...form.getInputProps('userId')} />
                </Stack>

                <Flex justify="space-between" gap={15}>
                    <Button onClick={() => modals.closeAll()}>
                        Back
                    </Button>
                    <Button type="submit">{title}</Button>
                </Flex>
            </Stack>
        </form>
    );
};

export default CommentsForm;