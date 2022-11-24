import React from "react";

export default function Navbar({ logeado }) {
  console.log(logeado);
  const datoOculto = false;
  return (
    <>
      <div className="bg-white">
        {/* Con solo la palabra hidden en la clase se oculta */}
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="false"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>

          <div className="fixed inset-0 z-40 flex">
            <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Ofertas
                  </a>
                </div>

                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Nuevos
                  </a>
                </div>
              </div>

              <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                <div className="flow-root">
                  <a
                    href="/iniciarSesion"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Iniciar sesión
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="/registrarse"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Crear cuenta
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                <a href="#" className="-m-2 flex items-center p-2">
                  <span className="ml-3 block text-base font-medium text-gray-900">
                    MEX
                  </span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Header - Navbar */}

        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>

                <div className="ml-4 flex lg:ml-0">
                  <a href="/">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src="./logo.png" alt="" />
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Ofertas
                    </a>

                    <a
                      href="/nuevosProductos"
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Nuevos
                    </a>
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a
                      href="/iniciarSesion"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Iniciar sesión
                    </a>
                    <span
                      className="h-6 w-px bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <a
                      href="/registrarse"
                      className={`text-sm font-medium text-gray-700 hover:text-gray-800 ${
                        datoOculto ? "hidden" : ""
                      }`}
                    >
                      Crear cuenta
                    </a>
                    <a
                      href="/cuenta"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800 "
                    >
                      Mi cuenta
                    </a>
                  </div>

                  <div className="hidden lg:ml-8 lg:flex">
                    <a
                      href="#"
                      className="flex items-center text-gray-700 hover:text-gray-800"
                    >
                      <span className="ml-3 block text-sm font-medium">
                        MEX
                      </span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>

                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>

                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 flex items-center p-2">
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">productos en el carrito</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
