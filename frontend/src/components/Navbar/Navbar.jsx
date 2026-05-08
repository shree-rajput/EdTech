import React from "react";
import { Link } from "react-router-dom";
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

function Navbar() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#111827] font-sans">
      <nav className="flex items-center justify-between px-12 py-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-500 p-3 rounded-2xl text-white">
            <GraduationCap size={30} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Smart<span className="text-indigo-500">Class</span>
            </h1>
            <p className="text-gray-500 text-sm">Smart Classroom Management</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-14 text-lg font-medium">
          <a
            href="/"
            className="text-indigo-500 border-b-2 border-indigo-500 pb-1"
          >
            Home
          </a>
          <a href="/">Features</a>
          <a href="/">About</a>
          <a href="/">Benefits</a>
          <a href="/">Contact</a>
        </div>

        {/* Login Button */}
        <button className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-4 rounded-2xl flex items-center gap-3 text-lg font-semibold shadow-lg hover:scale-105 transition">
          <LogIn size={20} />
          Login
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
