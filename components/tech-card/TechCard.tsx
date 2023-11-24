/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U8U7Pvy45YC
 */
import { CardContent, Card } from "@/components/ui/card";
import react from "/public/images/react.png";
import nextjs from "/public/images/next-js.png";
import tailwind from "/public/images/tailwind.png";
import typescript from "/public/images/typescript.png";
import graphql from "/public/images/graphql.png";
import postgres from "/public/images/postgres.png";
import Image, { StaticImageData } from "next/image";

const techData = [
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Graphql",
    icon: graphql,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
];

export default function TechCard() {
  return (
    <div className="py-24 flex gap-[20px] bg-gray-200 rounded-lg p-8">
      {techData.map((tech, index) => (
        <Card className="divide-y w-[100px] shadow-2xl rounded-md border-none" key={index}>
          <CardContent className="flex items-center justify-center bg-white py-4 rounded-md">
            <Icon svg={tech.icon} />
          </CardContent>
          <CardContent className="flex items-center justify-center bg-gradient-to-br from-gray-600 to-black py-2 rounded-b-sm">
            <p className="text-white text-base">{tech.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Icon({ svg }: { svg: StaticImageData }) {
  return <Image src={svg} objectFit="" alt="React" className="w-[50px] h-[50px]" />;
}
