import { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML, convertFromHTML } from "draft-convert";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function PostForm(props) {
  const { post, setPost, handleSubmit, action } = props;
  const { title, summary } = post;

  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty();
  });

  useEffect(() => {
    if (action === "editPost") {
      let editorState = EditorState.createWithContent(
        convertFromHTML(post.content)
      );
      setEditorState(editorState);
    }
  }, [action]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const onEditorStateChange = async (editorState) => {
    await setEditorState(editorState);
    setPost({
      ...post,
      content: convertToHTML(editorState.getCurrentContent()),
    });
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
      <div className="mb-3">
        <label className="form-label">Content</label>
        <Editor
          editorState={editorState}
          wrapperClassName="wyiwyc-wrapper"
          editorClassName="wyiwyc-editor"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div className="d-grid">
        <button
          onClick={() => handleSubmit()}
          className="btn btn-primary rounded-0"
        >
          {action === "newPost" ? "Save" : "Update"}
        </button>
      </div>
    </div>
  );
}
