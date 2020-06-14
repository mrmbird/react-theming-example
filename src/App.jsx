import React, { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { HomePage } from "./pages/HomePage";
import themes from "./styles/appTheme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { useThemeToggle } from "./hooks/useThemeToggle";

export default function App() {
  const theme = useThemeToggle();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
