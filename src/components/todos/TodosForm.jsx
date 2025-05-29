import { Button, Checkbox, Flex, Stack, Textarea } from '@mantine/core'
import SelectUserId from '../../export-ui/SelectUserId'
import { modals } from '@mantine/modals'
import { isNotEmpty, useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'

const INITIAL_VALUE = {
  todo: '',
  userId: null,
  completed: false
};

const TodosForm = ({ title, editTodoFn, initialValues = INITIAL_VALUE }) => {

  const form = useForm({
    initialValues,
    validate: {
      todo: isNotEmpty('Required field'),
      userId: isNotEmpty('Select user'),
    },
  });

  const handleSubmit = async (values) => {
    await editTodoFn(values)
      .then(() => {
        modals.closeAll(),
          notifications.show({
            title: `${title} todo`,
            message: `The todo has been successfully ${title.toLowerCase() === 'add' ? 'created' : 'updated'}.`
          });
      })
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Stack gap={10}>
          <Textarea label='Todo' {...form.getInputProps('todo')} />
          <SelectUserId label='User Id' clearable {...form.getInputProps('userId')} />
          <Checkbox label='Completed' {...form.getInputProps('completed', { type: 'checkbox' })} />
        </Stack>

        <Flex justify={"space-between"} gap={15}>
          <Button onClick={() => modals.closeAll()}> Back</Button>
          <Button type='submit'>{title}</Button>
        </Flex>
      </Stack>
    </form >
  )
}

export default TodosForm;