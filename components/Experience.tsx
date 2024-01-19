import React from "react";

const Experience = () => {
  return (
    <div className="cv-experience__item border-2 rounded-lg p-4 border-r-8 border-r-blue-400 hover:bg-slate-300">
      <h2 className="font-semibold text-lg">Matcherino Inc.</h2>
      <p className="text-gray-400">Seattle, WA</p>
      <p className="font-semibold mt-2">Software Engineer</p>
      <p>Sept 2018 – Jan 2024</p>
      <p className="mt-2">
        Matcherino is the leader in powering online video game tournaments and
        utilizes modern web development and digital payment infrastructure to
        service over one million players globally. Matcherino distributed over
        20 million USD in player prizes from over 65,000 tournaments and
        operates thousands of tournaments monthly.
      </p>

      <p className="text-md font-semibold my-1">Tasks</p>
      <ul className="tasks pl-5">
        <li>
          Development of key products including tournament bracketing systems
          for Elimination and Swiss tournament formats.
        </li>
        <li>
          Development of advanced adtech tools enabling tournament sponsorships,
          and website whitelabels for organizations including Microsoft, the
          American Red Cross, CORSAIR, and AAA game publishers Supercell and
          Wizards of the Coast.
        </li>
        <li>
          Conversion to react-i18next framework for language
          internationalization, code conversions to Functional Components and
          Hooks, and codebase migrations to Next.js and TypeScript
        </li>
        <li>Ensure created features are usable in mobile and web</li>
        <li>Peer review code developed by teammates</li>
        <li>Debugging and bug fixing production issues.</li>
      </ul>
    </div>
  );
};

export default Experience;
