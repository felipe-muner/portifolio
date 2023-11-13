/**
 * v0 by Vercel.
 * @see https://v0.dev/t/usXPLuIE2xp
 */
import Link from "next/link";
import Image from "next/image";
import GetInTouch from "./get-in-touch/GetInTouch";

export default function Footer() {
  return (
    <footer>
      <GetInTouch />
      <div className="grid grid-cols-4 items-start py-6 bg-gray-800 text-white px-10 gap-x-8">
        <div className="flex flex-col items-center space-y-6">
          <Image
            alt="Company Logo"
            src="/images/logo.svg"
            style={{
              aspectRatio: "200/100",
              objectFit: "cover",
            }}
            height="100"
            width="200"
          />
          <div className="flex space-x-4">
            <Link href="#">
              <svg
                className=" h-6 w-6 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link href="#">
              <svg
                className=" h-6 w-6 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link href="#">
              <svg
                className=" h-6 w-6 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#">
              <svg
                className=" h-6 w-6 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect height="12" width="4" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold">Company</h3>
          <Link className="text-gray-300 hover:text-white" href="/about-us">
            About us
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#">
            Our team
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#">
            Careers
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold">Help</h3>
          <Link className="text-gray-300 hover:text-white" href="/support">
            Support
          </Link>
          <Link className="text-gray-300 hover:text-white" href="/faq">
            FAQs
          </Link>
          <Link className="text-gray-300 hover:text-white" href="contact-us">
            Contact us
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold">Explore</h3>
          <Link className="text-gray-300 hover:text-white" href="#">
            Services
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#">
            Products
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#">
            Blog
          </Link>
        </div>
        <div className="col-span-4 text-center mt-6">
          <p className="text-sm">
            © {new Date().getFullYear() ?? 2023} Felipe Muner, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
