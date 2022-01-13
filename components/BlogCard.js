import Image from "next/image";
import Link from "next/link";

function BlogCard(props) {
  const { id, image, title, summary } = props.post;
  return (
    <div className="card h-100">
      <div className="card-img-top">
        {image && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            layout="responsive"
          />
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{summary}</p>
        <div>
          <Link href={`/${id}`}>Read More...</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
