import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export function MainNavigation() {
  return (
    <nav className="w-full flex justify-center bg-brand-yellow px-20 absolute top-0 left-0">
      <div className="flex w-full justify-between items-center py-[30px] border-b border-black">
        <p className="font-semibold italic uppercase text-xl">Unyield</p>

        <div>
          <ul className="flex gap-10 font-light uppercase">
            <li>
              <Link href="/" className="flex items-center gap-2">
                <p>Home</p>
                <span className="font-3xl">
                  <GoArrowUpRight size={20} />
                </span>
              </Link>
            </li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
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
