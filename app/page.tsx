import BlogCardList from "@/components/BlogCardList";
import { BlogData } from "@/types/types";

async function getBlogAllData() {
  const response = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  })

  const blogAllData: BlogData[] = await response.json()

  return blogAllData
}

export default async function Home() {
  const blogAllData = await getBlogAllData()

  return (
    <div>
      <div>
        <BlogCardList blogAllData={blogAllData} />
      </div>
    </div>
  );
}
