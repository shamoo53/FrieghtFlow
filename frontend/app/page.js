
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import Partners from "../components/Partners"
import HomepageHero from "@/components/HomepageHero";
import HomepageHero2 from "@/components/HomepageHero2";

export default function Home() {
  return (
    <div>
      
    <HomepageHero />
        <HomepageHero2 />
      <Services />
        <Partners />
    <FAQ />
    </div>
    
    )
}