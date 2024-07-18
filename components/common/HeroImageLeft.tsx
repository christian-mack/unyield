import Image from "next/image";
import { CustomSection } from "../layout/CustomSection";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export function HeroImageLeft() {
  return (
    <CustomSection style="py-[120px] grid grid-rows-[auto,auto,auto] gap-4">
      <div className="relative col-span-8">
        <Image
          src="/assets/teamwork.jpg"
          alt="Coworkers collaborating on a project"
          width={1110}
          height={727}
        />
      </div>
      <div className="flex flex-col col-span-4">
        <div className="flex">
          <p className="text-6xl mb-[120px]">About Us</p>
        </div>
        <div className="flex flex-col h-full justify-between">
          <p className="text-2xl">
            Our intelligent digital strategy and a pragmatic and thoughtful
            approach to solving business calls deliver a successful framework
            for both you and your audience. business calls deliver a successful
            framework for both you and
          </p>
          <div className="flex w-full justify-end">
            <Link href="/services">
              <div className="flex text-xl uppercase items-end">
                <p>Services</p>
                <GoArrowUpRight size={150} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ul className="flex col-span-8 text-3xl mt-14">
        <li className="after:content-['/'] after:m-2">
          <Link href="/services/web-development">01 Web Development</Link>
        </li>
        <li className="after:content-['/'] after:m-2">
          <Link href="/services/web-design">02 Web Design</Link>
        </li>
        <li className="after:content-['/'] after:m-2">
          <Link href="/services/automation">03 Automation</Link>
        </li>
        <li className="">
          <Link href="/services/custom-software-solutions">
            04 Custom Solutions
          </Link>
        </li>
      </ul>
    </CustomSection>
  );
}
