import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import ThemeButton from "./ThemeButton";
import LocaleSwitcher from "./LocaleSwitcher";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);
  return (
    <header className="py-6">
      <section
        key="1"
        className="fixed top-0 w-full h-16 bg- flex items-center px-6 sm:flex-row flex-col"
      >
        <div className="flex items-center">
          <Image
            alt="Logo"
            className="rounded-lg object-contain object-center"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
        </div>
        <Button
          className="sm:hidden mx-auto rounded-md hover:bg-purple-700 transition-colors"
          variant="default"
        >
          <svg
            className=" text-white"
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
        <div className="flex-grow sm:flex sm:items-center sm:space-x-4 justify-end">
          <nav className="hidden sm:flex space-x-4 items-center">
            <Link className="dark:text-white transition-colors" href="#">
              Home
            </Link>
            <Link className="dark:text-white transition-colors" href="#">
              About
            </Link>
            <Link className="dark:text-white transition-colors" href="#">
              Contact
            </Link>
            <LocaleSwitcher />
            <ThemeButton />
          </nav>
          <div>
            <Button
              className="bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors"
              variant="default"
            >
              Login
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
}
