import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import TopHeader from "@/components/common/TopHeader";

export const metadata: Metadata = {
  title: "LOLO",
  description:
    "Connecting families with trusted assisted living facilities nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopHeader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
