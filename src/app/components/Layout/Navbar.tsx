'use client';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-primaryBlue font-montagu">
      {/* desktop nav */}
      <header className="inset-x-0 top-0">
        <nav
          className="flex items-center justify-between px-8 z-50"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#">
              <div className="flex items-center justify-center w-24 h-20  rounded-md">
                <img
                  src="/Logo.svg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <div className=" lg:flex lg:gap-x-12">
              {navItems.map((nav, index) => (
                <div key={index} className="flex gap-x-2 items-center">
                  <a href="#" className="text-lg font-regular text-gray-900">
                    {nav.name === 'Sell or Rent property' ? (
                      <>
                        Sell or Rent <br /> property
                      </>
                    ) : (
                      nav.name
                    )}
                  </a>

                  {index < navItems.length - 1 && (
                    <span className="border-l-2 border-primaryOrange h-8"></span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex lg:flex-1 items-center justify-center">
              <a href="#" className="text-sm font-semibold text-gray-900">
                <button className="bg-primaryOrange px-8 py-2.5 rounded-xl">
                  Login
                </button>
              </a>
            </div>
          </div>
        </nav>

        {/* mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50" onClick={toggleMenu}></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-auto"
                    src={'/Logo.svg'}
                    alt=""
                    width={32}
                    height={52}
                  />
                </a>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navItems.map((nav, index) => (
                      <a
                        key={index}
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {nav.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Sales', href: '#' },
  { name: 'Rentals', href: '#' },
  { name: 'Sell or Rent property', href: '#' },
  { name: 'Contact Us', href: '#' },
];
