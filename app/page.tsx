import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <ul>
        <li>
          <Link href="/counter">Implement Counter with Redux</Link>
        </li>
        <li>
          <Link href="/shop">Implement Cart Functionality with Redux</Link>
        </li>
        <li>
          <Link href="/form">Implement Multi step form with Redux</Link>
        </li>
      </ul>
   
       
    </main>
  );
}
