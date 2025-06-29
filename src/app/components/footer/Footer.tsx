import React from "react";
import FooterLink from "../../data/footerlink.json";
import SocialLinks from "../../data/social.json";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import Image from "next/image";

const Footer = () => {
  const IconRenderer = (ch: string) => {
    switch (ch) {
      case "FaFacebook":
        return <FaFacebook />;
      case "FaTwitter":
        return <FaTwitter />;
      case "FaInstagram":
        return <FaInstagram />;
      case "FaLinkedin":
        return <FaLinkedin />;
      case "FaYoutube":
        return <FaYoutube />;
      case "FaWhatsapp":
        return <FaWhatsapp />;
      default:
        return null;
    }
  };
  return (
    <footer className="bg-teal min-h-96 rounded-xl text-white py-8 text-center text-sm space-y-4 px-4 md:px-20">
      <div className="footer-main-content-container md:flex justify-between space-y-8">
        <div className="footer-left-content-container space-y-8  md:space-y-16">
          <div className="brand-container text-left ">
            <div className="brand-logo leading-tight text-yellow mb-4">
              <div className="">
                <Image
                  src={"/images/img/brand_big.png"}
                  width={100}
                  height={100}
                  alt="brand"
                  sizes="100vw"
                  style={{ width: "200px", height: "100%" }}
                />
              </div>
              <div className="slogan text-yellow font-semibold mb-4">
                Inventing Wellness, Inspiring World.
              </div>
              <div className="brand-address">
                <address className="not-italic w-full md:w-sm leading-normal text-white">
                  <p>
                    SA5/129-B, Ramrepur Pahariya, Pahariya Mandi, Varanasi,
                    Uttar Pradesh, India, 221007
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:keonpharm@gmail.com"
                      className="text-yellow underline"
                    >
                      keonpharm@gmail.com
                    </a>{" "}
                    | Tel:{" "}
                    <a
                      href="tel:+917275345430"
                      className="text-yellow underline"
                    >
                      +91 7275345430
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </div>
          <div className="brand-social-container flex gap-x-4">
            {SocialLinks.socialLinks.map((link, index) => {
              return (
                <a
                  key={`link-${link.platform}-${index}`}
                  className="icon text-3xl opacity-80 hover:cursor-pointer hover:opacity-100"
                >
                  {IconRenderer(link.icon)}
                </a>
              );
            })}
          </div>
          <form className="brand-email-container w-fit h-14 flex justify-between items-center gap-2 px-2 border rounded-md">
            <PiEnvelopeSimpleThin className="text-4xl " />
            <input
              placeholder="Enter your email"
              type="email"
              required
              className="email-input w-full md:w-8xl text-lg h-10 focus:outline-0"
            />
            <div>
              <button className="button-submit h-8 flex justify-center items-center bg-white rounded-md text-black text-semibold p-2 ">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="footer-right-content-container space-y-8 md:space-y-20 mt-4 ">
          {/* Links */}
          <div className="footer-links-sub-container flex  justify-between">
            {FooterLink.footerLinks.map((sections, index) => {
              return (
                <div
                  key={`sec-${index + 1}`}
                  className={`space-y-4  ${
                    index === 0
                      ? "text-left"
                      : index === 1
                      ? "text-center"
                      : "text-right"
                  } md:text-left`}
                >
                  <div className={`text-md md:text-lg font-bold mb-6 `}>
                    {sections.section}
                  </div>
                  {sections.links.map((link, index1) => {
                    return (
                      <div key={`sec-${index + 1}-link-${index1 + 1}`}>
                        <a
                          className={`text-xs md:text-md ${
                            index === 0
                              ? "text-left"
                              : index === 1
                              ? "text-center"
                              : "text-right"
                          }`}
                          href={link.url}
                        >
                          {link.text}
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {/* Watermark */}
          <div className="water-mark font-extrabold text-4xl md:text-8xl text-gray-100 opacity-15">
            KeonPharm
          </div>
        </div>
      </div>
      <hr />
      <div className=" md:flex justify-between ">
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
      </div>
    </footer>
  );
};

export default Footer;
