import { useState, type ReactNode } from "react"


type SidebarProps = {
    children: ReactNode
}

const Sidebar = ({children}: SidebarProps) => {

    const [open, setOpen] = useState<boolean>(false)

    const navItems = ["Dashboard", "Transactions", "Budgets", "Reports", "Settings"];

    return (
        <>
        <div className="min-h-screen bg-white text-gray-800">
      <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open sidebar"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="p-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold">F</div>
            <span className="ml-2 font-semibold text-gray-900">FinT</span>
          </div>
        </div>

        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">Sign in</a>
      </header>

      <div className={`fixed inset-0 z-40 md:hidden ${open ? "block" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />

        <aside
          className={`absolute inset-y-0 left-0 w-64 bg-white border-r border-gray-100 shadow-lg transform transition-transform
            ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold">F</div>
              <span className="font-semibold text-gray-900">FinT</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close sidebar" className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="p-4 space-y-1">
            {navItems.map((title) => (
              <a
                key={title}
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 font-medium"
              >
                {title}
              </a>
            ))}
          </nav>

          <div className="mt-auto p-4 border-t border-gray-100">
            <a href="#" className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-indigo-50">Help Center</a>
            <a href="#" className="mt-2 block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-indigo-50">Log out</a>
          </div>
        </aside>
      </div>

      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:w-64 md:flex md:flex-col md:bg-white md:border-r md:border-gray-100 md:shadow-sm z-10">
        <div className="px-6 py-6 flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold">F</div>
          <div>
            <div className="font-semibold text-gray-900">FinT</div>
            <div className="text-xs text-gray-500">Finance Tracker</div>
          </div>
        </div>

        <nav className="px-2 py-4 space-y-1 overflow-auto">
          {navItems.map((title) => (
            <a
              key={title}
              href="#"
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 font-medium"
            >
              {title}
            </a>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-gray-100">
          <a href="#" className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-indigo-50">Help Center</a>
          <a href="#" className="mt-2 block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-indigo-50">Log out</a>
        </div>
      </aside>

      <div className="md:pl-64">
        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="hidden md:flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Overview of your finances</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-3 py-2 rounded-md bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100">New Transaction</button>
                <a href="#" className="text-sm text-indigo-600 font-medium hover:underline">+ Import</a>
              </div>
            </div>

            <div className="md:hidden flex items-center justify-between mb-6">
              <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              <div className="flex items-center gap-3">
                <button className="px-3 py-2 rounded-md bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100">New</button>
              </div>
            </div>

            {children}
          </div>
        </main>
      </div>
    </div>
        </>
    )
}

export default Sidebar;