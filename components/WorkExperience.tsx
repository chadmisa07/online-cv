import React from "react";

import { experiences } from "@/constants";

const WorkExperience = () => {
  return (
    <section className="cv-experience__container section">
      <div className="section__header">Work Experience</div>

      <div className="cv-experience__items flex flex-wrap flex-col gap-y-5">
        {experiences.map((experience) => {
          const { company, date, title, tasks, borderClassName } = experience;
          return (
            <div
              key={company.name}
              className={`cv-experience__item border-2 rounded-lg p-4 hover:bg-slate-300 `}
            >
              <h2 className="font-semibold text-lg">{company.name}</h2>
              <p className="text-gray-400">{company.address}</p>
              <p className="font-semibold mt-2">{title}</p>
              <p>{date}</p>
              <p className="mt-2">{company.overview}</p>

              <p className="text-md font-semibold my-1">Tasks</p>
              <ul className="tasks pl-5">
                {tasks.map((task, index) => {
                  return <li key={index}>{task}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;
