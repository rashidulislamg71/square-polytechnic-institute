

import React from "react";
import { leadersSpeechData } from "@data/AboutPageData/LeadersSpeechData";
import LeadersSpeech from "./LeadersSpeech";

const LeadersSpeechSection = () => {
  
  return (
    <section className="flex flex-col gap-4">
      {leadersSpeechData.map((leader) => (
        <LeadersSpeech key={leader.id} leader={leader} />
      ))}
    </section>
  );
};

export default LeadersSpeechSection;
