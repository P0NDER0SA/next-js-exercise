import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { useRouter } from "next/router";

export default function() {
  const router = useRouter();

  const startRoom = async (event) => {
    router.push(`/rooms/${event.target.roomid.value}`);
  };

  return (
    <Layout join>
      <h1>
        <Image src="/images/ace.jpg" width="50" height="50"></Image>
        <Link href="/">
          <a className="">{siteTitle}</a>
        </Link>
        <Image src="/images/ace.jpg" width="50" height="50"></Image>
      </h1>{" "}
      <br />
      <form onSubmit={startRoom}>
        <label
          htmlFor="roomid"
        >
          Enter room Number:
        </label>
        <input
          autoFocus
          id="roomid"
          name="roomid"
          type="text"
          autoComplete="roomid"
          required
        />
        <mybutton>
          <button>
            Join Room
          </button>
        </mybutton>
      </form>
    </Layout>
  );
}
