// import { Locale } from '@/i18n.config'
// import { getDictionary } from '@/lib/dictionary'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/_options";

import AuthButton from "@/components/auth-button";

export default async function Home() {
  //@TODO: implement to have line 20 and 21 available
  // const { page, auth } = await getDictionary(lang)
  const session = await getServerSession(authOptions);

  const user = session?.user;

  return (
    <section className="py-24">
      <div className="container">
        {/* <h1 className='text-3xl font-bold'>{page.home.title}</h1>
        <p className='text-gray-500'>{page.home.description}</p> */}

        <div className="mt-6">
          <pre className="mt-4">
            <code>{JSON.stringify({ name: user?.name }, null, 2)}</code>
          </pre>
          <span className="dark:hover:bg-green-300 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
          <AuthButton />
        </div>
      </div>
    </section>
  );
}
