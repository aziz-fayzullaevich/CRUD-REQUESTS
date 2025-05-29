import { useForm } from '@mantine/form';

const INITIAL_VALUE = {
    post: '',
    title: '',
    body: '',
};

export const PostForm = ({ title, createPostFn, initialValues = INITIAL_VALUE }) => {

    const form = useForm()

    return (
        <div>PostForm</div>
    )
};