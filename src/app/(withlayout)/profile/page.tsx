import { Metadata } from "next";
import CombinationProfilePage from "./combinationProfile/CombinationProfilePage";

export const metadata: Metadata = {
  title: "Profile Page",
};

const Profile = () => {
  return (
    <div>
      <CombinationProfilePage />
    </div>
  );
};

export default Profile;
