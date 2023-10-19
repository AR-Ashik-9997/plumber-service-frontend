import ContactPage from "@/components/Contacts.tsx/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
};
const ContactUs = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default ContactUs;
