"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import MainLayouts from "@/components/layouts/MainLayouts";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("User registered successfully!");
        setFormData({ username: '', email: '', password: '', confirmPassword: '' }); 
        setTimeout(() => setMessage(''), 3000); 
      } else {
        setMessage(data.error || "Failed to register user.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        setMessage('An unexpected error occurred: ' + error.message);
      } else {
        console.error('Unexpected error:', error);
        setMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <MainLayouts>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/4/13/0/FNK_Healthy-Dishes-Grown-Up-Needs-to-Know-Opener-H_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1492113444956.jpeg")',
          fontFamily: "Times New Roman, serif",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 bg-white bg-opacity-90 p-10 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Sign Up</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>

            {/* Message */}
            {message && <p className="text-center text-sm text-red-600 mt-4">{message}</p>}

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </MainLayouts>
  );
};

export default SignupPage;
