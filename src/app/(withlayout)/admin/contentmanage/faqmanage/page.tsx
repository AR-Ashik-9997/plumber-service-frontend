import { Metadata } from "next";
import Combination from "./combination/Combination";

export const metadata: Metadata = {
  title: "FAQS Page",
};

const Faq = () => {
  return (
    <div>
      <Combination />
    </div>
  );
};

export default Faq;
