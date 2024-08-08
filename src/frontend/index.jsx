import React from 'react';
import ForgeReconciler, { Text, Stack, Button } from '@forge/react';

const App = () => {
  return (
    <Stack>
      <Text>Simple button counter</Text>
      <Button>Click Me</Button>
    </Stack>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
