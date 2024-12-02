import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-40 lg:py-45 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
       
        <HeroOrbit 
        size={430} 
        rotation={-15}
        shouldOrbit
        orbitDuration="30s"
        shouldSpin
        spinDuration="5s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit 
        size={440} 
        rotation={80}
        shouldOrbit
        orbitDuration="32s"
        shouldSpin
        spinDuration="5s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit 
        size={520} 
        rotation={-45}
        shouldOrbit
        orbitDuration="34s"
        shouldSpin
        spinDuration="10s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit 
        size={530} 
        rotation={180}
        shouldOrbit
        orbitDuration="36s"
        shouldSpin
        spinDuration="5s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit 
        size={550} 
        rotation={20}
        shouldOrbit
        orbitDuration="38s"
        shouldSpin
        spinDuration="10s">
          <StarIcon className="size-12 animate-spin [animation-duration:5s] text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit 
        size={590} 
        rotation={98}
        shouldOrbit
        orbitDuration="40s"
        shouldSpin
        spinDuration="10s">
          <StarIcon className="size-8 animate-spin [animation-duration:5s] text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit 
        size={650} 
        rotation={-5}
        shouldOrbit
        orbitDuration="42s"
        shouldSpin
        spinDuration="10s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit 
        size={710} 
        rotation={150}
        shouldOrbit
        orbitDuration="44s"
        shouldSpin
        spinDuration="5s">
          <SparkleIcon className="size-16 text-emerald-300/20 " />
        </HeroOrbit>
     
        <HeroOrbit 
        size={710} 
        rotation={80}
        shouldOrbit
        orbitDuration="46s"
        shouldSpin
        spinDuration="10s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit 
        size={800} 
        rotation={-72}
        shouldOrbit
        orbitDuration="48s"
        shouldSpin
        spinDuration="10s">
          <StarIcon className="size-28 animate-spin [animation-duration:5s] text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg  ">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 inset-0 absolute rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm ">Available for new Projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Welcome to my Studio This is <span className="tracking-widest bg-gradient-to-r from-emerald-300
           to-sky-400 text-transparent bg-clip-text">Mohamed Saeed</span>  with you
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specilazing in transforming designs into functional,
            high-performing web applications. Lets discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl ">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
