import Head from "next/head";
import Image from "next/image";
import AppHeader from "../components/AppHeader";
import styles from "../styles/Home.module.css";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";
import { server } from "../config";

export default function Home(props) {
  const { posts } = props;
  console.log('posts ', posts)
  return (
    <div>
      <AppHeader></AppHeader>
      <div className="container py-5">
        <h2 className="fs-2">Posts</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
          {posts.map((post) => (
            <div key={post.id} className="col">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/posts`);
  const result = await response.json();

  let posts = [];
  if (result.message === "success") {
    posts = result.posts;
  }

  return {
    props: {
      posts,
    },
  };
};
