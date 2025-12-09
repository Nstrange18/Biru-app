import { Link } from "react-router-dom";
import NavBar from "../component/NavBar";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      <div className="pt-32 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Get Started</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          Let's walk you through how Biru can help grow and transform your
          business.
        </p>

        <Link to="/book-consultation">
          <button className="mt-8 px-10 py-4 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition">
            Book a Free Consultation
          </button>
        </Link>
      </div>

      <div className="mt-20 px-6 md:px-20 grid md:grid-cols-3 gap-8 mb-20">
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">1. Discovery</h2>
          <p className="text-gray-600">
            We analyze your business needs and challenges.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">2. Planning</h2>
          <p className="text-gray-600">
            We create a roadmap tailored specifically to you.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">3. Execution</h2>
          <p className="text-gray-600">
            Our team executes with speed, precision and transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
