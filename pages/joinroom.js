import Next from "next";
import TextBox from "next";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Button from "../components/controls/button";

export default function JoinRoom() {
  return (
    <Layout join>
      <h1 className="text-6xl font-bold p-3 border w-200 rounded-xl">
        <Image src="/images/ace.jpg" width="50" height="50"></Image>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
        <Image src="/images/ace.jpg" width="50" height="50"></Image>
      </h1>{" "}
      <br />
      <form>
        <label className="p-6 mt-10 text-center border w-96 rounded-xl" htmlFor="roomid">Enter room Number</label>
        <input
          autoFocus="true"
          className="p-6 mt-10 text-center border w-96 rounded-xl hover:text-white focus:bg-gray-300"
          id="roomid"
          name="roomid"
          type="text"
          autoComplete="roomid"
          required
        />
        {/* <button type="submit">Register</button> */}
        <Button text="Enter Room" route="/rooms/001"></Button>
      </form>
    </Layout>
  );
}
