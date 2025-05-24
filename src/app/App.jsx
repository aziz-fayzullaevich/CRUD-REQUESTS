import React from 'react'
import { RouterProvider } from 'react-router';
import { router } from '../router/router';
import '../app/index.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme/theme';
import '@mantine/core/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <RouterProvider router={router} />
      </ModalsProvider>
      <Notifications autoClose={1500} />
    </MantineProvider>
  )
}

export default App;