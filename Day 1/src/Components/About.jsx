import React from "react";
import img2 from '../Resources/img2.avif'
import img3 from '../Resources/img3.avif'
const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
          About Us
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Who We Are
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          We are a team of passionate developers and designers dedicated to building amazing web experiences. Our mission is to deliver top-notch solutions tailored to our clients' needs.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-[59%] object-cover object-center h-24 rounded-full"
              src={img2}
              alt="Team member"
            />
            <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
              Abhay Dhaneshwar
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              Lead Developer
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-[85%] object-cover object-center h-24 rounded-full"
              src={img3}
              alt="Team member"
            />
            <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
              Sarvesh Ingle
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              UI/UX Designer
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
