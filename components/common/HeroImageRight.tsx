import Link from "next/link";
import { CustomSection } from "../layout/CustomSection";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export function HeroImageRight() {
  return (
    <CustomSection style="py-[240px]">
      <div className="col-span-6 flex flex-col justify-between">
        <div>
          <p className="text-3xl p-6 leading-10">
            Our team consists of practitioners who have 15 years of experience
            in launching and managing projects. worked with a wide array of
            clients across the globe to apply design fundamentals of elegance,
            simplicity
          </p>
        </div>
        <div className="flex justify-around items-end">
          <div className="w-1/3">
            <Link href="/about-us">
              <div className="flex text-xl uppercase items-end w-full flex-1">
                <p>About Us</p>
                <GoArrowUpRight size={150} />
              </div>
            </Link>
          </div>
          <div className="flex w-2/3 px-20">
            <p className="text-md font-light">
              We make our customers' products valuable in the eyes of customers.
              To do this, we analyze and study people, build long-term
              strategies for interacting with them, develop creative ideas and
              create a bright design. We use all opportunities to solve business
              problems.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-6 h-[500px] relative">
        <Image
          src="/assets/about-us.jpg"
          alt="team of people standing together"
          className="object-cover object-top"
          fill
        />
      </div>
    </CustomSection>
  );
}
