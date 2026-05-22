import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const lineData = [
  { name: "1 May", leads: 10 },
  { name: "5 May", leads: 30 },
  { name: "10 May", leads: 60 },
  { name: "15 May", leads: 55 },
  { name: "20 May", leads: 90 },
  { name: "25 May", leads: 70 },
  { name: "30 May", leads: 100 },
];

const pieData = [
  { name: "Instagram", value: 45 },
  { name: "YouTube", value: 30 },
  { name: "Facebook", value: 15 },
  { name: "TikTok", value: 10 },
];

const COLORS = [
  "#7C3AED",
  "#EC4899",
  "#3B82F6",
  "#111827",
];

function Dashboard() {
  return (

    <div className="flex bg-[#F5F7FB] min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-8">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-8">
            Overview
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-4 gap-6">

            <StatCard
              title="Total Clients"
              value="24"
              growth="+12% this month"
            />

            <StatCard
              title="Accounts Analyzed"
              value="56"
              growth="+18% this month"
            />

            <StatCard
              title="Predicted Leads"
              value="1,248"
              growth="+22% this month"
            />

            <StatCard
              title="Avg. ROI Predicted"
              value="186%"
              growth="+15% this month"
            />

          </div>

          {/* Graph Section */}
          <div className="grid grid-cols-2 gap-6 mt-8">

            {/* Line Chart */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <div className="flex justify-between items-center mb-5">

                <h1 className="text-lg font-semibold">
                  Leads Prediction (This Month)
                </h1>

                <button className="border px-4 py-2 rounded-lg text-sm">
                  This Month
                </button>

              </div>

              <ResponsiveContainer width="100%" height={300}>

                <LineChart data={lineData}>

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="leads"
                    stroke="#7C3AED"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-lg font-semibold mb-5">
                Top Platforms
              </h1>

              <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    dataKey="value"
                  >

                    {pieData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* Recent Analyses */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm mt-8">

            <h1 className="text-xl font-semibold mb-6">
              Recent Analyses
            </h1>

            <table className="w-full">

              <thead>

                <tr className="text-left text-gray-500 border-b">

                  <th className="pb-4">Client Name</th>

                  <th className="pb-4">Platform</th>

                  <th className="pb-4">Analyzed On</th>

                  <th className="pb-4">Lead Prediction</th>

                  <th className="pb-4">ROI Prediction</th>

                  <th className="pb-4">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td className="py-5">Nike Official</td>

                  <td className="py-5">Instagram</td>

                  <td className="py-5">22 May 2026</td>

                  <td className="py-5">84%</td>

                  <td className="py-5">210%</td>

                  <td className="py-5">

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-sm">
                      Completed
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;