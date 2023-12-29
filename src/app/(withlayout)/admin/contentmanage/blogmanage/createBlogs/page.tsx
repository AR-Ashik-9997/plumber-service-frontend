import CreateBlogPage from "@/components/BlogManage/CreateBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Blog",
};
const CreateBlogs = () => {
  return (
    <div>
      <CreateBlogPage />
    </div>
  );
};

export default CreateBlogs;
