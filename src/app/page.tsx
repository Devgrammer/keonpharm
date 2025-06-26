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
import FeatureData from "./data/feature.json";
import ChooseData from "./data/choose.json";
import FocusCard from "./components/focusCard/FocusCard";
import { useState } from "react";
import ExpertCard from "./components/expertCard/ExpertCard";
import ChooseCard from "./components/chooseCard/ChooseCard";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getInTouch/GetInTouch";
import Link from "next/link";
import { IoClose } from "react-icons/io5";


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

  const handleNavClose=()=>{
    setIsNavToggle(false)
  }


  const [isNavToggle, setIsNavToggle]= useState<boolean>(false);
  return (
    <main className={`font-sans text-gray-800 bg-white p-4 space-y-2`}>
      {/* Mobile Navbar Section */}
      <div
        className={` fixed top-0 left-0 transform transition-all duration-800 ease-in-out nav-bar-modal w-screen  h-screen  bg-teal z-55 text-white  ${
          isNavToggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsNavToggle(false)}
          className="absolute top-4 right-4"
        >
          <IoClose />
        </button>
        <ul className="font-semibold text-center flex-col space-y-16 p-16">
          <li>
            <Link href="/"  onClick={handleNavClose}>Home</Link>
          </li>
          <li>
            <Link href="#we_are"  onClick={handleNavClose}>About</Link>
          </li>
          <li>
            <Link href="#vision"  onClick={handleNavClose}>Our Vision</Link>
          </li>
          <li>
            <Link href="#experts"  onClick={handleNavClose}>Our Experts</Link>
          </li>
          <li>
            <Link href="#focus"  onClick={handleNavClose}>Expertise</Link>
          </li>
          <li>
            <Link href="#choose"  onClick={handleNavClose}>Advantage</Link>
          </li>
          <li>
            <Link href="#contact"  onClick={handleNavClose}>Contact us</Link>
          </li>
        </ul>
      </div>

      {/* Navbar Section */}
      <Navbar setIsNavToggle={setIsNavToggle} />

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
      <SectionWrapper id="we_are" subHead="">
        <SectionHeading
          heading={{ primary: "Who We", secondary: "Are?" }}
          align="center"
        />
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
      <SectionWrapper id="vision" subHead="">
        <SectionHeading
          heading={{ primary: "Our", secondary: "Vision" }}
          align="center"
        />

        <p className="text-gray-700 text-md text-justify md:text-center leading-relaxed">
          To lead globally in integrative healthcare — where Ayurveda’s timeless
          principles meet cutting-edge pharmaceutical breakthroughs — delivering
          safe, effective, and sustainable health solutions for all.
        </p>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper id="mission" subHead="">
        <div className=" mx-auto">
          <div>
            <SectionHeading
              heading={{ primary: "Our", secondary: "Mission" }}
              align="center"
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
      <SectionWrapper id="unique" subHead="">
        <SectionHeading
          heading={{ primary: "What Makes Keon Pharm", secondary: "Unique?" }}
          align="center"
        />

        <div className="feature-card-container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-fit mx-auto">
          {FeatureData.features.map((feature, idx) => {
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
      <SectionWrapper id="focus" subHead="">
        <SectionHeading
          heading={{ primary: "Our Main Area of", secondary: "Focus?" }}
          align="center"
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
      <SectionWrapper id="experts" subHead="">
        <SectionHeading
          heading={{ primary: "Our", secondary: "Experts" }}
          align="center"
        />
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
      <SectionWrapper id="promise" subHead="">
        <SectionHeading
          heading={{ primary: "Our Promise", secondary: "to You" }}
          align="center"
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

      <SectionWrapper id="choose" subHead="">
        <div className=" md:flex mx-auto">
          <SectionHeading
            heading={{ primary: "Why Choose", secondary: "Keon Pharm?" }}
            align="left"
          />

          <div className="feature-card-container w-full md:w-1/2 grid grid-cols-1  gap-4  justify-end">
            {ChooseData.choose.map((choose, idx) => {
              return (
                <ChooseCard
                  key={idx}
                  id={choose.id}
                  icon={choose.icon}
                  heading={choose.heading}
                />
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" subHead="">
        <SectionHeading
          heading={{ primary: "Get In", secondary: "Touch" }}
          align="center"
        />
        <GetInTouch />
      </SectionWrapper>

      {/* Footer */}
      <Footer />
    </main>
  );
}
