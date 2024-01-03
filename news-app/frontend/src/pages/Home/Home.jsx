
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
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
<div className="bg-white">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
      <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br />Start using our app today.</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" onClick={()=>navigate("/articles")}>Get started</button>
          <button className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></button>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
        <img className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width={1824} height={1080} />
      </div>
    </div>
  </div>
</div>
{/* here is end one section */}







{/* here start 2 section */}
<div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
          <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
          </div>
          <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
          <dd className="mt-2 leading-7 text-gray-400">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
            </svg>
          </div>
          <dt className="mt-4 font-semibold text-white">No spam</dt>
          <dd className="mt-2 leading-7 text-gray-400">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</dd>
        </div>
      </dl>
    </div>
  </div>

  <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
  </div>
</div>
{/* here end 2 section */}




{/* here start 3 section */}
<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src="https://wallpapers.com/images/hd/news-studio-background-190b9uziza65bexu.jpg" alt className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
  <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Open roles <span aria-hidden="true">→</span></a>
        <a href="#">Internship program <span aria-hidden="true">→</span></a>
        <a href="#">Our values <span aria-hidden="true">→</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">→</span></a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Full-time colleagues</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Hours per week</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Paid time off</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
{/* here end 3 section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={borderVariants}
      >
        <div
          className="bg-cover bg-center h-screen flex items-center relative"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/77/7a/47/777a47ffe2d6690bed5ca632f779170b.jpg")',
          }}
        >
          <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Zoom left>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-400">
                Your News, Your Way
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6">
                Stay informed with the latest news tailored just for you.
              </p>
            </Zoom>
            <LightSpeed left>
              <p className="text-sm md:text-base lg:text-lg opacity-75">
                Download the Your News App now and experience news like never
                before.
              </p>
            </LightSpeed>

            <div className="mt-8 flex flex-col md:flex-row">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-sm mb-2 md:mb-0 md:mr-2"
                onClick={() => navigate("/articles")}
              >
                Explore Now
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-sm">
                Download Now
              </button>
            </div>
          </div>
        </div>

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
            <h2 className="text-2xl font-bold mb-4">Download the App</h2>
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