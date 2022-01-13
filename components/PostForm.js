export default function PostForm(props) {
  const { post, setPost, handleSubmit } = props;
  const { title, summary } = post;

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "680px", minHeight: "70vh" }}>
      <div className="mb-3">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          className="form-control"
          name="summary"
          rows={5}
          value={summary}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="d-grid">
        <button
          onClick={() => handleSubmit()}
          className="btn btn-primary rounded-0"
        >
          Save
        </button>
      </div>
    </div>
  );
}
