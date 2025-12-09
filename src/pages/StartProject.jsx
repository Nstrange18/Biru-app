import { useForm } from "react-hook-form";
import NavBar from "../component/NavBar";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const StartProject = () => {
  const formRef = useRef();
  const startProjectSchema = {
    fullName: z
      .string()
      .nonempty("Full Name is required.")
      .min(5, "Full Name must be at least 5 characters."),
    email: z
      .string()
      .nonempty("Email is required.")
      .email("Invalid email address."),
    companyName: z.string().optional(),
    projectType: z.string().optional(),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    projectDetails: z
      .string()
      .nonempty("Project Details are required.")
      .min(20, "Project Details must be at least 20 characters."),
    discoveryCall: z.string().optional(),
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(z.object(startProjectSchema)) });

  const sendSubmit = async (data) => {
    console.log("Start a project", data);

    try {
      await emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_START_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
          toast.success("Project submission successful!", result);
          formRef.current.reset();
        });
    } catch (error) {
      toast.error("Project submission failed.", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      {/* Header */}
      <div className="pt-32 px-6 md:px-20">
        <h1 className="text-5xl font-bold mb-4">Start a Project</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Tell us about your project and your goals. We'll review your
          submission and get back to you within 1 hour.
        </p>
      </div>

      {/* Form */}
      <div className="mt-12 px-6 md:px-20 md:w-3/4">
        <form
          ref={formRef}
          onSubmit={handleSubmit(sendSubmit)}
          className="bg-white p-8 rounded-xl shadow space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              {...register("fullName")}
              className="w-full p-3 rounded border"
              name="fullName"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}

            <input
              {...register("email")}
              className="w-full p-3 rounded border"
              name="email"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <input
            {...register("companyName")}
            className="w-full p-3 rounded border"
            name="companyName"
            placeholder="Company Name (optional)"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
          )}

          {/* Project Type */}
          <select
            {...register("projectType")}
            name="projectType"
            className="w-full p-3 rounded border"
          >
            <option>Type of Project</option>
            <option>Website Development</option>
            <option>Web App Development</option>
            <option>AI & Automation</option>
            <option>Cloud Deployment</option>
            <option>Multiple Services</option>
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-sm">{errors.projectType.message}</p>
          )}

          {/* Budget */}
          <select
            {...register("budget")}
            className="w-full p-3 rounded border"
            name="budget"
          >
            <option>Estimated Budget</option>
            <option>$0 – $500 (Starter)</option>
            <option>$500 – $2,000 (Professional)</option>
            <option>$2,000 – $5,000 (Advanced)</option>
            <option>$5,000+ (Enterprise)</option>
          </select>
          {errors.budget && (
            <p className="text-red-500 text-sm">{errors.budget.message}</p>
          )}

          {/* Timeline */}
          <select
            {...register("timeline")}
            name="timeline"
            className="w-full p-3 rounded border"
          >
            <option>Project Timeline</option>
            <option>ASAP</option>
            <option>1–2 weeks</option>
            <option>3–4 weeks</option>
            <option>1–3 months</option>
          </select>
          {errors.timeline && (
            <p className="text-red-500 text-sm">{errors.timeline.message}</p>
          )}

          {/* Description */}
          <textarea
            {...register("projectDetails")}
            name="projectDetails"
            className="w-full p-3 rounded border h-40"
            placeholder="Tell us about your project, goals, or any important details."
          ></textarea>
          {errors.projectDetails && (
            <p className="text-red-500 text-sm">
              {errors.projectDetails.message}
            </p>
          )}

          {/* Call Booking */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Would you like to schedule a free discovery call?
            </label>
            <select
              {...register("discoveryCall")}
              name="discoveryCall"
              className="w-full p-3 rounded border"
            >
              <option>Select an option</option>
              <option>Yes, schedule a call</option>
              <option>No, email is fine</option>
            </select>
            {errors.discoveryCall && (
              <p className="text-red-500 text-sm">
                {errors.discoveryCall.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <button
            disabled={isSubmitting}
            className={`px-8 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition w-full mr-2 md:w-auto ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Project"}
          </button>

          <button
            type="button"
            onClick={() =>
              window.open(
                "https://calendly.com/nwubachukwuemelie/30min",
                "_blank"
              )
            }
            className="px-8 py-3 border border-blue-800 text-blue-800 rounded-lg hover:bg-blue-50 transition w-full md:w-auto mt-3"
          >
            Book a Call Instead
          </button>
        </form>
      </div>

      {/* How We Work */}
      <div className="mt-20 px-6 md:px-20 pb-20">
        <h2 className="text-3xl font-bold mb-8">Our Process</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <Step
            number="1"
            title="Discovery"
            text="We learn about your goals and requirements."
          />
          <Step
            number="2"
            title="Planning"
            text="We define the roadmap, timeline and deliverables."
          />
          <Step
            number="3"
            title="Build"
            text="We design, develop and test your solution."
          />
          <Step
            number="4"
            title="Deploy"
            text="We launch your product and provide ongoing support."
          />
        </div>
      </div>
    </div>
  );
};

const Step = ({ number, title, text }) => (
  <div className="p-6 bg-white shadow rounded-xl">
    <p className="text-4xl font-bold text-blue-800 mb-3">{number}</p>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default StartProject;
