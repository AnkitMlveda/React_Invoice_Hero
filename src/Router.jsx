import { Route, Routes } from "react-router-dom";
import  Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Support from "./Pages/Support";

export default function Router() {

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/support" element={<Support />} />
      {/* <Route path="*" element={<h2>Not Found!</h2>} /> */}
    </Routes>
  );
}