import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function PredictionCard({ title, value, description }) {
  return (

    <div className="bg-white border rounded-2xl p-5 shadow-sm">

      <h1 className="text-lg font-semibold">
        {title}
      </h1>

      <h2 className="text-3xl font-bold mt-3 text-purple-600">
        {value}
      </h2>

      <p className="text-gray-500 text-sm mt-3">
        {description}
      </p>

    </div>
  );
}

function Predictions() {

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
              AI Prediction Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              ML-generated advertisement performance predictions
            </p>

          </div>

          {/* SECTION 1 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Performance Overview
            </h1>

            <div className="grid grid-cols-4 gap-6">

              <PredictionCard
                title="Overall Ad Performance"
                value="88/100"
                description="Overall advertisement quality score"
              />

              <PredictionCard
                title="Account Quality"
                value="91/100"
                description="Social account quality score"
              />

              <PredictionCard
                title="Audience Quality"
                value="90/100"
                description="Audience authenticity & engagement"
              />

              <PredictionCard
                title="Content Quality"
                value="89/100"
                description="AI-generated content quality"
              />

            </div>

          </div>

          {/* SECTION 2 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Lead & Conversion Predictions
            </h1>

            <div className="grid grid-cols-4 gap-6">

              <PredictionCard
                title="Lead Generation Probability"
                value="84%"
                description="Chance of generating leads"
              />

              <PredictionCard
                title="Expected Leads"
                value="1,250/month"
                description="Estimated monthly leads"
              />

              <PredictionCard
                title="Conversion Rate Prediction"
                value="5.6%"
                description="Expected customer conversion rate"
              />

              <PredictionCard
                title="Campaign Success Probability"
                value="88%"
                description="Overall campaign success chance"
              />

            </div>

          </div>

          {/* SECTION 3 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Financial Predictions
            </h1>

            <div className="grid grid-cols-3 gap-6">

              <PredictionCard
                title="Estimated ROI"
                value="230%"
                description="Expected return on investment"
              />

              <PredictionCard
                title="Revenue Prediction"
                value="$18,000"
                description="Predicted campaign revenue"
              />

              <PredictionCard
                title="Recommended Ad Spend"
                value="$2,500"
                description="Suggested advertisement budget"
              />

            </div>

          </div>

          {/* SECTION 4 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              AI Insights & Recommendations
            </h1>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white border rounded-2xl p-6 shadow-sm">

                <h1 className="text-xl font-semibold mb-6">
                  Platform Recommendations
                </h1>

                <div className="space-y-4">

                  <div className="bg-purple-100 text-purple-700 p-4 rounded-xl">
                    ✔ Instagram Reels recommended for highest engagement
                  </div>

                  <div className="bg-blue-100 text-blue-700 p-4 rounded-xl">
                    ✔ YouTube Shorts suitable for audience growth
                  </div>

                  <div className="bg-green-100 text-green-700 p-4 rounded-xl">
                    ✔ Best posting time predicted: 7 PM
                  </div>

                </div>

              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-sm">

                <h1 className="text-xl font-semibold mb-6">
                  Audience Insights
                </h1>

                <div className="space-y-4">

                  <div className="bg-orange-100 text-orange-700 p-4 rounded-xl">
                    ✔ Audience age group: 18–30
                  </div>

                  <div className="bg-pink-100 text-pink-700 p-4 rounded-xl">
                    ✔ High purchasing behavior detected
                  </div>

                  <div className="bg-indigo-100 text-indigo-700 p-4 rounded-xl">
                    ✔ Viral content potential identified
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Final Summary */}
          <div className="bg-purple-100 border border-purple-200 p-6 rounded-2xl">

            <h1 className="text-xl font-semibold text-purple-700 mb-4">
              Final AI Prediction Summary
            </h1>

            <p className="text-gray-700 leading-8">

              Based on extracted social media analytics,
              audience engagement,
              marketing metrics,
              feature engineering,
              and historical campaign patterns,
              the AI prediction engine forecasts
              strong advertisement performance,
              high lead generation capability,
              and excellent ROI potential
              for this account.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Predictions;