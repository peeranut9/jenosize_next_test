import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import { AppBar } from "@mui/material";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Head>
        <title>JENOSIZE TEST</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <AppBar />
      <main className="content-body">{children}</main>
    </>
  );
}
