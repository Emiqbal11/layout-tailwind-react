import { useState } from "react";
import "./App.css";
import logo from "./assets/image/logo.svg";
import intro from "./assets/image/illustration-intro.svg";
import avatar from "./assets/image/avatar-anisha.png";
import logoWhite from "./assets/image/logo-white.svg";
import fbIcons from "./assets/image/icon-facebook.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="relative container mx-auto p-6">
        {/* flex container  */}
        <div className="flex items-center justify-between">
          {/* for logo  */}
          <div className="pt-2">
            <img src={logo} alt="" />
          </div>
          {/* for menu items  */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-gray-700">
              {" "}
              Pricing
            </a>
            <a href="#" className="hover:text-gray-700">
              {" "}
              Product
            </a>
            <a href="#" className="hover:text-gray-700">
              {" "}
              About Us
            </a>
            <a href="#" className="hover:text-gray-700">
              {" "}
              Careers
            </a>
            <a href="#" className="hover:text-gray-700">
              {" "}
              Community
            </a>
          </div>
          <a
            href="#"
            className="hidden  p-3 px-6 pt-3 text-white bg-orange-600 rounded-full md:block hover:bg-red-300 "
          >
            Get Started
          </a>
        </div>
      </nav>
      {/* hero section  */}
      <section id="hero">
        {/* flex container  */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md-space-y-0">
          {/* left item  */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="mx-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="mx-w-sm text-center text-gray-700 md:text-left ">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-3 text-white bg-orange-600 rounded-full hover:bg-red-300 "
              >
                Get Started
              </a>
            </div>
          </div>
          {/* imgae  */}
          <div className="md:w-1/2">
            <img src={intro} alt="" />
          </div>
        </div>
      </section>
      {/* features section*/}
      <section id="feature">
        {/* flex container  */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row ">
          {/* what's different  */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage ?
            </h2>
            <p className="max-w-sm text-center text-gray-700 md:text-left">
              Manage provides all the functionality your team needs,without the
              complexity.Our Software is tailor-made for modern digital product
              teams
            </p>
          </div>
          {/* number list  */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              {/* heading  */}
              <div className="rounded-l-full bg-red-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision.Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details.Never lose sight of the bigger
                  picture again
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              {/* heading  */}
              <div className="rounded-l-full bg-red-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision.Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details.Never lose sight of the bigger
                  picture again
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              {/* heading  */}
              <div className="rounded-l-full bg-red-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision.Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details.Never lose sight of the bigger
                  picture again
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              {/* heading  */}
              <div className="rounded-l-full bg-red-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision.Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details.Never lose sight of the bigger
                  picture again
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              {/* heading  */}
              <div className="rounded-l-full bg-red-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                    04
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision.Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details.Never lose sight of the bigger
                  picture again
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials  */}
      <section id="testimonial">
        {/* container to heading and testm block  */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* heading  */}
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage ?
          </h2>
          {/* testimonial container  */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* testimonial 1  */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
              <img src={avatar} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus numquam quo aperiam, officia corrupti totam sit
                ratione nam
              </p>
            </div>
            {/* testimonial 2 */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">
              <img src={avatar} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus numquam quo aperiam, officia corrupti totam sit
                ratione nam
              </p>
            </div>
            {/* testimonial 3 */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">
              <img src={avatar} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Richad Watts</h5>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus numquam quo aperiam, officia corrupti totam sit
                ratione nam
              </p>
            </div>
          </div>
          <div className="my-16">
            <a
              href="#"
              className="p-3 px-6 pt-3 text-white bg-orange-600 rounded-full hover:bg-red-300 "
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* cta section  */}
      <section id="CTA" className="bg-red-500">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* heading  */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          <div>
            <a
              href="#"
              className="p-3 px-6 pt-3 text-red-500 bg-white rounded-full shadow-2xl hover:bg-gray-900 "
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* footer  */}
      <footer className="bg-blue-950">
        <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* logo and social login div  */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:spac-y-0 md:items-start">
            {/* logo  */}
            <div>
              <img src={logoWhite} className="h-8" alt="" />
            </div>
            {/* social link container  */}
            <div className="flex justify-center space-x-4">
              {/* link 1 */}
              <a href="#">
                <img src={fbIcons} alt="" className="h-8" />
              </a>
              <a href="#">
                <img src={fbIcons} alt="" className="h-8" />
              </a>
              <a href="#">
                <img src={fbIcons} alt="" className="h-8" />
              </a>
              <a href="#">
                <img src={fbIcons} alt="" className="h-8" />
              </a>
              <a href="#">
                <img src={fbIcons} alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/* list container  */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
