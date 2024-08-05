import BlogCard from './BlogCard'

function BlogCardList() {
  return (
    <div className='flex grid-cols-3 gap-4 p-4'>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}

export default BlogCardList