

import React from "react";
import { leadersSpeechData } from "@data/AboutPageData/LeadersSpeechData";
import LeadersSpeech from "./LeadersSpeech";

const LeadersSpeechSection = () => {
  return (
    <section className="">
      {leadersSpeechData.map((leader) => (
        <LeadersSpeech key={leader.id} leader={leader} />
      ))}
    </section>
  );
};

export default LeadersSpeechSection;
