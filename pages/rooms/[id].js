import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import Controls from "../../components/cards/controls";

export default function Room() {
  return (
    <Layout room>
      <h1>
        <Image src="/images/ace.jpg" width="50" height="50"></Image>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
        <Image src="/images/ace.jpg" width="50" height="50"></Image>
      </h1>{" "}
      <br />
      <br />
      <div>Room Number: 001</div>
      <br />
      <Controls></Controls>
    </Layout>
  );
}
