import React from "react";
import ReactDOM from "react-dom/client";
import {Routes} from './routes'



import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme.js";
import Globalstyles from "./Styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
