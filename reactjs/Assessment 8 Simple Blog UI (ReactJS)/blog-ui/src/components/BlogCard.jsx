const BlogCard = ({ blog, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick}>
      <h3>{blog.title}</h3>
      <p>{blog.summary}</p>
    </div>
  );
};

export default BlogCard;