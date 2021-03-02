import Next from "next";
import Link from "next/link";

export default function Button({ text, route }) {
  return (
    <mybutton>
      <Link href={route}>
        <a>{text}</a>
      </Link>
    </mybutton>
  );
}
