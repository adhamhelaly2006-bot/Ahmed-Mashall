
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://picsum.photos/id/1028/800/800",
    "https://picsum.photos/id/1040/800/1200",
    "https://picsum.photos/id/1043/800/800",
    "https://picsum.photos/id/1044/1200/800",
    "https://picsum.photos/id/104/800/800",
    "https://picsum.photos/id/211/800/1200",
  ];

  return (
    <section className="py-16 sm:py-24 text-center">
      <h2 className="font-display text-5xl sm:text-6xl text-[#647a62] mb-12">Our Memories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
