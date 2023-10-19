import UpdateAllUsers from "@/components/AdminManage/UpdateAllUsers";
import { IDProps } from "@/types/globalTypes";
import React from "react";

const UpdateAllUserForSuperAdmin = ({ params }: IDProps) => {
  return (
    <div>
      <UpdateAllUsers params={params} />
    </div>
  );
};

export default UpdateAllUserForSuperAdmin;
