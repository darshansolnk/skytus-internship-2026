import BlogCard from "./BlogCard";

const BlogList = ({ blogs, onSelect }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelect(blog)}
        />
      ))}
    </div>
  );
};

export default BlogList;