import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  getPath: string;
  children: ReactNode;
};

export default function Sidebar({ children, getPath }: Props) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Overview", to: "home" },
    { name: "Transaction", to: "transaction" },
  ];

  return (
    <div className="h-screen bg-white text-gray-800 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Sidebar"
        className="md:hidden fixed top-6 left-6 z-30 px-3 py-2 rounded-lg bg-indigo-600 text-white text-lg font-medium shadow-md"
      >
        ☰
      </button>

      {/* Mobile Menu Backdrop */}
      {open && (
        <div
          className="fixed inset-0 md:hidden z-40 backdrop-blur-sm bg-black/20 transition-opacity"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-400 text-white flex items-center justify-center font-bold shadow-md">
              F
            </div>
            <span className="font-semibold text-gray-800 text-lg">FinT</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="md:hidden text-3xl font-bold text-gray-500 hover:text-gray-700 transition-colors duration-300 bg-gray-100 hover:bg-gray-200 rounded-lg p-1.5"
          >
            ×
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((t, i) => (
            <Link
              key={i}
              to={`/dashboard/${t.to}`}
              onClick={() => setOpen(false)}
              className={`flex items-center px-3 py-2 rounded-md transition-all duration-200 ${
                getPath === t.to
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {t.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
