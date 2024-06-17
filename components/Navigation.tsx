import Link from "next/link";


export default function Navigation () {
   return (
      <nav className="hidden">
         <Link href={'/'}>Home</Link>
         <Link href={'/'}>New</Link>
         <Link href={'/'}>Popular</Link>
         <Link href={'/'}>Trending</Link>
         <Link href={'/'}>Categories</Link>
      </nav>
   )
}