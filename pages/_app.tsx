import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createTheme, ThemeProvider } from "@mui/material";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "@/utils/firebaseConfig";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "@/store/slices/userSlice";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 976,
        xl: 1440,
      },
    },
    spacing: 8,
    palette: {
      primary: {
        main: "#325EFF",
      },
      secondary: {
        light: "#ffffff",
        main: "#b4b4b4",
      },
      background: {
        default: "#f1f1f1",
        paper: "#ffffff",
      },
    },
  });

  useEffect(() => {
    store.dispatch(getUserData());
  }, []);

  return (
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </FirebaseAppProvider>
    </Provider>
  );
}
