import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Projects', href: '/projects' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="flex items-center justify-between p-4 bg-white bg-opacity-5 backdrop-blur-lg rounded-lg shadow-lg relative">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <img
              src="./title.png"
              alt="FluxFusion Logo"
              className="h-16 flex-shrink-0"
            />
          </div>
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 bg-opacity-90 rounded-lg shadow-lg px-2 pt-2 pb-3 space-y-1 transition-all duration-300 ease-in-out">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
