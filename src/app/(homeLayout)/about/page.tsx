import AboutDetailse from "@/components/AboutCompany/AboutDetailse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};
const AboutUs = () => {
  return (
    <div>
      <AboutDetailse />
    </div>
  );
};

export default AboutUs;
