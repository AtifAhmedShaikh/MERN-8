import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {useNavigate} from "react-router-dom"
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

import LightSpeed from 'react-reveal/LightSpeed';

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
      <div
        className="bg-cover bg-center h-screen flex items-center relative"
        style={{
          backgroundImage:
            'url("https://elements-video-cover-images-0.imgix.net/files/cc922fe3-6a7c-4659-9eef-e6f2ac761188/inline_image_preview.png?auto=compress&h=630&w=1200&fit=crop&crop=edges&fm=jpeg&s=aaadad976b4f2e7a196a1da5a113f3f5")',
        }}
      >
        <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

            <Zoom left>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400">
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
            Stay connected and informed wherever you go. Download the Your News
            App now and experience the future of news delivery.
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
              <div key={index} className="bg-gray-100 p-6 rounded-md shadow-md">
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
    </React.Fragment>
  );
};

export default Home;
