import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const AboutPage: React.FC = () => {
  return (
    <MainLayouts>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-between"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHklMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3D")',
          fontFamily: "Times New Roman, serif", 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0"></div>

        <div className="relative z-10 text-black p-20 flex-grow">
          <h1 className="text-5xl font-bold mb-6">We provide healthy <br /> food for your family</h1>
          <div>
            <p className="text-lg mb-8">
              At Maison Dining, we are dedicated to providing a dining experience 
              that prioritizes health <br /> without compromising on flavor. Our carefully curated menu features 
              a variety of nutritious dishes, <br /> made from fresh, locally sourced ingredients. 
              Each meal is thoughtfully crafted to promote <br /> wellness, ensuring that every bite 
              not only delights your palate but also nourishes your body. <br /> Join us at Maison Dining, 
              where healthy eating is redefined as a delicious journey.
            </p>
          </div>
          
          <blockquote className="text-lg italic font-bold mb-6 border-l-4 border-gray-300 pl-4">
            “Let food be thy medicine and medicine be thy food.” <br />
            <span className="text-sm font-semibold">— Hippocrates</span>
          </blockquote>
        </div>

        <div className="absolute bottom-20 left-20 w-2/4 flex justify-between bg-white bg-opacity-80 p-6 rounded-lg shadow-lg border border-gray-400">
          <div className="w-1/2 pr-1">
            <h2 className="text-3xl font-bold mb-2 border-b-2 border-gray-300">Mission</h2>
            <p className="text-3x1" style={{ lineHeight: '1.6' }}>
              To provide delicious and nutritious <br /> meals 
              that promote a healthy <br /> lifestyle for families.
            </p>
          </div>

          <div className="w-1/2 pl-1">
            <h2 className="text-3xl font-bold mb-2 border-b-2 border-gray-300">Vision</h2>
            <p className="text-3x1" style={{ lineHeight: '1.6' }}>
              To be a leader in the healthy dining <br /> sector, 
              where every family can enjoy <br /> wholesome food that nurtures their well-being.
            </p>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default AboutPage;
