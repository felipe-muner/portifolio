import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import ThemeButton from "./theme-button";
import LocaleSwitcher from './locale-switcher'


export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);
  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <div className=" dark:bg-red-600 bg-blue-800 dark:hover:bg-zinc-700">
          proof theme switcher2
        </div>
        <LocaleSwitcher />
        <ThemeButton />
      </nav>
    </header>
  );
}
