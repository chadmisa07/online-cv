import Image from "next/image";
import {
  Header,
  About,
  Skills,
  WorkExperience,
  Education,
  Connect,
} from "@/components";

export default function Home() {
  return (
    <main className="relative py-10 bg-slate-200 min-h-screen ">
      <div className="cv__container lg:max-w-4xl xl:max-w-5xl md:max-w-3xl px-4 md:px-0 md:mx-auto w-100 w-full rounded-lg shadow-lg flex flex-col">
        <Header />
        <About />
        <Skills />
        <WorkExperience />
        <Education />
        <Connect />
      </div>
    </main>
  );
}
