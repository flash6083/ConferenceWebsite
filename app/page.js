import Conf from "@/components/conf/conf";
import ConferenceDetail from "@/components/conf_detail/conf_detail";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Conf />
      <ConferenceDetail />
    </div>
  )
}
