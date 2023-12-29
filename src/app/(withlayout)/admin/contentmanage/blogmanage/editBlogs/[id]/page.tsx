import EditBlogs from "@/components/BlogManage/EditBlogs";
import { IDProps } from "@/types/globalTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog",
};
const BlogEdit = ({ params }: IDProps) => {
  return (
    <div>
      <EditBlogs params={params} />
    </div>
  );
};

export default BlogEdit;
