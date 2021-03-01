import Next from "next"
import Link from "next/link";

export default function Button({ text, route }) {
  return (
    <Link href={route}>
      <a className="p-6 mt-10 text-center border w-96 rounded-xl hover:text-white focus:text-gray-600 shadow-2xl hover:bg-gray-600">
        {text}
      </a>
    </Link>
  );
}
