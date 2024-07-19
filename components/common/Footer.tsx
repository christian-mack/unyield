import Image from "next/image";
import { BrandInput } from "./BrandInput";

export function Footer() {
  return (
    <footer className="w-full bg-brand-yellow py-20 text-black px-[80px]">
      <div className="grid grid-cols-12 gap-4 h-96">
        {/* Logo */}
        <div className="col-span-1 row-span-2 flex flex-col items-center justify-between h-full w-full">
          <div className="relative h-full w-full">
            <Image
              src="/assets/logo-vertical.png"
              alt="footer logo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="col-span-1 col-start-3 flex flex-col">
          <div className="flex flex-col items-center mb-4">
            <div className="mt-4 text-[28px] reverse transform rotate-180 origin-left">
              <p>+1 (307) 439 4923</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 col-start-5">
          <p className="text-lg font-medium mb-4">Quick Links</p>
          <ul className="space-y-2 font-light">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="col-span-1 col-start-7">
          <p className="text-lg font-medium mb-4">Follow</p>
          <ul className="space-y-2 font-light">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="col-span-4 col-start-9">
          <p className="text-lg font-medium mb-4">Sign up to our newsletter</p>
          <form className="flex items-center space-x-2">
            <BrandInput
              type="email"
              placeholder="E-MAIL"
              className="border-b-[1px] px-0 rounded-none border-black bg-brand-yellow outline-none w-full"
            />
            <button type="submit" className="text-2xl">
              <span className="block transform rotate-45">&#x2197;</span>
            </button>
          </form>
        </div>
        <div className="col-start-3 col-span-10 mt-8 border-t border-black pt-4 flex justify-between text-sm">
          <p>© Centrix 2021. All Rights Reserved</p>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
