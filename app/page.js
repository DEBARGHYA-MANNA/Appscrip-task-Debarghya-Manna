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
