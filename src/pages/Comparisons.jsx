import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  Users,
  TrendingUp,
  Target,
  DollarSign,
  Trophy,
} from "lucide-react";

function MetricCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-4">
      
      <div className="bg-purple-100 p-4 rounded-2xl">
        {icon}
      </div>

      <div>
        <h1 className="text-gray-500 text-sm">
          {title}
        </h1>

        <h2 className="text-3xl font-bold mt-1">
          {value}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          {subtitle}
        </p>
      </div>

    </div>
  );
}

function Comparisons() {

  return (

    <div className="flex bg-[#F5F7FB] min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="ml-64 flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-8">

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-4xl font-bold">
              Platform Comparison Page
            </h1>

            <p className="text-gray-500 mt-2">
              Compare performance across multiple platforms
            </p>

          </div>

          {/* Table + Chart */}
          <div className="grid grid-cols-3 gap-6 mb-10">

            {/* Table */}
            <div className="col-span-2 bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-2xl font-semibold mb-6">
                Compare Platforms
              </h1>

              <table className="w-full">

                <thead>

                  <tr className="border-b text-left text-gray-500">

                    <th className="pb-4">Platform</th>
                    <th className="pb-4">Followers</th>
                    <th className="pb-4">Engagement</th>
                    <th className="pb-4">Reach</th>
                    <th className="pb-4">CTR</th>
                    <th className="pb-4">Leads</th>
                    <th className="pb-4">ROI</th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b">

                    <td className="py-5 flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                      Instagram
                    </td>

                    <td>12.5M</td>
                    <td>7.35%</td>
                    <td>45.2M</td>
                    <td>4.38%</td>

                    <td className="text-purple-600 font-semibold">
                      84%
                    </td>

                    <td className="text-green-600 font-semibold">
                      210%
                    </td>

                  </tr>

                  <tr className="border-b">

                    <td className="py-5 flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      YouTube
                    </td>

                    <td>3.21M</td>
                    <td>5.12%</td>
                    <td>32.6M</td>
                    <td>3.21%</td>

                    <td className="text-pink-500 font-semibold">
                      72%
                    </td>

                    <td className="text-green-600 font-semibold">
                      180%
                    </td>

                  </tr>

                  <tr className="border-b">

                    <td className="py-5 flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                      Facebook
                    </td>

                    <td>2.45M</td>
                    <td>3.21%</td>
                    <td>18.7M</td>
                    <td>2.11%</td>

                    <td className="text-blue-600 font-semibold">
                      58%
                    </td>

                    <td className="text-green-600 font-semibold">
                      140%
                    </td>

                  </tr>

                  <tr>

                    <td className="py-5 flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-black"></div>
                      TikTok
                    </td>

                    <td>1.98M</td>
                    <td>8.91%</td>
                    <td>25.3M</td>
                    <td>5.12%</td>

                    <td className="font-semibold">
                      76%
                    </td>

                    <td className="text-green-600 font-semibold">
                      190%
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

            {/* Simple Chart */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-2xl font-semibold mb-8">
                Lead Probability Comparison
              </h1>

              <div className="space-y-6">

                <div>

                  <div className="flex justify-between mb-2">
                    <span>Instagram</span>
                    <span>84%</span>
                  </div>

                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-[84%] h-4 bg-purple-600 rounded-full"></div>
                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">
                    <span>YouTube</span>
                    <span>72%</span>
                  </div>

                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-[72%] h-4 bg-pink-500 rounded-full"></div>
                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">
                    <span>Facebook</span>
                    <span>58%</span>
                  </div>

                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-[58%] h-4 bg-blue-500 rounded-full"></div>
                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">
                    <span>TikTok</span>
                    <span>76%</span>
                  </div>

                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-[76%] h-4 bg-black rounded-full"></div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-4 gap-6 mb-10">

            <MetricCard
              icon={<Users className="text-purple-600" />}
              title="Total Followers"
              value="20.14M"
              subtitle="Across all platforms"
            />

            <MetricCard
              icon={<TrendingUp className="text-blue-600" />}
              title="Avg Engagement"
              value="6.15%"
              subtitle="Average engagement rate"
            />

            <MetricCard
              icon={<Target className="text-green-600" />}
              title="Total Reach"
              value="121.8M"
              subtitle="Estimated total reach"
            />

            <MetricCard
              icon={<DollarSign className="text-pink-600" />}
              title="Avg ROI"
              value="180%"
              subtitle="Average ROI prediction"
            />

          </div>

          {/* Bottom Insights */}
          <div className="grid grid-cols-3 gap-6">

            {/* Engagement */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-xl font-semibold mb-6">
                Engagement Insights
              </h1>

              <div className="space-y-5">

                <div className="bg-purple-100 text-purple-700 p-4 rounded-xl">
                  ✔ Instagram engagement is strong
                </div>

                <div className="bg-pink-100 text-pink-700 p-4 rounded-xl">
                  ✔ YouTube audience growth stable
                </div>

                <div className="bg-black text-white p-4 rounded-xl">
                  ✔ TikTok engagement highest
                </div>

              </div>

            </div>

            {/* ROI */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-xl font-semibold mb-6">
                ROI Insights
              </h1>

              <div className="space-y-5">

                <div className="bg-green-100 text-green-700 p-4 rounded-xl">
                  ✔ Instagram highest ROI prediction
                </div>

                <div className="bg-blue-100 text-blue-700 p-4 rounded-xl">
                  ✔ TikTok strong conversion potential
                </div>

                <div className="bg-orange-100 text-orange-700 p-4 rounded-xl">
                  ✔ Facebook moderate ROI
                </div>

              </div>

            </div>

            {/* Key Insights */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-xl font-semibold mb-6">
                Key Insights
              </h1>

              <div className="space-y-5">

                <div className="flex gap-3">
                  <Trophy className="text-purple-600" />
                  <p>Instagram best overall platform</p>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="text-green-600" />
                  <p>TikTok highest engagement rate</p>
                </div>

                <div className="flex gap-3">
                  <Target className="text-blue-600" />
                  <p>Instagram highest lead probability</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Comparisons;