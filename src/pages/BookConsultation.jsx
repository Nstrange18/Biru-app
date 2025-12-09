import NavBar from "../component/NavBar";

const BookConsultation = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <NavBar />

      {/* Header */}
      <div className="pt-28 md:pt-32 px-4 sm:px-6 md:px-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
          Book a Free Consultation
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10">
          Schedule a 15-20 minute discovery call so we can learn about your goals
          and explore how Biru can help bring your project to life.
        </p>
      </div>

      {/* Calendly Embed */}
      <div className="px-4 sm:px-6 md:px-20 pb-10 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md">
          <iframe
            src="https://calendly.com/nwubachukwuemelie/30min"
            title="Biru - Book a consultation"
            className="w-full h-[600px] sm:h-[650px] md:h-[750px] lg:h-[850px] border-none"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
