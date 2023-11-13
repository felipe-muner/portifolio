"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MAP_LANGUAGES, i18n } from "@/i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    console.log("pathName", pathName);

    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <GlobeAltIcon className="h-5 w-5 text-white cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {i18n.locales.map((locale) => {
            return (
              <Link
                key={locale}
                href={redirectedPathName(locale)}                
              >
                <DropdownMenuItem className="cursor-pointer">{MAP_LANGUAGES[locale]}</DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Spanish (comming soon)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
