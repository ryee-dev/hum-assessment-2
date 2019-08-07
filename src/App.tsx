import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import './App.css';
import Form from './components/Form';

const App = () => {
  return (
    <AppShell>
      <h1>test</h1>
      <Form />
    </AppShell>
  );
};

export default App;

const AppShell = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
`;
