import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* Component Code */}
      <div
        className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
        <main className="px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
              <span className="text-indigo-600 font-bold">Headline;</span> Here
              it is!
            </h2>
            <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Credit: Componentity.com */}
      <a href="https://componentity.com" target="_blank" className="block">
        <img
          src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png"
          className="w-48 mx-auto my-5"
        />
      </a>
    </div>
  );
};

export default HeroSection;
