import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Head>
        <title>JENOSIZE TEST</title>
      </Head>
      <main className="content-body">{children}</main>
    </>
  );
}
