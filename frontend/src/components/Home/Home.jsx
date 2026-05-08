import React from "react";
import {
  GraduationCap,
  Users,
  BarChart3,
  CalendarDays,
  ShieldCheck,
  Cloud,
  Smartphone,
  Heart,
  LogIn,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#111827] font-sans">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center px-12 py-10 gap-12">
        {/* Left Side */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm mb-10">
            <GraduationCap className="text-indigo-500" size={20} />
            <span className="text-indigo-500 font-medium">
              Welcome to Smart Learning
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Smart Classroom
            <br />
            Management <span className="text-indigo-500">System</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-2xl mt-8 leading-relaxed max-w-2xl">
            Empowering teachers to teach better and students to learn smarter
            through technology.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-8 mt-14">
            <FeatureCard
              icon={<Users className="text-indigo-500" />}
              title="For Teachers"
              desc="Manage classes, students & more"
              bg="bg-indigo-100"
            />

            <FeatureCard
              icon={<GraduationCap className="text-green-500" />}
              title="For Students"
              desc="Access learning materials & more"
              bg="bg-green-100"
            />

            <FeatureCard
              icon={<BarChart3 className="text-orange-500" />}
              title="Smart Analytics"
              desc="Track progress and performance"
              bg="bg-orange-100"
            />

            <FeatureCard
              icon={<CalendarDays className="text-blue-500" />}
              title="Easy Scheduling"
              desc="Plan, organize & stay on track"
              bg="bg-blue-100"
            />
          </div>

          {/* Login Area */}
          <div className="flex items-center gap-6 mt-14">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-10 py-5 rounded-2xl flex items-center gap-3 text-2xl font-semibold shadow-lg hover:scale-105 transition">
              <LogIn size={24} />
              Login
            </button>

            <p className="text-indigo-500 text-xl font-medium">
              Access your account
            </p>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-[50px] p-10 h-[650px] flex items-center justify-center relative overflow-hidden">
            {/* Screen */}
            <div className="absolute top-20 right-24 bg-white rounded-3xl shadow-xl w-[420px] h-[250px] border-[10px] border-indigo-300">
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl font-bold text-indigo-500 mb-6">
                  Welcome Back!
                </h2>

                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-full bg-indigo-100"></div>
                  <div className="space-y-4">
                    <div className="w-32 h-5 rounded-full bg-gray-200"></div>
                    <div className="w-24 h-5 rounded-full bg-gray-200"></div>
                    <div className="w-28 h-5 rounded-full bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher */}
            <div className="absolute right-8 top-44">
              <div className="w-40 h-72 bg-indigo-500 rounded-[40px] relative">
                <div className="absolute -top-14 left-8 w-24 h-24 bg-[#ffd6b0] rounded-full"></div>
              </div>
            </div>

            {/* Students */}
            <div className="absolute bottom-0 left-8 flex gap-10">
              <Student color="bg-green-400" />
              <Student color="bg-yellow-400" />
              <Student color="bg-blue-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Feature Strip */}
      <section className="px-12 pb-12">
        <div className="bg-white rounded-[40px] shadow-sm p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <BottomFeature
            icon={<ShieldCheck className="text-indigo-500" size={32} />}
            title="Secure & Reliable"
            desc="Your data is safe with us"
            bg="bg-indigo-100"
          />

          <BottomFeature
            icon={<Cloud className="text-green-500" size={32} />}
            title="Cloud Based"
            desc="Access anytime, anywhere"
            bg="bg-green-100"
          />

          <BottomFeature
            icon={<Smartphone className="text-orange-500" size={32} />}
            title="Multi Device"
            desc="Works on desktop, tablet & mobile"
            bg="bg-orange-100"
          />

          <BottomFeature
            icon={<Heart className="text-pink-500" size={32} />}
            title="User Friendly"
            desc="Simple, intuitive & easy to use"
            bg="bg-pink-100"
          />
        </div>
      </section>
    </div>
  );
}

/* ---------- Components ---------- */

function FeatureCard({ icon, title, desc, bg }) {
  return (
    <div className="flex gap-4 items-start">
      <div className={`${bg} p-4 rounded-2xl`}>{icon}</div>

      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-500 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function BottomFeature({ icon, title, desc, bg }) {
  return (
    <div className="flex items-start gap-5">
      <div className={`${bg} p-5 rounded-full`}>{icon}</div>

      <div>
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-gray-500 text-lg mt-3 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Student({ color }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-[#ffd6b0] rounded-full"></div>

      <div className={`w-36 h-52 ${color} rounded-t-[50px] mt-2`}></div>

      <div className="w-44 h-16 bg-gray-200 rounded-xl -mt-6"></div>
    </div>
  );
}
