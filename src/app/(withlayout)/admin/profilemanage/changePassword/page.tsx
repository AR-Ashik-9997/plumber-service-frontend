import ChangePassword from "@/components/Profile/ChangePassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changes Password",
};

const ChangesPassword = () => {
  return (
    <div>
      <ChangePassword />
    </div>
  );
};
export default ChangesPassword;
