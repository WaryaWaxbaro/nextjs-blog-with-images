import React from "react";
import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="container py-5">
      <div className="w-100 p-2 p-md-4 bg-light rounded-3">
        <div style={{ maxWidth: "420px" }}>
          <h1 className="fs-1">Nextjs Blog Tutorial</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum
            lacus ut mauris tempus ullamcorper. Proin bibendum mi hendrerit
            ligula gravida dictum. Mauris eu ligula sed nulla sodales faucibus
            eget vel nulla. Donec maximus risus sed iaculis feugiat. Quisque
            arcu tortor, tristique nec molestie commodo
          </p>
          <div className="link-btn mt-4">
            <Link href="/new-post">New Post</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
