import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Link from "next/link"


function BlogCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>おはよう</CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-3">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil aperiam, iure ex repellat odio fugiat, officiis incidunt dolorem at iste nobis maxime ipsum sit reiciendis laudantium alias nemo, modi voluptates.</p>
        </CardContent>
        <CardFooter>
          <Link href="/blog/" className="hover:text-blue-500 pt-4">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BlogCard