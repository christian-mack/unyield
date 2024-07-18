import Link from "next/link";
import { RotatingWords } from "./common/RotatingWords";
import { GoArrowUpRight } from "react-icons/go";

export default function Header() {
  return (
    <section className="bg-brand-yellow flex min-h-screen justify-center">
      <div className="grid grid-cols-12 w-full px-20">
        <div className="col-span-4 h-full flex flex-col justify-between">
          <div className="h-full flex items-end">
            <RotatingWords />
          </div>
          <div className="h-full flex items-end">
            <Link href="/about">
              <div className="flex text-xl uppercase items-end">
                <p>About Us</p>
                <GoArrowUpRight size={150} />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-8 flex items-center">
          <p className="text-[209px] uppercase leading-none break-all">
            Design & Development
          </p>
        </div>
      </div>
    </section>
  );
}
