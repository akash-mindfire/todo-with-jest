import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "../store";

const theme = createTheme();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
