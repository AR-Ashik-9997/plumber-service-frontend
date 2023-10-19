import AllServices from "@/components/Services/AllServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services",
};
const Services = () => {
  return (
    <div>
      <AllServices />
    </div>
  );
};

export default Services;
