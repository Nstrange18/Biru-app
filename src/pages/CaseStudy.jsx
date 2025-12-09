import NavBar from "../component/NavBar";

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      {/* Hero */}
      <div className="pt-32 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Case Study</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          How Biru helped a global company reduce downtime by 47% and increase
          operational efficiency through cloud automation.
        </p>
      </div>

      {/* Mock Case Study Content */}
      <div className="mt-16 px-6 md:px-20 space-y-10 pb-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Challenge</h2>
          <p className="text-gray-600 max-w-3xl">
            The company struggled with slow deployment times, legacy systems,
            and high infrastructure costs.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-gray-600 max-w-3xl">
            We implemented a containerized architecture, automated CI/CD
            pipelines, and migrated core services to AWS.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Results</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>47% faster deployment times</li>
            <li>Annual saving of $500,000+</li>
            <li>99.9% system uptime</li>
            <li>Streamlined workflows for 10+ teams</li>
          </ul>
        </div>

        <img
          src="/case-study-diagram.png"
          alt="Biru cloud automation case study architecture and results"
          className="w-full h-auto rounded-xl shadow-md object-contain"
        />
      </div>
    </div>
  );
};

export default CaseStudy;
