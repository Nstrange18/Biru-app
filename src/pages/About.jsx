import NavBar from "../component/NavBar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      <div className="pt-32 px-6 md:px-20">
        <h1 className="text-5xl font-bold mb-6">About Biru</h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Biru is a modern engineering studio helping businesses grow with
          scalable websites, cloud systems and AI-powered automation. We turn
          ideas into fast, intelligent, high-quality digital experiences.
        </p>
      </div>

      {/* Mission */}
      <div className="mt-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower businesses with digital solutions that simplify operations,
            accelerate productivity and unlock new growth potentials.
          </p>
        </div>

        <img
          src="/aboutus.png"
          width={400}
          className=" h-60 object-cover rounded-lg"
        />
      </div>

      {/* Values */}
      <div className="mt-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard title="Innovation" text="We design future-ready solutions and embrace cutting-edge tools." />
          <ValueCard title="Excellence" text="Clean, scalable and high-quality engineering is our standard." />
          <ValueCard title="Integrity" text="We build with honesty, transparency and long-term trust in mind." />
        </div>
      </div>

      {/* Founder Section */}
      <div className="mt-20 px-6 md:px-20 pb-20">
        <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>

        <p className="text-gray-600 max-w-3xl">
          Biru was founded by a multi-disciplinary software engineer and creative
          strategist with experience in web development, cloud computing, automation
          and business technology. With a deep passion for innovation and simplicity,
          Biru blends engineering precision with design clarity to deliver meaningful
          digital solutions.
        </p>
      </div>
    </div>
  );
};

const ValueCard = ({ title, text }) => (
  <div className="p-6 bg-white rounded-xl shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default About;
