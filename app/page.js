import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "./footer/page";
import Navbar from "./nav/page";
import Products from "./products/page";



export default function Home() {
  return (
    <main>
      <Navbar/>
      <Products/>
      <Footer/>
    </main>
  );
}
