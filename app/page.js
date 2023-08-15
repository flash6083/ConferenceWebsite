import Conf from "@/components/conf/conf";
import ConferenceDetail from "@/components/conf_detail/conf_detail";
import Hero from "@/components/hero/hero";
import SlideShow from "@/components/kolkata_view/kolkata_slideshow";
import TechSponsor from "@/components/tech_sponsor/tech_sponsor";

export default function Home() {
  return (
    <div>
      <Hero />
      <SlideShow />
      <Conf />
      <ConferenceDetail />
      <TechSponsor />
    </div>
  )
}
