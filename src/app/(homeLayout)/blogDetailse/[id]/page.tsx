import BlogeDetailse from "@/components/Blog/BlogeDetailse";
import { IDProps } from "@/types/globalTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Detailse",
};
const BlogDetailsePage = ({ params }: IDProps) => {
  return (
    <div>
      <BlogeDetailse params={params} />
    </div>
  );
};

export default BlogDetailsePage;
