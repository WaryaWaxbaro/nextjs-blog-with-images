import { useState, useEffect } from "react";

import PostForm from "../components/PostForm";

export default function NewPost() {
  const [post, setPost] = useState({
    title: "",
    summary: "",
    content:
      "<h1>Lorem ipsum dolor sit amet,</h1><p>  consectetur adipiscing elit. Cras dictum lacus ut mauris tempus  ullamcorper.</p><p>  Proin bibendum mi hendrerit ligula gravida dictum. Mauris eu ligula sed  nulla sodales faucibus eget vel nulla. Donec maximus risus sed iaculis  feugiat. Quisque arcu tortor, tristique nec molestie commodo, elementum  sed metus. Suspendisse placerat risus sapien, vitae rhoncus sem dapibus  in. Proin pulvinar est scelerisque justo varius, eu tempor purus  viverra.</p><ul>  <li>    Ut pellentesque scelerisque elit, non porttitor eros pulvinar at. </li>  <li>    Donec viverra est in odio dictum, id tincidunt erat pellentesque.    Nullam  </li>  <li>euismod id tellus nec porttitor. </li>  <li>Nulla rhoncus fermentum quam a finibus.</li>  <li>Praesent porttitor dui facilisis risus feugiat posuere. </li>  <li>In mollis arcu</li>  <li>    et facilisis consectetur. Quisque arcu velit, eleifend ac molestie et,    iaculis sit amet velit. </li>  <li>Vestibulum ante ipsum primis in faucibus orci</li>  <li>    luctus et ultrices posuere cubilia curae; In et erat arcu. Donec    sodales  </li>  <li>    orci sit amet ipsum posuere ornare. Praesent ornare feugiat auctor.  </li></ul><p>  Donec pellentesque, justo et consectetur tincidunt, urna lorem viverra  urna, sit amet dictum erat sapien mattis est. Mauris eu blandit purus,  at congue sem. Duis dignissim nulla a varius efficitur. Etiam mollis  purus a libero imperdiet, sed feugiat magna venenatis.</p><p>  Praesent faucibus malesuada nisi, non ultrices nulla aliquam vitae.  Vivamus ornare vitae risus eget luctus. Duis viverra dignissim dapibus.</p>",
    author: "",
    created_at: new Date(),
    published_at: new Date(),
  });

  const handleSubmit = () => {
    console.log("submitting post ", post);
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
