import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">TutorDirectory</span>
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">

          <Link
            to="/tutors"
            className="px-4 py-2 rounded-lg font-semibold border border-gray-800 hover:bg-gray-800 hover:text-white transition"
          >
            Find Tutors
          </Link>

          <a
            href={`${import.meta.env.VITE_SERVER_BASE_URL}/auth/google`}
            className="px-4 py-2 rounded-lg font-semibold border border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white transition"
          >
            Become a Tutor
          </a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-3">

          <Link
            to="/tutors"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg font-semibold border border-gray-800 hover:bg-gray-800 hover:text-white transition"
          >
            Find Tutors
          </Link>

          <a
            href={`${import.meta.env.VITE_SERVER_BASE_URL}/auth/google`}
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg font-semibold border border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white transition"
          >
            Become a Tutor
          </a>

        </div>
      </div>
    </header>
  );
}
