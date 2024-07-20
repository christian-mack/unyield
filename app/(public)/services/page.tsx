import Link from "next/link";
import Image from "next/image";
import { CustomSection } from "@/components/layout/CustomSection";

export default function ServicesPage() {
  return (
    <CustomSection style="my-[212px]">
      <div className="col-span-6">
        <h1 className="text-[100px] mb-10">Our services</h1>
        <p className="text-2xl w-1/2 font-light">
          In the design process, they create both functional and beautiful
          things. The team possesses unique
        </p>
      </div>
      <div className="col-span-5 col-start-7 flex w-full items-center justify-end h-[600px]">
        <Link href="/services/web-development">
          <div className="relative w-[810px] h-[524px]">
            <Image
              src="/assets/web-development.jpg"
              alt="Planning a web development project"
              className="object-cover"
              fill
            />
            <div className="absolute bottom-0 left-0 z-10 font-light text-white bg-black p-10">
              <p className="uppercase text-2xl">web development</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-3 flex items-start h-[600px]">
        <Link href="/services/web-design">
          <div className="relative w-[410px] h-[328px] mt-[-150px]">
            <Image
              src="/assets/web-design.jpg"
              alt="Web design services in action"
              className="object-cover"
              fill
            />
            <div className="absolute bottom-0 left-0 z-10 font-light text-white bg-black p-10">
              <p className="uppercase text-2xl">web design</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-4 col-start-6 flex items-end h-[600px]">
        <Link href="/services/marketing">
          <div className="relative w-[615px] h-[332px]">
            <Image
              src="/assets/marketing.jpg"
              alt="Marketing strategy in the planning stages"
              className="object-cover"
              fill
            />
            <div className="absolute bottom-0 left-0 z-10 font-light text-white bg-black p-10">
              <p className="uppercase text-2xl">marketing</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-8 col-start-3 flex items-end h-[600px]">
        <Link href="/services/automation">
          <div className="relative w-[1238px] h-[353px]">
            <Image
              src="/assets/automation.jpg"
              alt="Cogs to represent an automated system"
              className="object-cover"
              fill
            />
            <div className="absolute bottom-0 left-0 z-10 font-light text-white bg-black p-10">
              <p className="uppercase text-2xl">automation</p>
            </div>
          </div>
        </Link>
      </div>
    </CustomSection>
  );
}
