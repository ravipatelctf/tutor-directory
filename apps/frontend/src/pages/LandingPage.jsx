import { Link } from "react-router-dom";
import { FaCheckCircle, FaSearch, FaUser, FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Universal Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Find Verified Home Tutors Near You
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Search top home tutors anywhere in India. Connect instantly via WhatsApp.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/tutors"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            Find Tutors
          </Link>

          <a
            href={`${import.meta.env.VITE_SERVER_BASE_URL}/auth/google`}
            className="border border-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Become a Tutor
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <h3 className="text-3xl font-bold text-center">Why Choose Us?</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <FaSearch className="text-4xl mx-auto text-gray-800" />
            <h4 className="font-bold text-xl mt-4">Easy Discovery</h4>
            <p className="text-gray-600 mt-2">
              Find tutors based on State and District.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center">
            <FaUser className="text-4xl mx-auto text-gray-800" />
            <h4 className="font-bold text-xl mt-4">Verified Tutors</h4>
            <p className="text-gray-600 mt-2">
              Only real, registered tutors appear in the directory.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center">
            <FaWhatsapp className="text-4xl mx-auto text-green-600" />
            <h4 className="font-bold text-xl mt-4">Contact Instantly</h4>
            <p className="text-gray-600 mt-2">
              Connect directly with tutors via WhatsApp with one click.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <h3 className="text-3xl font-bold text-center">How It Works</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white shadow rounded-xl">
            <FaCheckCircle className="text-3xl text-green-600" />
            <h4 className="mt-3 text-xl font-bold">1. Select Location</h4>
            <p className="text-gray-600 mt-2">
              Choose your country, state and district.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <FaCheckCircle className="text-3xl text-green-600" />
            <h4 className="mt-3 text-xl font-bold">2. View Tutor List</h4>
            <p className="text-gray-600 mt-2">
              Browse tutors available in your exact area.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <FaCheckCircle className="text-3xl text-green-600" />
            <h4 className="mt-3 text-xl font-bold">3. Connect on WhatsApp</h4>
            <p className="text-gray-600 mt-2">
              Contact tutors directly with a single click.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
        <Footer />

    </div>
  );
}
