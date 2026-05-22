import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function FeatureCard({ title, value, description }) {
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

function Analytics() {

  return (

    <div className="flex bg-[#F5F7FB] min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-8">

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-4xl font-bold">
              Feature Extraction & Analytics
            </h1>

            <p className="text-gray-500 mt-2">
              Extracted social media features for AI prediction
            </p>

          </div>

          {/* SECTION 1 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Core Social Metrics
            </h1>

            <div className="grid grid-cols-4 gap-6">

              <FeatureCard
                title="Followers Count"
                value="12.5M"
                description="Total followers/subscribers"
              />

              <FeatureCard
                title="Following Count"
                value="138"
                description="Following count"
              />

              <FeatureCard
                title="Total Posts"
                value="1,243"
                description="Number of posts/videos"
              />

              <FeatureCard
                title="Average Likes"
                value="8.7M"
                description="Average likes"
              />

              <FeatureCard
                title="Average Comments"
                value="245K"
                description="Average comments"
              />

              <FeatureCard
                title="Average Shares"
                value="87K"
                description="Average shares"
              />

              <FeatureCard
                title="Average Views"
                value="23.6M"
                description="Average video/post views"
              />

            </div>

          </div>

          {/* SECTION 2 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Engagement Metrics
            </h1>

            <div className="grid grid-cols-4 gap-6">

              <FeatureCard
                title="Engagement Rate"
                value="7.35%"
                description="Audience interaction rate"
              />

              <FeatureCard
                title="Reach"
                value="45.2M"
                description="Total audience reach"
              />

              <FeatureCard
                title="Impressions"
                value="82.7M"
                description="Content impressions"
              />

              <FeatureCard
                title="Watch Time"
                value="68 sec"
                description="Viewer retention/watch duration"
              />

              <FeatureCard
                title="Posting Frequency"
                value="5/week"
                description="Posting consistency"
              />

            </div>

          </div>

          {/* SECTION 3 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              Marketing Metrics
            </h1>

            <div className="grid grid-cols-4 gap-6">

              <FeatureCard
                title="CTR"
                value="4.38%"
                description="Click-through rate"
              />

              <FeatureCard
                title="Conversion Rate"
                value="5.6%"
                description="Lead/customer conversion rate"
              />

              <FeatureCard
                title="Ad Spend"
                value="$2,500"
                description="Advertisement spending"
              />

              <FeatureCard
                title="Revenue Generated"
                value="$18,000"
                description="Revenue generated"
              />

            </div>

          </div>

          {/* SECTION 4 */}
          <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6">
              AI Engineered Features
            </h1>

            <div className="grid grid-cols-4 gap-6">

              <FeatureCard
                title="Hashtag Usage"
                value="82/100"
                description="Hashtag effectiveness"
              />

              <FeatureCard
                title="Sentiment Score"
                value="0.87"
                description="Audience positivity"
              />

              <FeatureCard
                title="Audience Growth Rate"
                value="2.58%"
                description="Growth percentage"
              />

              <FeatureCard
                title="Content Quality Score"
                value="91/100"
                description="AI-generated content quality"
              />

              <FeatureCard
                title="Virality Score"
                value="78/100"
                description="Viral content probability"
              />

              <FeatureCard
                title="Audience Quality Index"
                value="90/100"
                description="Audience authenticity & quality"
              />

              <FeatureCard
                title="ROI Prediction Feature"
                value="230%"
                description="Return on investment"
              />

              <FeatureCard
                title="Follower Growth Trend"
                value="+18%"
                description="30/60/90 days growth"
              />

            </div>

          </div>

          {/* Final Summary */}
          <div className="bg-purple-100 border border-purple-200 p-6 rounded-2xl">

            <h1 className="text-xl font-semibold text-purple-700 mb-4">
              Feature Engineering Summary
            </h1>

            <p className="text-gray-700 leading-7">

              All extracted social media analytics,
              engagement metrics,
              marketing metrics,
              and engineered AI features
              are now processed and ready
              for ML prediction models.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;