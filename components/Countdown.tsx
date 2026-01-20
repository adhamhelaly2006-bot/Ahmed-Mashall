
import React from 'react';
import useCountdown from '../hooks/useCountdown';
import { TimeLeft } from '../types';

const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center mx-4">
    <span className="text-4xl sm:text-6xl font-light text-[#5D737E] tracking-wider">{value.toString().padStart(2, '0')}</span>
    <span className="text-xs sm:text-sm uppercase tracking-widest text-[#647a62] mt-1">{label}</span>
  </div>
);

const Separator: React.FC = () => (
    <div className="text-4xl sm:text-5xl text-[#E8C7C8] font-light self-start">
        :
    </div>
);

const Countdown: React.FC = () => {
  const weddingDate = '2026-01-29T20:00:00';
  const timeLeft: TimeLeft = useCountdown(weddingDate);

  return (
    <section className="py-12 sm:py-16 text-center">
      <h2 className="font-display text-5xl sm:text-6xl text-[#647a62] mb-4">Save The Date</h2>
      <p className="mb-10 text-lg">Until we say "I do"</p>
      <div className="flex flex-wrap justify-center items-center">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <Separator />
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
};

export default Countdown;
