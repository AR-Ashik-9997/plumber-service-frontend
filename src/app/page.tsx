"use client";
import MainNavbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Topbanner from "@/components/Topbanner/Topbanner";

export default function Home() {
  return (
    <section>
      <MainNavbar />
      <main className="min-h-screen top-4">
        <Topbanner />
        <Services/>
        <Testimonial/>
      </main>
    </section>
  );
}
