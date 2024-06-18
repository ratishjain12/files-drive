import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AuthGuard from "./gaurds/AuthGuard";
import GuestGuard from "./gaurds/GuestGuard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <GuestGuard>
              <Login />
            </GuestGuard>
          }
        />
        <Route
          path="/register"
          element={
            <GuestGuard>
              <Register />
            </GuestGuard>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
