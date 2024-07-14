"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export function MainNavigation() {
  const pathname = usePathname();

  const isActivePage = (page: string) => {
    return pathname === page;
  };

  return (
    <nav className="w-full flex justify-center bg-brand-yellow px-20 absolute top-0 left-0">
      <div className="flex w-full justify-between items-center py-[30px] border-b border-black">
        <p className="font-semibold italic uppercase text-xl">Unyield</p>

        <div>
          <ul className="flex gap-10 font-light uppercase">
            <li>
              <Link href="/" className="flex items-center gap-2">
                <p>Home</p>
                {isActivePage("/") && (
                  <span className="font-3xl">
                    <GoArrowUpRight size={20} />
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="flex items-center gap-2">
                <p>About Us</p>
                {isActivePage("/about-us") && (
                  <span className="font-3xl">
                    <GoArrowUpRight size={20} />
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex items-center gap-2">
                <p>Services</p>
                {isActivePage("/services") && (
                  <span className="font-3xl">
                    <GoArrowUpRight size={20} />
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="flex items-center gap-2">
                <p>Portfolio</p>
                {isActivePage("/portfolio") && (
                  <span className="font-3xl">
                    <GoArrowUpRight size={20} />
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="flex items-center gap-2">
                <p>Blog</p>
                {isActivePage("/blog") && (
                  <span className="font-3xl">
                    <GoArrowUpRight size={20} />
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2">
                <p>Contact</p>
                {isActivePage("/contact") && (
                  <span className="font-3xl">
                    <GoArrowUpRight size={20} />
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <Link href="/">
                <FaLinkedinIn width={10} height={10} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
