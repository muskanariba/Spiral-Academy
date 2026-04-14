import EnrollmentBanner from "../components/EnrollmentBanner";
import EnrollmentForm from "../components/EnrollmentForm";
import EnrollmentNextSteps from "../components/EnrollmentNextSteps";
import Footer from "../components/Footer";

export default function EnrollmentPage() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">

      {/* FULL WIDTH SECTION */}
      <EnrollmentBanner />

      {/* CENTERED CONTENT SECTION ONLY */}
      <div className="w-full flex flex-col items-center px-4 py-12 space-y-10">

        <EnrollmentForm />
        <EnrollmentNextSteps />

      </div>

      {/* FULL WIDTH FOOTER */}
      <Footer />

    </div>
  );
}