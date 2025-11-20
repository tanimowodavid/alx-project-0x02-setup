import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-8 bg-orange-300 text-blue-500 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Pepeyoyo</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href={"/"} className="hover:underline">
              Index
            </Link>
          </li>
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href={"/posts"} className="hover:underline">
              Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
