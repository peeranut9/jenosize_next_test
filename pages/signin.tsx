import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field, FormikProps } from "formik";
import { useAppDispatch } from "@/store/store";
import {
  errorMessgeSelector,
  signInWithEmail,
  signInWithFacebook,
  signInWithGoogle,
} from "@/store/slices/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import pageAuth from "@/components/pageAuth";
import { Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Facebook from "@mui/icons-material/Facebook";
import CircularProgress from "@mui/material/CircularProgress";

const Signin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const errorMessage = useSelector(errorMessgeSelector);
  const [signIn, setSignIn] = useState<boolean>(false);
  const [signInGoogle, setSignInGoogle] = useState<boolean>(false);
  const [signInFacebook, setSignInFacebook] = useState<boolean>(false);

  const showForm = ({ handleSubmit }: FormikProps<any>) => {
    return (
      <Form onSubmit={signIn ? () => {} : handleSubmit}>
        <Field
          component={TextField}
          name="email"
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          autoComplete="email"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          size="large"
          fullWidth
          variant="contained"
          color="primary"
        >
          {signIn ? (
            <CircularProgress color="secondary" size={26}></CircularProgress>
          ) : (
            "sign in / sign up"
          )}
        </Button>
      </Form>
    );
  };

  return (
    <Box
      bgcolor="background.default"
      className="h-screen flex justify-center items-center"
    >
      <Card sx={{ maxWidth: 345 }}>
        <Box
          className="text-center mt-3 font-bold text-3xl"
          color="primary.main"
        >
          Jenosize Test
        </Box>
        <CardContent>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              setSignIn(true);
              const response = await dispatch(signInWithEmail(values));
              setSignIn(false);
              if (response.meta.requestStatus !== "rejected") {
                router.push("/");
              }
            }}
          >
            {(props) => showForm(props)}
          </Formik>
          <Box className="mt-3 text-center text-sm" color="secondary.main">
            OR
          </Box>
          <Box className="mt-3">
            <Button
              size="large"
              onClick={
                signInGoogle
                  ? undefined
                  : async () => {
                      setSignInGoogle(true);
                      const response = await dispatch(signInWithGoogle());
                      setSignInGoogle(false);
                      if (response.meta.requestStatus !== "rejected") {
                        router.push("/");
                      }
                    }
              }
              className="text-center"
              fullWidth
              sx={{ boxShadow: 1 }}
            >
              {signInGoogle ? (
                <CircularProgress
                  color="secondary"
                  size={26}
                ></CircularProgress>
              ) : (
                <>
                  <GoogleIcon sx={{ color: "primary" }}></GoogleIcon>
                  <Box className="w-full text-sm font-semibold" color="black">
                    continue with google
                  </Box>
                  <Box width={24}></Box>
                </>
              )}
            </Button>
          </Box>
          <Box className="mt-3">
            <Button
              size="large"
              onClick={
                signInFacebook
                  ? undefined
                  : async () => {
                      setSignInFacebook(true);
                      const response = await dispatch(signInWithFacebook());
                      setSignInFacebook(false);
                      if (response.meta.requestStatus !== "rejected") {
                        router.push("/");
                      }
                    }
              }
              className="text-center"
              fullWidth
              sx={{ boxShadow: 1 }}
            >
              {signInFacebook ? (
                <CircularProgress
                  color="secondary"
                  size={26}
                ></CircularProgress>
              ) : (
                <>
                  <Facebook sx={{ color: "primary" }}></Facebook>
                  <Box className="w-full text-sm font-semibold" color="black">
                    continue with facebook
                  </Box>
                  <Box width={24}></Box>
                </>
              )}
            </Button>
          </Box>
          {errorMessage && (
            <Box className="mt-3 text-center" sx={{ color: "red" }}>
              {errorMessage || "Signin failed."}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default pageAuth(Signin);
