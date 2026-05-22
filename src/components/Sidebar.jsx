import {
  LayoutDashboard,
  Search,
  BarChart3,
  Brain,
  Lightbulb,
  GitCompare,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  return (

    <div className="w-64 bg-[#111827] text-white h-screen fixed left-0 top-0 p-6">

      {/* Logo */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold text-purple-500">
          AdPredict AI
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          AI Ads Analytics Platform
        </p>

      </div>

      {/* Menu */}
      <ul className="space-y-3">

        {/* Dashboard */}
        <Link to="/">

          <li
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
            ${
              location.pathname === "/"
                ? "bg-purple-600"
                : "hover:bg-slate-800"
            }`}
          >

            <LayoutDashboard size={20} />

            Dashboard

          </li>

        </Link>

        {/* Analyze */}
        <Link to="/analyze">

          <li
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
            ${
              location.pathname === "/analyze"
                ? "bg-purple-600"
                : "hover:bg-slate-800"
            }`}
          >

            <Search size={20} />

            Analyze Account

          </li>

        </Link>

        {/* Feature Extraction */}
        <Link to="/analytics">

          <li
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
            ${
              location.pathname === "/analytics"
                ? "bg-purple-600"
                : "hover:bg-slate-800"
            }`}
          >

            <BarChart3 size={20} />

            Feature Extraction

          </li>

        </Link>

        {/* Predictions */}
        <Link to="/predictions">

          <li
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
            ${
              location.pathname === "/predictions"
                ? "bg-purple-600"
                : "hover:bg-slate-800"
            }`}
          >

            <Brain size={20} />

            Predictions

          </li>

        </Link>

        {/* Recommendations */}
        <Link to="/recommendations">

          <li
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
            ${
              location.pathname === "/recommendations"
                ? "bg-purple-600"
                : "hover:bg-slate-800"
            }`}
          >

            <Lightbulb size={20} />

            Recommendations

          </li>

        </Link>

        {/* Comparisons */}
        <Link to="/comparisons">

          <li
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
            ${
              location.pathname === "/comparisons"
                ? "bg-purple-600"
                : "hover:bg-slate-800"
            }`}
          >

            <GitCompare size={20} />

            Comparisons

          </li>

        </Link>

      </ul>

      {/* Bottom Section */}
      <div className="absolute bottom-8 left-6 right-6">

        <div className="bg-slate-800 p-4 rounded-2xl">

          <h1 className="font-semibold">
            AI Prediction Engine
          </h1>

          <p className="text-gray-400 text-sm mt-2 leading-6">
            Analyze social media accounts and predict
            advertisement performance using AI.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;