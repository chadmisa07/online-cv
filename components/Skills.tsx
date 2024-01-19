"use client";
import React from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";

import { skills } from "@/constants";

const Skills = () => {
  return (
    <section className="cv-skills__container section">
      <h2 className="section__header">Professional Skills</h2>

      <div className="cv-skills__items flex flex-wrap items-center justify-center gap-y-5">
        {skills.map((skill) => (
          <div
            className="cv-skills__item lg:basis-1/4 md:basis-1/3 basis-1/2 flex flex-col items-center p-2 justify-end gap-y-2"
            key={skill.label}
          >
            <div className=" h-full w-2/3 flex items-center flex-col p-4 rounded-lg border-2 shadow-lg hover:scale-110">
              <div className="cv-skills__item-icon h-14 flex align-center">
                <Image
                  src={`/skills/${skill.icon}.${skill.type || "png"}`}
                  alt={skill.label}
                  height={50}
                  width={50}
                  className="w-auto h-auto"
                />
              </div>
              <div className="cv-skills__item-label text-gray-500 font-semibold">
                {skill.label}
              </div>
              <div className="flex" title="Skill Rating">
                <StarRatings
                  rating={skill.level}
                  starRatedColor="rgb(255,223,0)"
                  numberOfStars={5}
                  name="rating"
                  starEmptyColor="gray"
                  starDimension="15px"
                  starSpacing="2px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;