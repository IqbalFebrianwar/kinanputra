import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero"))
const Whysection = dynamic(() => import("@/components/whysection"))
const Serving = dynamic(() => import("@/components/serving"))
const Galery = dynamic(() => import("@/components/galery"))
const Contact = dynamic(() => import("@/components/contact"))
const Footer = dynamic(() => import("@/components/footer"))

export default function Home() {
  return (
    <>
      <div id="s1" className="pt-16"></div>
      <Hero />
      <Whysection />
      <div id="s2"></div>
      <Serving />
      <div id="s3"></div>
      <Galery />
      <div id="s4"></div>
      <Contact />
      <Footer />
    </>
  );
}
