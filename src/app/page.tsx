"use client";

import HeroSection from "./components/hero/Hero";
import MissionCard from "./components/missionCard/MissionCard";
import Navbar from "./components/navbar/Navbar";
import SectionHeading from "./components/sectionHeading/SectionHeading";
import SectionWrapper from "./components/sectionWrapper/SectionWrapper";
import { IoBulbOutline, IoBookOutline } from "react-icons/io5";
import { FaRegHandBackFist } from "react-icons/fa6";
import { PiPlant } from "react-icons/pi";
import FeatureCard from "./components/featureCard/FeatureCard";
import featureData from "./data/feature.json";
import FocusCard from "./components/focusCard/FocusCard";
import { useState } from "react";
import ExpertCard from "./components/expertCard/ExpertCard";

interface FocusState {
  ayu: boolean;
  mod: boolean;
  nat: boolean;
}

export default function Home() {
  const [isFocused, setIsFocused] = useState<FocusState>({
    ayu: true,
    mod: false,
    nat: false,
  });
  return (
    <main className="font-sans text-gray-800 bg-white p-4 space-y-2">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Contact info bar */}
      {/* <section className="bg-gray-100 py-4 text-center text-sm md:text-base text-gray-700">
        <address className="not-italic">
          <p>
            SA5/129-B, Ramrepur Pahariya, Pahariya Mandi, Varanasi, Uttar
            Pradesh, India, 221007
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:keonpharm@gmail.com"
              className="text-green-700 underline"
            >
              keonpharm@gmail.com
            </a>{" "}
            | Tel:{" "}
            <a href="tel:+917275345430" className="text-green-700 underline">
              +91 7275345430
            </a>
          </p>
        </address>
      </section> */}

      {/* Who We Are */}
      <SectionWrapper>
        <SectionHeading heading={{ primary: "Who We", secondary: "Are?" }} />
        <p className="max-w-8xl text-md mx-auto leading-relaxed text-justify text-gray-700">
          Keon Pharm Private Limited is a trailblazer at the crossroads of
          tradition and innovation. From Varanasi — India’s spiritual capital —
          we are redefining healthcare by blending advanced pharmaceutical
          research with the wisdom of Ayurveda and the power of natural
          plant-based substances. Our mission: to deliver holistic,
          evidence-based solutions that honor both ancient knowledge and modern
          science.
        </p>
      </SectionWrapper>

      {/* Vision*/}
      <SectionWrapper>
        <SectionHeading heading={{ primary: "Our", secondary: "Vision" }} />

        <p className="text-gray-700 text-md text-justify md:text-center leading-relaxed">
          To lead globally in integrative healthcare — where Ayurveda’s timeless
          principles meet cutting-edge pharmaceutical breakthroughs — delivering
          safe, effective, and sustainable health solutions for all.
        </p>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper>
        <div className=" mx-auto">
          <div>
            <SectionHeading
              heading={{ primary: "Our", secondary: "Mission" }}
            />

            <div className=" w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-inside gap-4 md:gap-0 text-gray-700 leading-relaxed mx-auto">
              <MissionCard
                icon={() => <IoBulbOutline />}
                heading={"Innovate"}
                content={`Advance research in Ayurvedic and modern medicine for today’s health
        needs.`}
              />

              <MissionCard
                icon={() => <FaRegHandBackFist />}
                heading={"Empower"}
                content={`Make high-quality, proven healthcare accessible
                worldwide.`}
              />

              <MissionCard
                icon={() => <PiPlant />}
                heading={"Sustain"}
                content={`Uphold eco-friendly practices
                and ethical sourcing of all ingredients.`}
              />

              <MissionCard
                icon={() => <IoBookOutline />}
                heading={"Educate"}
                content={`Promote health awareness and
                training for professionals and communities.`}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What Makes Keon Pharm Unique */}
      <SectionWrapper>
        <SectionHeading
          heading={{ primary: "What Makes Keon Pharm", secondary: "Unique?" }}
        />

        <div className="feature-card-container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-fit mx-auto">
          {featureData.features.map((feature, idx) => {
            return (
              <FeatureCard
                key={idx}
                id={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                content={feature.content}
              />
            );
          })}
        </div>
      </SectionWrapper>

      {/* Main Areas of Focus */}
      <SectionWrapper>
        <SectionHeading
          heading={{ primary: "Our Main Area of", secondary: "Focus?" }}
        />
        <div className="focus-card-container  mt-auto space-y-8 space-x-8 md:flex justify-between">
          <FocusCard
            heading={"Ayurvedic & Herbal Medicines"}
            desc={
              "Authentic formulations and supplements rooted in tradition, validated by modern science."
            }
            img={"./images/img/ayurveda.webp"}
            isFocused={isFocused}
            id={"ayu"}
            setIsFocused={setIsFocused}
          />
          <FocusCard
            heading={"Modern Pharmaceuticals"}
            desc={
              "Innovative drug discovery, clinical research, vaccines, and advanced therapeutics."
            }
            img={"./images/img/modern.avif"}
            isFocused={isFocused}
            id={"mod"}
            setIsFocused={setIsFocused}
          />
          <FocusCard
            heading={"Natural Skincare & Wellness"}
            desc={
              "Herbal skincare and personal care products for holistic well-being."
            }
            img={"./images/img/natural.png"}
            isFocused={isFocused}
            id={"nat"}
            setIsFocused={setIsFocused}
          />
        </div>
      </SectionWrapper>

      {/* Our Expert */}
      <SectionWrapper>
        <SectionHeading heading={{ primary: "Our", secondary: "Experts" }} />
        <div className="expert-car-container md:flex gap-4 mx-auto">
          <ExpertCard
            heading="Dr. D.V. Mizgirev"
            des="Professor, Department of Surgery, Northern State Medical University, Russian Federation"
            img="/images/img/Denis.png"
          />
          <ExpertCard
            heading="Dr. Ravindra Kharwar"
            des="Professor in Botany, Institute of Science, BHU, Varanasi
Ex-President of Mycology Society of India"
            img="/images/img/Ravindra.png"
          />
          <ExpertCard
            heading="Dr. Andrei Mariandyshev "
            des="TB expert & HOD, at Northern State Medical University, Leading tuberculosis expert driving key TB programs globally."
            img="/images/img/Andrei.png"
          />
        </div>
      </SectionWrapper>

      {/* Promise & Invitation */}
      <SectionWrapper>
        <SectionHeading
          heading={{ primary: "Our Promise", secondary: "to You" }}
        />
        <div className="promise-content text-justify md:text-center mb-8">
          At Keon Pharm, we don’t just make medicines—we craft trust, wellness,
          and hope. Our commitment to excellence, ethics, and innovation sets us
          apart. Choosing Keon Pharm means joining a community driven by purpose
          and compassion.
        </div>
        <div className="flex justify-center items-center">
          <a
            href="#contact"
            className="inline-block  bg-teal text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
          >
            Join Our Journey
          </a>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <section
        className="bg-green-50 px-6 py-16"
        aria-labelledby="choose-us-title"
      >
        <h2
          id="choose-us-title"
          className="text-3xl font-bold text-green-800 mb-10 text-center"
        >
          Why Choose Keon Pharm?
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 text-gray-700 max-w-5xl mx-auto leading-relaxed">
          {[
            "Decades of Expertise in Ayurveda and Pharma",
            "Unmatched Quality & Safety Standards",
            "Innovative Research and Development",
            "Strong Ethical and Social Responsibility",
            "Committed to Sustainability and Environment",
            "Passionate Team Dedicated to Your Health",
          ].map((reason, i) => (
            <li
              key={i}
              className="flex items-start space-x-3"
              tabIndex={0}
              aria-label={reason}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-600 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-teal rounded-xl text-white py-16 px-6"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="text-3xl font-bold mb-6 text-center">
          Get In Touch
        </h2>
        <form
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          aria-label="Contact form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submission simulated. Implement backend accordingly.");
          }}
        >
          <label className="flex flex-col text-teal">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-2 p-3 rounded-md text-white-800 bg-yellow"
              placeholder="Your full name"
              aria-required="true"
            />
          </label>
          <label className="flex flex-col text-teal">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-2 p-3 rounded-md text-white-800 bg-yellow"
              placeholder="you@example.com"
              aria-required="true"
            />
          </label>
          <label className="flex flex-col text-gray-100 md:col-span-2">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 p-3 rounded-md text-teal resize-none bg-yellow"
              placeholder="Your message here..."
              aria-required="true"
            />
          </label>
          <button
            type="submit"
            className="md:col-span-2 bg-yellow text-teal hover:bg-green-800 transition-colors py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-teal rounded-xl text-white py-8 px-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Keon Pharm Private Limited — All
          Rights Reserved
        </p>
        <p>
          Designed and Developed by Abhinav Rastogi |{" "}
          <a
            href="mailto:keonpharm@gmail.com"
            className="underline hover:text-white"
          >
            keonpharm@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
