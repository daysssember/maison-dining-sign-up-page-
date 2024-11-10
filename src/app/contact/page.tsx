import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const ContactPage: React.FC = () => {
  return (
    <MainLayouts>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1490818387583-1baba5e638af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D")',
        }}
      >

        <div className="absolute inset-0 bg-black opacity-0"></div>

        <div className="relative z-10 w-full max-w-7xl flex justify-end p-6 lg:p-10">
          
          <div
            className="bg-white bg-opacity-0 text-black p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-md lg:max-w-lg xl:max-w-xl"
            style={{ fontFamily: "Times New Roman, serif" }} 
          >
            <h1 className="text-5xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-lg mb-8 text-center">
              We'd love to hear from you! Whether you have questions about our menu, want to make a reservation, or need more information about our healthy dining philosophy, feel free to reach out to us.
            </p>

            <div className="text-left">
              <h2 className="text-2xl font-bold mb-4">Maison Dining</h2>
              <p>123 Wellness Avenue</p>
              <p>Healthy City, State 56789</p>

              <h3 className="text-xl font-bold mt-6">Phone</h3>
              <p>+639669253591</p>

              <h3 className="text-xl font-bold mt-6">Email</h3>
              <p>poteytochipshiii@gmail.com</p>

              <h3 className="text-xl font-bold mt-6">Hours of Operation</h3>
              <p>Monday - Friday: 11:00 AM - 9:00 PM</p>
              <p>Saturday: 10:00 AM - 10:00 PM</p>
              <p>Sunday: 10:00 AM - 8:00 PM</p>

              <h3 className="text-xl font-bold mt-6">Follow Us</h3>
              <p>Stay updated on our latest healthy dishes and events by following us on social media:</p>
              <p>
                <a href="#" className="text-blue-500 hover:underline">Instagram</a> | 
                <a href="#" className="text-blue-500 hover:underline ml-2">Facebook</a> | 
                <a href="#" className="text-blue-500 hover:underline ml-2">Twitter</a>
              </p>
            </div>

            <div className="mt-8">
              <p className="italic">
                If you have any specific dietary requirements or would like to host a private event, please don't hesitate to get in touch. We look forward to making your experience at Maison Dining both delicious and nutritious!
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default ContactPage;
