import { useEffect } from "react";
import "../styles/globals.css";
import "../sass/main.scss";
import Layout from "../layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
