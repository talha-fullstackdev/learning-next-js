"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathName = usePathname()
  const linkStyles =
    "ml-2 text-blue-400 hover:underline hover:underline-offset-4";
  const linksData = [
    {
      name: "about",
      href: "/about",
    },
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: "contact",
      href: "/contact",
    },
    {
      name: "profile",
      href: "/profile",
    },
    {
      name: "products",
      href: "/products",
    },
    {
      name: "user",
      href: "/user",
    },
    {
      name: "address",
      href: "/address/city",
    },
  ];
  return (
    <>
      {/* <h1>learning next js</h1> */}
        {/* {linksData.map((link)=>{
          const isActive = pathName.startsWith(link.href)
          return(
            <Link className={`${isActive?"text-red-500":"text-blue-400"}`} key={link.name} href={link.href}>{link.name}</Link>
          )
        })} */}
        <h1>react v-19</h1>
    </>
  );
}
