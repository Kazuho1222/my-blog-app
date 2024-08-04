import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


function BlogCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>おはよう</CardTitle>
          <CardDescription>今日は2024年8月1日です。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
        <Link href="/blog/" className="px-4 py-4 hover:text-blue-500">
          Read More
        </Link>
      </Card>
    </div>
  )
}

export default BlogCard