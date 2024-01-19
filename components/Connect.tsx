import React from "react";
import Image from "next/image";

const Connect = () => {
  return (
    <section className="cv-education__container section !block">
      <div className="section__header">Let's work together!</div>
      <p className="text-gray-400 mt-4">Reach me out</p>
      <div>
        <a className="text-black flex" href="mailto:chadmisa07@gmail.com">
          <div className="py-4 px-6 border-2 border-transparent rounded-lg flex bg-blue-600">
            <div className=" mr-2">
              <div className="flex">
                <Image src="/mail.svg" height={50} width={50} alt="mail" />
              </div>
            </div>
            <div className="text-white">
              <div>Email:</div>
              <div className="font-semibold">chadmisa07@gmail.com</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Connect;
