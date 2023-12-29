import UpdateFaqs from "@/components/ContentManage/UpdateFaq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Faqs",
};
const FaqsEdit = () => {
  return (
    <div>
      <UpdateFaqs />
    </div>
  );
};

export default FaqsEdit;
