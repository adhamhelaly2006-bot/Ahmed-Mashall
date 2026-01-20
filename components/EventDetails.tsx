
import React from 'react';

const EventDetails: React.FC = () => {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Perla%20Wedding%20Hall%20Tanta&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const mapLinkUrl = "https://maps.app.goo.gl/SADfweVLbmb3qdNu9";

  return (
    <section className="py-12 sm:py-16 text-center bg-white/50 rounded-lg shadow-xl my-8">
      <h2 className="font-display text-5xl sm:text-6xl text-[#647a62] mb-8">Event Details</h2>
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#5D737E]">The Wedding</h3>
          <p className="text-lg mt-2">Thursday, 29th January 2026</p>
          <p className="text-lg">At 8:00 PM</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#5D737E]">Venue</h3>
          <p className="text-lg mt-2">PERLA (GRAND BABYLION)</p>
          <p className="text-lg">Tanta-Mahalla Road</p>
          <p className="text-lg" dir="rtl">بطريق المحله طنطا</p>
        </div>

        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border-4 border-white my-8">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          ></iframe>
        </div>

        <a
          href={mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#647a62] text-white py-3 px-8 rounded-full text-lg hover:bg-[#536851] transition-colors duration-300 shadow-md"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
};

export default EventDetails;
