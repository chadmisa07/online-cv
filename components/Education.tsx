import React from "react";
import { educations } from "@/constants";

const Education = () => {
  return (
    <div className="cv-education__container section">
      <div className="section__header">Education</div>

      <div className="cv-experience__items flex flex-wrap flex-col gap-y-5">
        {educations.map((education) => {
          const { school, degree, year } = education;
          return (
            <div
              key={school}
              className={`cv-education__item border-2 rounded-lg p-4 hover:bg-slate-300 `}
            >
              <h2 className="font-semibold text-lg">{school}</h2>
              <p>{degree}</p>
              <p className="text-gray-400">{year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
