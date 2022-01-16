import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PostForm from "../components/PostForm";
import { server } from "../config";

const currentUser = "Ali Isse";
const category = {
  name: "Vue",
};

export default function NewPost() {
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
    author: currentUser,
    created_at: new Date(),
    updated_at: new Date(),
    published: false,
    image:
      "https://images.unsplash.com/photo-1561121712-9700339c578c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  });

  const handleSubmit = async () => {
    const response = await fetch(`${server}/api/create`, {
      method: "POST",
      body: JSON.stringify({ post, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log("result ", result);
    const { message, post: newPost } = result;
    if (message === "success") {
      router.replace(`/${newPost.id}`);
    }
  };

  return (
    <div className="container py-5">
      <PostForm
        post={post}
        setPost={setPost}
        handleSubmit={handleSubmit}
        action="newPost"
      />
    </div>
  );
}
