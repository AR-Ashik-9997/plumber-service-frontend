import { Metadata } from "next";
import ProfilePage from "@/components/Profile/Profile";

export const metadata: Metadata = {
  title: "Profile Page",
};

const Profile = () => {
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

export default Profile;
