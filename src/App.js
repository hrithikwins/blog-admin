import React from 'react';

import NavbarComponent from './components/NavbarComponent';
import Container from '@material-ui/core/Container';
import BlogContextProvider from './contexts/BlogContext';
import TodoListComponent from './components/BlogListComponent';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth="md">
      <BlogContextProvider>
        <NavbarComponent></NavbarComponent>
        <TodoListComponent></TodoListComponent>
      </BlogContextProvider>
    </Container>
    </MuiThemeProvider>
    
  );
}

export default App;

