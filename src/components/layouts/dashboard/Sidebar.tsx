import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export default function Sidebar({ children }: Props) {
  const [open, setOpen] = useState(false);

  const navItems = [{ name: "Overview", to: "home" }];

  return (
<div className="h-screen bg-white text-gray-800 flex flex-col">
  {/* mobile top bar */}
  <div className="md:hidden sticky top-0 z-50 bg-white flex items-center justify-between px-4 py-3 border-b border-gray-200">
    <button
      onClick={() => setOpen(true)}
      aria-label="Open menu"
      className="p-2 rounded-md bg-indigo-600 text-white"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
        F
      </div>
      <span className="font-semibold">FinT</span>
    </div>


  </div>

  {/* mobile menu backdrop */}
  {open && (
    <div
      className="fixed inset-0 md:hidden z-40 backdrop-blur-md bg-transparent"
      onClick={() => setOpen(false)}
      aria-hidden="true"
    />
  )}

  {/* mobile menu */}
  <aside
    className={`fixed md:hidden top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
      open ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="p-4 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
          F
        </div>
        <span className="font-semibold">FinT</span>
      </div>
      <button
        onClick={() => setOpen(false)}
        aria-label="Close"
        className="p-2"
      >
        ✕
      </button>
    </div>

    <nav className="p-4 space-y-1">
      {navItems.map((t, i) => (
        <Link
          key={i}
          to={`/dashboard/${t.to}`}
          className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50"
          onClick={() => setOpen(false)}
        >
          {t.name}
        </Link>
      ))}
    </nav>
  </aside>

  {/* desktop layout */}
  <div className="hidden md:flex md:flex-1 md:overflow-hidden">
    {/* desktop sidebar */}
    <aside className="sticky top-0 w-64 h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="px-6 py-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
          F
        </div>
        <div>
          <div className="font-semibold text-gray-900">FinT</div>
          <div className="text-xs text-gray-500">Finance Tracker</div>
        </div>
      </div>

      <nav className="px-2 py-4 space-y-1">
        {navItems.map((t, i) => (
          <Link
            key={i}
            to={`/dashboard/${t.to}`}
            className="block px-4 py-2 rounded-md text-gray-700 hover:bg-indigo-50"
          >
            {t.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-4 py-4 border-t border-gray-100">
        <a
          href="#"
          className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50"
        >
          Help Center
        </a>
      </div>
    </aside>

    {/* main content */}
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  </div>

  {/* mobile main content */}
  <main className="md:hidden flex-1 overflow-y-auto">
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {children}
    </div>
  </main>
</div>
  );
}
