"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-7-25");

const CountDown = () => {
  return (
    <div>
      <Countdown
        date={endingDate}
        className="font-bold text-yellow-300 text-5xl"
      />
    </div>
  );
};

export default CountDown;
