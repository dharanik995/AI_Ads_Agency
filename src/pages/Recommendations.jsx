import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function RecommendationCard({ title, description }) {
  return (

    <div className="bg-white border rounded-2xl p-6 shadow-sm">

      <h1 className="text-xl font-semibold mb-4">
        {title}
      </h1>

      <p className="text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
}

function Recommendations() {

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

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-4xl font-bold">
              AI Recommendations Engine
            </h1>

            <p className="text-gray-500 mt-2">
              AI-generated advertisement strategy recommendations
            </p>

          </div>

          {/* SECTION 1 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Platform Recommendations
            </h1>

            <div className="grid grid-cols-2 gap-6">

              <RecommendationCard
                title="Instagram Reels"
                description="Instagram Reels are predicted to generate the highest engagement and lead conversion for this account."
              />

              <RecommendationCard
                title="YouTube Shorts"
                description="YouTube Shorts are suitable for audience growth and long-term reach expansion."
              />

            </div>

          </div>

          {/* SECTION 2 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Audience Insights
            </h1>

            <div className="grid grid-cols-2 gap-6">

              <RecommendationCard
                title="Target Audience"
                description="Primary audience detected between age group 18–30 with high purchasing behavior and strong social media interaction."
              />

              <RecommendationCard
                title="Audience Interests"
                description="Audience highly interested in fitness, fashion, lifestyle, and sports-related content."
              />

            </div>

          </div>

          {/* SECTION 3 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Content Strategy Recommendations
            </h1>

            <div className="grid grid-cols-2 gap-6">

              <RecommendationCard
                title="Short-form Video Strategy"
                description="Use high-quality short-form videos with trending audio and strong CTA placement to improve conversion probability."
              />

              <RecommendationCard
                title="Hashtag Optimization"
                description="Use trending and niche hashtags together to improve organic reach and discoverability."
              />

            </div>

          </div>

          {/* SECTION 4 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Budget & Posting Recommendations
            </h1>

            <div className="grid grid-cols-2 gap-6">

              <RecommendationCard
                title="Recommended Ad Budget"
                description="Suggested monthly advertisement spending is $2,500 for optimal campaign performance and ROI."
              />

              <RecommendationCard
                title="Best Posting Time"
                description="AI predicts highest engagement between 6 PM and 8 PM on weekdays."
              />

            </div>

          </div>

          {/* SECTION 5 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              AI Strategic Insights
            </h1>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-green-100 text-green-700 p-5 rounded-2xl">
                ✔ High lead generation capability detected
              </div>

              <div className="bg-blue-100 text-blue-700 p-5 rounded-2xl">
                ✔ Strong ROI potential predicted
              </div>

              <div className="bg-purple-100 text-purple-700 p-5 rounded-2xl">
                ✔ Viral campaign probability is high
              </div>

              <div className="bg-orange-100 text-orange-700 p-5 rounded-2xl">
                ✔ Audience engagement trend increasing
              </div>

            </div>

          </div>

          {/* Final Summary */}
          <div className="bg-purple-100 border border-purple-200 p-6 rounded-2xl">

            <h1 className="text-xl font-semibold text-purple-700 mb-4">
              Final AI Recommendation Summary
            </h1>

            <p className="text-gray-700 leading-8">

              Based on feature engineering,
              audience analysis,
              campaign prediction,
              engagement trends,
              and historical advertisement performance,
              the AI recommendation engine suggests
              focusing primarily on Instagram Reels
              and short-form content strategies
              with optimized posting schedules
              and targeted advertisement spending.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Recommendations;