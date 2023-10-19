"use client";
import Footer from "@/components/Footer/Footer";
import MainNavbar from "@/components/Navbar/Navbar";
import Loader from "@/components/common/Loader";
import { useEffect, useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainNavbar />
          <main className="min-h-screen top-4">
            {children} <Footer />
          </main>
        </>
      )}
    </section>
  );
};

export default HomeLayout;
