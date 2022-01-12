import Link from "next/link";

const post = {
  id: 6,
  title: "Title 1",
  summary:
    "Donec sodales orci sit amet ipsum posuere ornare. Praesent ornare feugiat auctor. Donec pellentesque",
  image:
    "https://images.unsplash.com/photo-1546118626-be3ce30e2027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  content:
    "<h1>Lorem ipsum dolor sit amet,</h1><p>  consectetur adipiscing elit. Cras dictum lacus ut mauris tempus  ullamcorper.</p><p>  Proin bibendum mi hendrerit ligula gravida dictum. Mauris eu ligula sed  nulla sodales faucibus eget vel nulla. Donec maximus risus sed iaculis  feugiat. Quisque arcu tortor, tristique nec molestie commodo, elementum  sed metus. Suspendisse placerat risus sapien, vitae rhoncus sem dapibus  in. Proin pulvinar est scelerisque justo varius, eu tempor purus  viverra.</p><ul>  <li>    Ut pellentesque scelerisque elit, non porttitor eros pulvinar at.  </li>  <li>    Donec viverra est in odio dictum, id tincidunt erat pellentesque.    Nullam  </li>  <li>euismod id tellus nec porttitor. </li>  <li>Nulla rhoncus fermentum quam a finibus.</li>  <li>Praesent porttitor dui facilisis risus feugiat posuere. </li>  <li>In mollis arcu</li>  <li>    et facilisis consectetur. Quisque arcu velit, eleifend ac molestie et,    iaculis sit amet velit.  </li>  <li>Vestibulum ante ipsum primis in faucibus orci</li>  <li>    luctus et ultrices posuere cubilia curae; In et erat arcu. Donec    sodales  </li>  <li>    orci sit amet ipsum posuere ornare. Praesent ornare feugiat auctor.  </li></ul><p>  Donec pellentesque, justo et consectetur tincidunt, urna lorem viverra  urna, sit amet dictum erat sapien mattis est. Mauris eu blandit purus,  at congue sem. Duis dignissim nulla a varius efficitur. Etiam mollis  purus a libero imperdiet, sed feugiat magna venenatis.</p><p>  Praesent faucibus malesuada nisi, non ultrices nulla aliquam vitae.  Vivamus ornare vitae risus eget luctus. Duis viverra dignissim dapibus.</p>",
};

function BlogItem(props) {
  return (
    <div className="container">
      <div className="mx-auto" style={{ maxWidth: "720px" }}>
        <header className="container py-5">
          <div className="w-100 p-2 p-md-4 bg-light rounded-3">
            <div style={{ maxWidth: "420px" }}>
              <h1 className="fs-1">{post.title}</h1>
              <p>{post.summary}</p>
              <div className="link-btn mt-4">
                <Link href="/new-post">Edit</Link>
              </div>
            </div>
          </div>
        </header>
        <div>
          <h6>Published: 12.1.2022</h6>
          <h6>Author: Ali Isse</h6>
          <div className="py-4"></div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
