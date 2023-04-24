import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="content-body">{children}</main>
      <Footer />
    </>
  );
}
