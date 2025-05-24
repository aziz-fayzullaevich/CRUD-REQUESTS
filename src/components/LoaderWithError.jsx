import { Center, Loader, Alert } from '@mantine/core';

export const LoaderWithError = ({ isLoading, error, children }) => {
  if (isLoading) {
    return (
      <Center mt={20}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert color="red" title="Ошибка">
        {error}
      </Alert>
    );
  }

  return children;
};