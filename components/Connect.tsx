"use client";

import React from "react";
import Image from "next/image";

const Connect = () => {
  return (
    <section className="cv-education__container section !block">
      <div className="section__header">{`Let's work together!`}</div>
      <p className="text-gray-400 mt-4">Reach me out</p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <a className="text-black flex" href="mailto:chadmisa07@gmail.com">
          <div className="py-4 px-6 border-2 border-transparent rounded-lg flex bg-blue-600 hover:bg-blue-700">
            <div className=" mr-2">
              <div className="flex sm:justify-center">
                <Image
                  src="/mail.svg"
                  height={50}
                  width={50}
                  alt="mail"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-white">
              <div>Email:</div>
              <div className="font-semibold">chadmisa07@gmail.com</div>
            </div>
          </div>
        </a>

        <a className="text-black flex" href="/CHAD_MISA_CV_V3.pdf" download>
          <div className="py-4 px-6 border-2 border-transparent rounded-lg flex bg-slate-300 hover:bg-slate-400">
            <div className=" mr-2">
              <div className="flex sm:justify-center">
                <Image
                  src="/download.png"
                  height={50}
                  width={50}
                  alt="mail"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-black font-semibold flex items-center">
              Download CV
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Connect;
