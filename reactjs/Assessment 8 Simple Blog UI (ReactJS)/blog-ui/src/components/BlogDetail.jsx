const BlogDetail = ({ blog, onBack }) => {
  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>

      <button className="back-btn" onClick={onBack}>
        Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetail;