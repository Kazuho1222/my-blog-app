import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { BlogData } from "@/types/types"
import Link from "next/link"

interface BlogDataProps {
  blogData: BlogData
}

const BlogCard = ({ blogData }: BlogDataProps) => {
  const { id, title, content, createdAt } = blogData
  const formattedData = new Date(createdAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Link href={`/blog/${id}`} className="hover:shadow-lg rounded-md duration-300 hover:divide-slate-500">

      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-3">
          {content}
        </CardContent>
        <CardFooter className="flex justify-end pt-4 text-sm">
          {formattedData}
        </CardFooter>
      </Card>
    </Link>
  )
}

export default BlogCard