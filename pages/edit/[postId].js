import { useState, useEffect } from "react";
import PostForm from "../../components/PostForm";
import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../config";

const postItem = {
  id: 1,
  title: "",
  summary: "",
  content: "",
  author: "",
  created_at: new Date(),
  published_at: new Date(),
};

export default function NewPost() {
  const router = useRouter();
  const { postId } = router.query;

  const [post, setPost] = useState(postItem);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`${server}/api/post?id=${postId}`);
      const result = await response.json();
      console.log("result ", result);
      const { message, post } = result;
      if (message === "success") {
        console.log("post ", post);
        setPost(post);
        setLoading(!loading);
      }
    };
    getPost();
  }, []);

  const handleSubmit = () => {
    console.log("submitting post ", post);
  };

  return (
    <div className="container py-5">
      <div>
        <Link href={`/${postId}`}>Back</Link>
      </div>
      <PostForm
        post={post}
        setPost={setPost}
        handleSubmit={handleSubmit}
        action="editPost"
        loading={loading}
      />
    </div>
  );
}
