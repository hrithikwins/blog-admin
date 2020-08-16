import React from 'react';

import NavbarComponent from './components/NavbarComponent';
import Container from '@material-ui/core/Container';
import BlogContextProvider from './contexts/BlogContext';
import TodoListComponent from './components/TodoListComponent';

function App() {
  return (
    <Container maxWidth="md">
      <BlogContextProvider>
        <NavbarComponent></NavbarComponent>
        <TodoListComponent></TodoListComponent>
      </BlogContextProvider>
    </Container>
  );
}

export default App;