import { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../component/NavBar";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const schema = {
    user_name: z.string().min(1, "Name is required."),
    user_email: z
      .string()
      .min(1, "Email is required.")
      .email("Invalid email address."),
    business_name: z.string().optional(),
    service_needed: z.string().optional(),
    message: z
      .string()
      .nonempty("Message is required.")
      .min(10, "Message must be at least 10 characters."),
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(z.object(schema)),
  });
  const formRef = useRef();

  const sendEmail = async (data) => {
    console.log("Contact us message: ", data);
    try {
      await emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
          toast.success("Message successfully sent!", result);
          formRef.current.reset(); // clear form
        });
    } catch (err) {
      // 🔍 Log full error for debugging
      console.error("EmailJS error:", err);

      // EmailJS usually returns { text: "some message" }
      const message =
        err?.text ||
        err?.message ||
        "Unexpected error from EmailJS.";

      // Show a more useful toast
      toast.error("Something went wrong. Please try again.", {
        description: String(message),
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      <div className="pt-32 px-6 md:px-20 grid md:grid-cols-2 items-start gap-10">
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit(sendEmail)}
            className="space-y-3"
          >
            <input
              name="user_name"
              {...register("user_name", { required: true })}
              className="w-full p-3 rounded border"
              placeholder="Your Name"
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm">{errors.user_name.message}</p>
            )}

            <input
              name="user_email"
              {...register("user_email", { required: true })}
              className="w-full p-3 rounded border"
              placeholder="Email Address"
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm">
                {errors.user_email.message}
              </p>
            )}

            <input
              name="business_name"
              {...register("business_name")}
              className="w-full p-3 rounded border"
              placeholder="Business Name (optional)"
            />
            {errors.business_name && (
              <p className="text-red-500 text-sm">
                {errors.business_name.message}
              </p>
            )}

            <select
              name="service_needed"
              {...register("service_needed")}
              className="w-full p-3 rounded border"
            >
              <option value="">Service Needed</option>
              <option>Website Development</option>
              <option>Web App Development</option>
              <option>AI & Automation</option>
              <option>Cloud Deployment</option>
            </select>
            {errors.service_needed && (
              <p className="text-red-500 text-sm">
                {errors.service_needed.message}
              </p>
            )}

            <textarea
              name="message"
              {...register("message", { required: true })}
              className="w-full p-3 rounded border h-32"
              placeholder="Tell us about your project"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}

            <button
              className={`px-6 py-3 bg-blue-800 text-white rounded-lg ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              } hover:bg-blue-600 transition`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* SIDE INFO */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">hello@birutech.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600">+1 (234) 567-8900</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              Toronto & Lagos — serving global clients
            </p>
          </div>

          <img
            src="/contactusimage.png"
            alt="Contact Illustration"
            className="w-100 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
