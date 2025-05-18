"use client";

import Header from "src/components/layout/Header";
import Footer from "src/components/layout/Footer";
import type { ReactNode } from "react";

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
