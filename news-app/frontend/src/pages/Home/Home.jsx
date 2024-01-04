import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

import Flip from "react-reveal/Flip";
import { motion } from "framer-motion";

import LightSpeed from "react-reveal/LightSpeed";

import Roll from "react-reveal/Roll";
const Home = () => {
  const navigate = useNavigate();
  const features = [
    "Get real-time updates on breaking news.",
    "Explore news from various categories: Technology, Health, Entertainment, and more.",
    "User-friendly interface for a seamless experience.",
    "Personalize your news feed based on your interests.",
    "Save articles to read later with the bookmark feature.",
  ];

  const borderVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.92 } },
  };

  const steps = [
    {
      title: "Step 1",
      description:
        "Download the Your News App from the App Store or Google Play.",
    },
    {
      title: "Step 2",
      description:
        "Create a personalized account to tailor your news preferences.",
    },
    {
      title: "Step 3",
      description:
        "Explore news articles from various categories and stay informed.",
    },
    {
      title: "Step 4",
      description: "Bookmark your favorite articles for easy access later on.",
    },
  ];
  return (
    <React.Fragment>
      <Navbar />

      {/* here is start one section */}
      {/* here is start hero section */}
      <div>
        <Zoom>
          {/* Section 2 */}
          <section className="px-2 py-32 bg-white md:px-0">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
              <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                  <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-2xl xl:text-2xl">
                    <p className="text-indigo-800">

                    Discover the World through ArticleHub -
                    </p>
                     Your Personalized News Experience


                    </h1>
                    <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    Stay informed with the latest news from around the world. Our app brings you real-time updates on current events, politics, technology, entertainment, and more. Whether you're interested in global headlines or niche topics, ArticleHub has you covered.
                    </p>
                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                      <button

                        className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                      >
                        Explore
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                      <a
                        href="#_"
                        className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                    <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Zoom>
        {/* Section 3 */}
        <Bounce>
          <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
              {/* Image */}
              <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                <img
                  src="https://cdn.devdojo.com/images/december2020/productivity.png"
                  className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
                />
              </div>
              {/* Content */}
              <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                  Boost Productivity
                </h2>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Connect with like-minded readers, share your thoughts, and engage in meaningful discussions. Follow channels and users that resonate with your interests, and be part of a vibrant community that values diverse perspectives.
                </p>
                <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                  <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                      <span className="text-sm font-bold">✓</span>
                    </span>{" "}
                   follow any channel
                  </li>
                  <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                      <span className="text-sm font-bold">✓</span>
                    </span>{" "}
                    save article for later
                  </li>
                  <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                      <span className="text-sm font-bold">✓</span>
                    </span>{" "}
                    like comment and share any article
                  </li>
                </ul>
              </div>
              {/* End  Content */}
            </div>
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
              {/* Content */}
              <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Become a Creator
                </h2>
                <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                We prioritize your privacy. Enjoy a safe and secure environment where you can explore, interact, and express yourself without compromising your personal information.
                </p>
                <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                  <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                      <span className="text-sm font-bold">✓</span>
                    </span>{" "}
                    upload daily articles
                  </li>
                  <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                      <span className="text-sm font-bold">✓</span>
                    </span>{" "}
                    get in touch by users
                  </li>
                  <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                      <span className="text-sm font-bold">✓</span>
                    </span>{" "}
                    Some awesome integrations
                  </li>
                </ul>
              </div>
              {/* End  Content */}
              {/* Image */}
              <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                <img
                  src="https://cdn.devdojo.com/images/december2020/settings.png"
                  className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
                />
              </div>
            </div>
          </section>
        </Bounce>
        {/* Section 4 */}
        <Roll>
          <section className="py-20 bg-gray-50">
            <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
              <div className="flex flex-wrap items-center -mx-3">
                <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                  <div className="w-full lg:max-w-md">
                    <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                      Jam-packed with all the tools you need to succeed!
                    </h2>
                    <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                      It's never been easier to build a business of your own.
                      Our tools will help you with the following:
                    </p>
                    <ul>
                      <li className="flex items-center py-2 space-x-4 xl:py-3">
                        <svg
                          className="w-8 h-8 text-pink-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                        <span className="font-medium text-gray-500">
                          Faster Processing and uploading
                        </span>
                      </li>
                      <li className="flex items-center py-2 space-x-4 xl:py-3">
                        <svg
                          className="w-8 h-8 text-yellow-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <span className="font-medium text-gray-500">
                          Out of the Box Tracking and Monitoring
                        </span>
                      </li>
                      <li className="flex items-center py-2 space-x-4 xl:py-3">
                        <svg
                          className="w-8 h-8 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <span className="font-medium text-gray-500">
                          100% Protection and Security for Your App
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                  <img
                    className="mx-auto sm:max-w-sm lg:max-w-full"
                    src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                    alt="feature image"
                  />
                </div>
              </div>
            </div>
          </section>
        </Roll>
        {/* Section 5 */}

        {/* Section 7 */}
        <LightSpeed>
          <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
              <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                <div className="px-5 py-2">
                  <a
                    href="#"
                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                  >
                    About
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a
                    href="#"
                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                  >
                    Blog
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a
                    href="#"
                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                  >
                    Team
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a
                    href="#"
                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a
                    href="#"
                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a
                    href="#"
                    className="text-base leading-6 text-gray-500 hover:text-gray-900"
                  >
                    Terms
                  </a>
                </div>
              </nav>
              <div className="flex justify-center mt-8 space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Dribbble</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <p className="mt-8 text-base leading-6 text-center text-gray-400">
                © 2021 SomeCompany, Inc. All rights reserved.
              </p>
            </div>
          </section>
        </LightSpeed>
      </div>

      {/* here end landing page  */}
      {/* here is end hero section */}

      {/* here start 2 section */}
      <Bounce>
        <div className="relative  overflow-hidden bg-gray-800 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                 Get in touch by world best news channel
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                Embark on a journey of knowledge, discovery, and community. Download ArticleHub now and experience a new era of personalized news.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-white">
                    Weekly articles
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Non laboris consequat cupidatat laborum magna. Eiusmod non
                    irure cupidatat duis commodo amet.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-white">No spam</dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Officia excepteur ullamco ut sint duis proident non
                    adipisicing. Voluptate incididunt anim.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </Bounce>
      {/* here end 2 section */}

      {/* here start 3 section */}
      <Zoom>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 text-sky-200">
          <img
            src="https://wallpapers.com/images/hd/news-studio-background-190b9uziza65bexu.jpg"
            alt
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
               Join Us, Create Channel
              </h2>
              <p className="mt-6 text-lg leading-8 ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7sm:grid-cols-2 md:flex lg:gap-x-10">
                <a href="#">
                  Open roles <span aria-hidden="true">→</span>
                </a>
                <a href="#">
                  Internship program <span aria-hidden="true">→</span>
                </a>
                <a href="#">
                  Our values <span aria-hidden="true">→</span>
                </a>
                <a href="#">
                  Meet our leadership <span aria-hidden="true">→</span>
                </a>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 ">
                    Offices worldwide
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight">
                    12
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 ">
                    Full-time colleagues
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    300+
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Hours per week
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    40
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Paid time off
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    Unlimited
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Zoom>

      {/* here end 3 section */}
      <motion.div initial="hidden" animate="visible" variants={borderVariants}>
        <div className="my-[7vh] px-5">
          <h2 className="text-lg  text-center font-bold px-4 mb-5">
            Here is an Content of Landing, which contains App Information or
            others Things{" "}
          </h2>
        </div>
        {/*here end 3 section */}
        <Rotate left bottom>
          <div className="bg-white py-12 text-center max-w-1/3">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">
              Welcome to Your News App, where we strive to deliver the most
              reliable and up-to-date news to our users. Our dedicated team of
              journalists works tirelessly to bring you the latest stories from
              around the world.
            </p>
            <p className="mt-4 text-gray-600">
              Our mission is to empower you with knowledge, providing a platform
              where you can stay informed and make sense of the rapidly changing
              world.
            </p>
          </div>
        </Rotate>

        <Roll left>
          <div className="bg-gray-100 py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Explore the App</h2>
            <p className="text-gray-600">
              Stay connected and informed wherever you go. Download the Your
              News App now and experience the future of news delivery.
            </p>
            <div className="mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
                Explore Now
              </button>
            </div>
          </div>
        </Roll>
        <Zoom>
          <div className="bg-white py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Rotate left top>
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-md shadow-md"
                  >
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </Rotate>
            </div>
          </div>
        </Zoom>

        <div className="bg-gray-100 py-12 text-center">
          <Bounce left>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="text-left max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <svg
                    className="w-4 h-4 inline-block text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </Bounce>
        </div>
        <div className="bg-gray-800 text-white py-8 text-center">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Your News App</h3>
              <p className="text-gray-400">
                Delivering the latest news to your fingertips.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-400">info@yournewsapp.com</p>
            </div>
          </div>
          <p className="mt-6 text-gray-400">
            &copy; 2023 Your News App. All rights reserved.
          </p>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Home;
