import HeroVideo from "@/components/HeroVideo";
import KeyMetrics from "@/components/KeyMetrics";
import NeedVideo from "@/components/NeedVideo";
import OurServices from "@/components/OurServices";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
      <div>
        <div>
          <HeroVideo />
        </div>
        <div>
          <OurServices />
        </div>
        <div>
          <WhyUs />
        </div>
        <div>
          <KeyMetrics />
        </div>
        <div>
          <NeedVideo />
        </div>
      </div>
  );
}
