import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Mosaic = () => {
  return (
    <div className="grid grid-cols-4 gap-10 h-96">
      <div className="relative group col-span-1 row-span-4">
        <div className="relative h-full">
          <Image
            src="/assets/headshot-1.jpg"
            alt="Person 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-yellow bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-2xl font-bold uppercase">Bobby Fish</p>
          <p className="text-lg font-light">Designer</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-black" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-black" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-black" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative group col-span-1 row-span-2">
        <div className="relative h-full">
          <Image
            src="/assets/headshot-2.jpg"
            alt="Person 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-yellow bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-2xl font-bold uppercase">Alex Johnson</p>
          <p className="text-lg font-light">Developer</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-black" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-black" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-black" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative group col-span-1 row-span-3">
        <div className="relative h-full">
          <Image
            src="/assets/headshot-3.jpg"
            alt="Person 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-yellow bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-2xl font-bold uppercase">Jane Smith</p>
          <p className="text-lg font-light">Project Manager</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-black" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-black" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-black" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative group col-span-1 row-span-4">
        <div className="relative h-full">
          <Image
            src="/assets/headshot-4.jpg"
            alt="Person 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-yellow bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-2xl font-bold uppercase">Michael Lee</p>
          <p className="text-lg font-light">Marketing</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-black" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-black" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
