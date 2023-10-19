import UpdateService from "@/components/ServiceManage/UpdateService";
import { IDProps } from "@/types/globalTypes";
import React from "react";

const EditService = ({ params }: IDProps) => {
  return (
    <div>
      <UpdateService params={params} />
    </div>
  );
};

export default EditService;
