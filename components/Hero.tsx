
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-20 overflow-hidden">
      <div className="z-10 bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <p className="text-lg md:text-xl tracking-widest uppercase text-[#647a62]">
          You are invited to the wedding of
        </p>
        <h1 className="font-display text-7xl md:text-9xl my-6 text-[#5D737E]">
          Hind
        </h1>
        <span className="font-display text-4xl md:text-5xl text-[#E8C7C8]">&</span>
        <h1 className="font-display text-7xl md:text-9xl my-6 text-[#5D737E]">
          Ahmed
        </h1>
        <p className="text-2xl md:text-3xl tracking-[0.2em] text-[#647a62] mt-8">
          29 . 01 . 2026
        </p>
      </div>
    </section>
  );
};

export default Hero;
