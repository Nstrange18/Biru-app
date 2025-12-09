import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../component/NavBar";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      <div className="pt-32 px-6 md:px-20">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Modern engineering for businesses that want to scale — websites, apps,
          cloud solutions and AI-powered systems tailored to your growth.
        </p>
      </div>

      <div className="mt-12 px-6 md:px-20 grid md:grid-cols-3 gap-8">
        <ServiceCard
          title="Website Development"
          text="Custom websites crafted for performance, user experience and brand identity. Fast, responsive and built to convert."
        />
        <ServiceCard
          title="Web App Development"
          text="Dashboards, CRMs, portals, inventory systems — full-stack MERN engineering designed for modern use-cases."
        />
        <ServiceCard
          title="AI & Automation"
          text="Custom chatbots, workflow automation and AI-powered tools that save time and accelerate business efficiency."
        />
        <ServiceCard
          title="Cloud Deployment"
          text="Cloud setup, optimization, CI/CD pipelines and secure application hosting using modern cloud infrastructure."
        />
      </div>

      {/* CTA */}
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-gray-600 mb-7">
          Let's build something exceptional together.
        </p>
        <button className="px-8 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => navigate("/start-project")}>
          Start a Project
        </button>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, text }) => (
  <div className="p-6 bg-white rounded-xl shadow">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default Services;
