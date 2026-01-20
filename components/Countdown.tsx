
import React from 'react';
import useCountdown from '../hooks/useCountdown';
import { TimeLeft } from '../types';

const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm shadow-lg rounded-full w-24 h-24 sm:w-32 sm:h-32 m-2 border-2 border-[#E8C7C8]">
    <span className="text-3xl sm:text-5xl font-bold text-[#5D737E]">{value}</span>
    <span className="text-sm sm:text-base uppercase tracking-wider text-[#647a62]">{label}</span>
  </div>
);

const Countdown: React.FC = () => {
  const weddingDate = '2026-01-29T20:00:00';
  const timeLeft: TimeLeft = useCountdown(weddingDate);

  return (
    <section className="py-16 sm:py-24 text-center">
      <h2 className="font-display text-5xl sm:text-6xl text-[#647a62] mb-4">Save The Date</h2>
      <p className="mb-8 text-lg">Until we say "I do"</p>
      <div className="flex flex-wrap justify-center items-center">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
};

export default Countdown;
