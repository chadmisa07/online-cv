import Image from "next/image";
import { socials } from "@/constants";

const Header = () => {
  return (
    <section className="cv-header__container bg-stone-400 w-full rounded-t-lg flex flex-col gap-4 p-7 max-h-[400px] sm:max-h-96">
      <div className="rounded-full flex justify-center ">
        <Image
          src="/cv-img.jpg"
          width={200}
          height={200}
          className="cv-header__image shadow-xl ring-4 ring-green-400 w-auto h-auto"
          alt="CV Image"
          priority
        />
      </div>
      <div className="cv-header__name flex justify-center items-center flex-col sm:flex-row">
        <h1 className="font-semibold text-2xl text-black">Chad E. Misa</h1>
        <p className="text-gray-100 font-normal sm:before:border-l-2 sm:before:boder-l-white sm:ml-1 border-none">
          <span className="pl-0 sm:pl-1">Software Engineer</span>
        </p>
      </div>
      <div className="cv-header__socials flex justify-center items-center gap-2">
        {socials.map((social) => (
          <a
            key={social.icon}
            target="_blank"
            rel="noreferrer noopener"
            href={social.link}
            className="transition hover:-translate-y-[4px] ease-in-out duration-150"
          >
            <Image
              src={`/socials/${social.icon}.svg`}
              width={25}
              height={25}
              alt={social.icon}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Header;
