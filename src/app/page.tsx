"use client";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import AboutService from "@/components/AboutService/AboutService";
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";
import MainNavbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import TeamMember from "@/components/TeamMember/TeamMember";
import Testimonial from "@/components/Testimonial/Testimonial";
import Topbanner from "@/components/Topbanner/Topbanner";
import Loader from "@/components/common/Loader";
import { useEffect, useState } from "react";

export default function Home() {
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
            <Topbanner />
            <AboutCompany />
            <Services />
            <AboutService />
            <TeamMember />
            <Testimonial />
            <Blog />
            <Footer />
          </main>
        </>
      )}
    </section>
  );
}
