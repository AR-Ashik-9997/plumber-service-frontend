import ServiceDetailsePage from "@/components/Services/ServiceDetailsePage";
import { IDProps } from "@/types/globalTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Detailse",
};
const ServiceDetailse = ({params}:IDProps) => {
  return (
    <div>
      <ServiceDetailsePage params={params} />
    </div>
  );
};

export default ServiceDetailse;
