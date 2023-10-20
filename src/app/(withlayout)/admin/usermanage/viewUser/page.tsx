import AllUsers from "@/components/UserManage/AllUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View User",
};
const ViewUsers = () => {
  return (
    <div>
      <AllUsers />
    </div>
  );
};

export default ViewUsers;
