import Link from "next/link";
export default function Home() {
  return (
    <div className="">
    <h1>learning next js</h1>
    <Link className="ml-2" href="/about">about</Link>
    <Link className="ml-2" href="/blog">blog</Link>
    <Link className="ml-2" href="/contact">contact</Link>
    <Link className="ml-2" href="/profile">profile</Link>
    <Link className="ml-2" href="/products">products</Link>
    <Link className="ml-2" href="/user">user</Link>
    <Link className="ml-2" href="/address/city">address</Link>
    </div>
  );
}
