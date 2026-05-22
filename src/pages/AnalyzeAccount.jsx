import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AnalyzeAccount() {

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

          {/* Title */}
          <div className="mb-8">

            <h1 className="text-4xl font-bold">
              Analyze New Account
            </h1>

            <p className="text-gray-500 mt-2">
              Enter social media account details to analyze performance
            </p>

          </div>

          {/* Input Grid */}
          <div className="grid grid-cols-2 gap-6">

            {/* Instagram */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-xl font-semibold mb-5">
                Instagram
              </h1>

              <input
                type="text"
                placeholder="@nike"
                className="w-full border rounded-xl px-4 py-3 outline-none"
              />

              <p className="text-sm text-gray-500 mt-3">
                Example: @nike
              </p>

            </div>

            {/* YouTube */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-xl font-semibold mb-5">
                YouTube
              </h1>

              <input
                type="text"
                placeholder="@nikechannel"
                className="w-full border rounded-xl px-4 py-3 outline-none"
              />

              <p className="text-sm text-gray-500 mt-3">
                Example: @nikechannel
              </p>

            </div>

            {/* Facebook */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-xl font-semibold mb-5">
                Facebook
              </h1>

              <input
                type="text"
                placeholder="Nike"
                className="w-full border rounded-xl px-4 py-3 outline-none"
              />

              <p className="text-sm text-gray-500 mt-3">
                Example: Nike
              </p>

            </div>

            {/* TikTok */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h1 className="text-xl font-semibold mb-5">
                TikTok
              </h1>

              <input
                type="text"
                placeholder="@nike"
                className="w-full border rounded-xl px-4 py-3 outline-none"
              />

              <p className="text-sm text-gray-500 mt-3">
                Example: @nike
              </p>

            </div>

          </div>

          {/* Analyze Button */}
          <div className="mt-8">

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-2xl text-lg transition">

              Analyze Account

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalyzeAccount;