import { Carousel } from "@/components/common/Carousel";
import { ContactForm } from "@/components/common/ContactForm";
import { HeroImageLeft } from "@/components/common/HeroImageLeft";
import { HeroImageRight } from "@/components/common/HeroImageRight";
import { OurTeam } from "@/components/common/OurTeam";
import { Statistics } from "@/components/common/Statistics";
import Header from "@/components/Header";
import { getEntryBySlug } from "@/utils/contentful";

export default async function Index() {
  const page = await getEntryBySlug("home", "page");

  return (
    <div className="flex-1 w-full flex flex-col">
      <Header />
      <HeroImageLeft />
      <Carousel />
      <HeroImageRight />
      <Statistics />
      <OurTeam />
      <ContactForm />
    </div>
  );
}
