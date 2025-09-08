import "./App.css";
import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <AppHeader />
  <main className="p-0 sm:p-6 w-full max-w-full sm:max-w-2xl mx-auto pt-28 sm:pt-24">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
