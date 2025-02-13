import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
      <div className="container flex h-16 max-w-screen-7xl items-center justify-between px-4 md:px-8">
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <Link
          to="/"
          className="flex items-center text-xl font-bold text-gray-800"
        >
          ES Generator
        </Link>

        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-sm font-medium">
          <Link
            to="#features"
            className="transition-colors hover:text-violet-600"
          >
            Features
          </Link>
          <Link
            to="#styles"
            className="transition-colors hover:text-violet-600"
          >
            Signature Styles
          </Link>
          <Link
            to="/signature-generator"
            className="transition-colors hover:text-violet-600"
          >
            How It Works
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <button className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition">
            Create Signature
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-4 p-4 text-lg font-medium">
            <Link
              to="#features"
              className="hover:text-violet-600"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="#styles"
              className="hover:text-violet-600"
              onClick={() => setIsOpen(false)}
            >
              Signature Styles
            </Link>
            <Link
              to="/signature-generator"
              className="hover:text-violet-600"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <button
              className="mt-4 w-full px-4 py-2 bg-violet-700 text-white rounded-lg shadow-md hover:bg-violet-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Create Signature
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
