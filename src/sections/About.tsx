import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxIcon } from "@/components/ToolboxIcon";
const toolboxItems = [
  {
    title: "javaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Angular",
    iconType: ReactIcon,
  },
  {
    title: "TypeScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "Bootstrap",
    iconType: CssIcon,
  },
  {
    title: "Tailwind",
    iconType: CssIcon,
  },
  {
    title: "JQuery",
    iconType: JavaScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Git & GitHub",
    iconType: GitHubIcon,
  },
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📷",
    left: "5%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gym",
    emoji: "🏋️",
    left: "10%",
    top: "30%",
  },

  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Eating Pizza",
    emoji: "🍕",
    left: "15%",
    top: "65%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glipse Into my World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-6">
          <div
            className=" grid grid-cols-1 gap-8
          md:grid md:grid-cols-5  lg:grid-cols-3 "
          >
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my prespectives."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technolgies and tools I use to craft exeptional
                digital experinces."
              />
              <ToolboxIcon items={toolboxItems} className="" />
              <ToolboxIcon
                items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 p-0 flex flex-col">
              <CardHeader
                className="px-6  py-6"
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center 
                  gap-2 px-6 bg-gradient-to-r
                   from-emerald-300 to-sky-400 
                   py-1.5 rounded-full
                   absolute
                   "
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 p-0 relative">
              <Image
                src={mapImage}
                alt="map image"
                className="h-full w-full object-cover object-left-top"
              />
              <div
                className="absolute size-20 rounded-full 
            bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute
            after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full
            after:outline-gray-950/30
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
