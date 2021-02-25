import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Pond() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm Lord Poopenfall! I love eating toutons - especially with some
          delicious molasses!
        </p>
      </section>
    </Layout>
  );
}
