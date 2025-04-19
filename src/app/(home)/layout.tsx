import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
