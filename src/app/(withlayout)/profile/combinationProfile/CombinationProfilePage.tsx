"use client";
import CreateProfilePage from "@/components/Profile/CreateProfile";
import { getUserInfo } from "@/services/auth_service";
import { useGetUserQuery } from "@/redux/api/userApi";
import { useEffect, useState } from "react";
import UpdateProfile from "@/components/Profile/UpdateProfile";

const CombinationProfilePage = () => {
  const { userId: id } = getUserInfo() as any;
  const [changeUi, setChangeUi] = useState<boolean>(false);
  const { data } = useGetUserQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });  
  useEffect(() => {
    if (data !== undefined) {
      setChangeUi(true);
    }
  }, [changeUi]);

  return (
    <div>{data !== undefined ?  <UpdateProfile />:<CreateProfilePage />}</div>
  );
};

export default CombinationProfilePage;
