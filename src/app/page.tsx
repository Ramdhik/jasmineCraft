import Marquee from "@/components/marquee/page";
import About from "../components/about/page";
import Collection from "../components/collection/page";
import Hero from "../components/hero/page";
import Testimoni from "@/components/testimoni/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Collection />
    <Testimoni />
    <Footer />
    </>
  )
}
