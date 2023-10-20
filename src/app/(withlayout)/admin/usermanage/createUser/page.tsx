import CreateUserPage from "@/components/UserManage/CreateUser";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create User",
};
const CreateUser = () => {
  return (
    <div>
      <CreateUserPage />
    </div>
  );
};

export default CreateUser;
