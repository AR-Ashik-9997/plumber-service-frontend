import UpdateUser from "@/components/UserManage/UpdateUser";
import { IDProps } from "@/types/globalTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit User",
};
const EditUser = ({ params }: IDProps) => {
  return (
    <div>
      <UpdateUser params={params} />
    </div>
  );
};

export default EditUser;
