import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AnalyzeAccount from "./pages/AnalyzeAccount";
import Analytics from "./pages/Analytics";
import Predictions from "./pages/Predictions";
import Recommendations from "./pages/Recommendations";
import Comparisons from "./pages/Comparisons";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/analyze"
        element={<AnalyzeAccount />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      <Route
        path="/predictions"
        element={<Predictions />}
      />

      <Route
        path="/recommendations"
        element={<Recommendations />}
      />

      <Route
        path="/comparisons"
        element={<Comparisons />}
      />

    </Routes>

  );
}

export default App;