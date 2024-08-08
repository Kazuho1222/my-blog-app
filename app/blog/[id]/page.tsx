import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogData } from "@/types/types";

async function getDetailBlogData(id: number) {
  const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog detail data");
  }

  const blogDetailData: BlogData = await response.json();

  return blogDetailData;
}

const BlogDetailPage = async ({ params }: { params: { id: string } }) => {
  const blogId = parseInt(params.id)
  if (isNaN(blogId)) {
    return <div>Invalid blog ID</div>
  }

  try {
    const blogDetailData = await getDetailBlogData(blogId);
    const { title, content, createdAt } = blogDetailData;
    const formattedDate = new Date(createdAt).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className="container p-4 w-fit">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            {content}
          </CardContent>
          <CardFooter className="flex justify-end pt-4 text-sm">
            {formattedDate}
          </CardFooter>
        </Card>
      </div>
    );
  } catch (error) {
    console.error(error)
    return <div>Failed to load blog details</div>
  }
}


export default BlogDetailPage;
