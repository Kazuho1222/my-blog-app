import BlogCard from './BlogCard'
import { BlogData } from '@/types/types'

interface blogAllDataProps {
  blogAllData: BlogData[]
}

const BlogCardList = ({ blogAllData }: blogAllDataProps) => {
  return (
    <div className='flex grid-cols-3 gap-4 p-4'>
      {blogAllData.map((blogData: BlogData) => (
        <BlogCard key={blogData.id} blogData={blogData} />
      ))}
    </div>
  )
}

export default BlogCardList