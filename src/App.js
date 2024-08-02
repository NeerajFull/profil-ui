

import React from "react";
import ActivityChart from "./components/ActivityChart";
import CircularProgressBar from "./components/CircularProgressBar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
