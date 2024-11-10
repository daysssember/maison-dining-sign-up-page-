import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

export default function Home() {
  return (
    <MainLayouts>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://studentlife.lincoln.ac.uk/files/2023/01/pexels-ella-olsson-1640770.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="relative z-10 text-black text-center p-4 font-serif">
          <h1 className="text-7xl font-bold mb-4">Best food <br /> for your taste</h1>
          <section>
            <h2 className="text-xl mb-6">
              Discover delectable cuisine and unforgettable moments <br /> in our welcoming culinary haven.
            </h2>
          </section>

          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out">
              Book Now
            </button>

            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
}
