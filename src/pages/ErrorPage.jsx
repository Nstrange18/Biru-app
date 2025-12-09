// src/pages/NotFound.jsx
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../component/NavBar";

const  ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <NavBar />

      <div className="pt-32 px-6 md:px-20 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row gap-8">
          {/* Left: 404 + text */}
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700 mb-2">
              Biru Cloud
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              This page drifted into the cloud.
            </h2>
            <p className="text-slate-600 mb-6">
              The link you followed doesn&apos;t exist or has moved.  
              Let&apos;s get you back to something useful—like starting a project
              or booking a quick call with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate("/")}
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-600 transition"
              >
                Back to Home
              </button>

              <Link
                to="/get-started"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-blue-700 text-blue-700 font-medium hover:bg-blue-50 transition"
              >
                Start a Project
              </Link>

              <Link
                to="/book-consultation"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition"
              >
                Book a Call
              </Link>
            </div>
          </div>

          {/* Right: simple “cloudy” panel */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-40 md:h-56 rounded-xl bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100 border border-slate-100 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-700/10 flex items-center justify-center mb-3">
                <span className="text-3xl">☁️</span>
              </div>
              <p className="text-sm font-medium text-slate-700">
                Reliable in the cloud.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Even when a page goes missing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip (optional but on-brand) */}
      <div className="mt-16 pb-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} hello@birutech.com. All rights reserved.
      </div>
    </div>
  );
};

export default ErrorPage;
