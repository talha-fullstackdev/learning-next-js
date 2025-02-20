import Link from "next/link";
export default function Home() {
  const linkStyles = "ml-2 text-blue-400 hover:underline hover:underline-offset-4"
  return (
    <div className="">
    <h1>learning next js</h1>
    <Link className={linkStyles} href="/about">about</Link>
    <Link className={linkStyles} href="/blog">blog</Link>
    <Link className={linkStyles} href="/contact">contact</Link>
    <Link className={linkStyles} href="/profile">profile</Link>
    <Link className={linkStyles} href="/products">products</Link>
    <Link className={linkStyles} href="/user">user</Link>
    <Link className={linkStyles} href="/address/city">address</Link>
    </div>
  );
}
