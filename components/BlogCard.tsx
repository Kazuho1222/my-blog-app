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
      <Link href="/blog/">
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
        </Card>
      </Link>
    </div>
  )
}

export default BlogCard