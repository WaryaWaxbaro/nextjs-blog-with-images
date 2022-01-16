import Link from "next/link";
import { server } from "../config";
import prisma from "../lib/prisma";
import { useRouter } from "next/router";

function BlogItem(props) {
  const router = useRouter();

  const post = JSON.parse(props.post);

  const handleDelete = async () => {
    const response = await fetch(`${server}/api/delete?id=${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log("result ", result);
    const { message, post: newPost } = result;
    if (message === "success") {
      router.replace(`/`);
    }
  };
  return (
    <div className="container">
      <div className="mx-auto" style={{ maxWidth: "720px" }}>
        <header className="container py-5">
          <div className="w-100 p-2 p-md-4 bg-light rounded-3">
            <div style={{ maxWidth: "420px" }}>
              <h1 className="fs-1">{post.title}</h1>
              <p>{post.summary}</p>
              <div className="d-flex mt-4">
                <div className="link-btn me-3">
                  <Link href={`/edit/${post.id}`}>Edit</Link>
                </div>
                <div style={{ marginTop: "-6px" }}>
                  <button
                    onClick={handleDelete}
                    className="btn btn-outline-danger rounded-0 px-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div>
          <h6>Published: {post.created_at}</h6>
          <h6>Author: {post.author}</h6>
          <div className="py-4"></div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;

export const getStaticPaths = async () => {
  let posts = await prisma.post.findMany();
  return {
    paths: posts.map((post) => ({
      params: {
        postId: `${post.id}`,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  let id = params.postId;
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  return {
    props: {
      post: JSON.stringify(post),
    },
    //revalidate: 10, // In seconds
  };
};
