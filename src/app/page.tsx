"use client";

g

export default function Home() {
  return (
    <main className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 text-center"
        aria-label="Hero Section"
      >
        {" "}
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          World-Class Pharma Research & Development from the Heart of Varanasi
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto leading-tight">
          Welcome to Keon Pharm
        </h1>
        <p className="mt-1 text-lg font-semibold md:text-xl max-w-3xl mx-auto">
          Where Ancient Wisdom Meets Modern Science
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Contact Us Today
        </a>
      </section>

      {/* Contact info bar */}
      <section className="bg-gray-100 py-4 text-center text-sm md:text-base text-gray-700">
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
      </section>

      {/* Who We Are */}
      <section
        className="max-w-6xl mx-auto px-6 py-16"
        aria-labelledby="who-we-are-title"
      >
        <h2
          id="who-we-are-title"
          className="text-3xl font-bold text-green-800 mb-6 text-center"
        >
          Who We Are
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-center text-gray-700">
          Keon Pharm Private Limited is a trailblazer at the crossroads of
          tradition and innovation. From Varanasi — India’s spiritual capital —
          we are redefining healthcare by blending advanced pharmaceutical
          research with the wisdom of Ayurveda and the power of natural
          plant-based substances. Our mission: to deliver holistic,
          evidence-based solutions that honor both ancient knowledge and modern
          science.
        </p>
      </section>

      {/* Vision*/}
      <section
        className="bg-green-50 py-16 px-6"
        aria-labelledby="vision-mission-title"
      >
        <div className="max-w-6xl mx-auto grid ">
          <div>
            <h3
              id="vision-mission-title"
              className="text-2xl text-center font-bold text-green-900 mb-4"
            >
              Our Vision
            </h3>
            <p className="text-gray-700  text-center leading-relaxed">
              To lead globally in integrative healthcare — where Ayurveda’s
              timeless principles meet cutting-edge pharmaceutical breakthroughs
              — delivering safe, effective, and sustainable health solutions for
              all.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className=" py-16 px-6" aria-labelledby="vision-mission-title">
        <div className="max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-center text-green-900 mb-4">
              Our Mission
            </h3>
            <ul className="list-disc flex list-inside space-y-2 text-gray-700 leading-relaxed gap-10">
              <li>
                <strong>Innovate</strong> <br />
                Advance research in Ayurvedic and modern medicine for today’s
                health needs.
              </li>
              <li>
                <strong>Empower</strong>
                <br /> Make high-quality, proven healthcare accessible
                worldwide.
              </li>
              <li>
                <strong>Sustain</strong> <br /> Uphold eco-friendly practices
                and ethical sourcing of all ingredients.
              </li>
              <li>
                <strong>Educate</strong> <br /> Promote health awareness and
                training for professionals and communities.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Makes Keon Pharm Unique */}
      <section
        className="bg-green-50  px-6 py-16"
        aria-labelledby="unique-title"
      >
        <h2
          id="unique-title"
          className="text-3xl font-bold text-green-800 mb-10 text-center"
        >
          What Makes Keon Pharm Unique?
        </h2>
        <ul className="grid md:grid-cols-2 gap-8 text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {[
            "Integrative R&D: We unite Ayurveda and modern pharma, creating products validated by rigorous research and clinical trials.",
            "State-of-the-Art Facilities: Equipped with the latest technology for quality, safety, and innovation.",
            "Global Collaborations: Partnering with leading research institutions and pharma companies worldwide.",
            "Sustainability at Core: Eco-friendly manufacturing and preservation of rare medicinal plants.",
            "Holistic Wellness: Our range spans Ayurvedic medicines, herbal supplements, modern pharmaceuticals, and natural skincare.",
            "Quality Without Compromise: Strict quality control and compliance with international standards.",
            "Social Responsibility: Investing in public health, rural care, and education for societal benefit.",
          ].map((point, i) => (
            <li key={i} className="flex items-start space-x-3">
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
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Areas of Focus */}
      <section
        className="max-w-6xl mx-auto py-16 px-6"
        aria-labelledby="focus-title"
      >
        <h2
          id="focus-title"
          className="text-3xl font-bold text-green-900 mb-10 text-center"
        >
          Our Main Areas of Focus
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-gray-700 leading-relaxed">
          {[
            {
              title: "Ayurvedic & Herbal Medicines",
              desc: "Authentic formulations and supplements rooted in tradition, validated by modern science.",
              icon: (
                <svg
                  className="w-10 h-10 text-green-600 mb-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 15h16M4 19h16M4 7h16M4 11h16"
                  />
                </svg>
              ),
            },
            {
              title: "Modern Pharmaceuticals",
              desc: "Innovative drug discovery, clinical research, vaccines, and advanced therapeutics.",
              icon: (
                <svg
                  className="w-10 h-10 text-green-600 mb-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6M9 16h6M10 20h4M3 6h18"
                  />
                </svg>
              ),
            },
            {
              title: "Natural Skincare & Wellness",
              desc: "Herbal skincare and personal care products for holistic well-being.",
              icon: (
                <svg
                  className="w-10 h-10 text-green-600 mb-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              ),
            },
          ].map(({ title, desc, icon }, i) => (
            <article
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              tabIndex={0}
              aria-label={title}
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Promise & Invitation */}
      <section
        className="bg-green-50 px-6 py-16 text-center text-gray-800"
        aria-labelledby="promise-title"
      >
        <h2
          id="promise-title"
          className="text-3xl font-bold text-green-800 mb-6"
        >
          Our Promise to You
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed mb-10">
          At Keon Pharm, we don’t just make medicines—we craft trust, wellness,
          and hope. Our commitment to excellence, ethics, and innovation sets us
          apart. Choosing Keon Pharm means joining a community driven by purpose
          and compassion.
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
        >
          Join Our Journey
        </a>
      </section>

      {/* Unique Website Highlights */}
      <section
        className="max-w-6xl mx-auto py-16 px-6"
        aria-labelledby="highlights-title"
      >
        <h2
          id="highlights-title"
          className="text-3xl font-bold text-green-900 mb-10 text-center"
        >
          Unique Website Highlights
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
          {[
            {
              title: "Virtual Herbarium",
              desc: "Explore our interactive digital library of medicinal plants and their benefits.",
            },
            {
              title: "Live Research Updates",
              desc: "Track our clinical trials and product development in real time.",
            },
            {
              title: "Wellness Blog",
              desc: "Expert articles, tips, and stories from Ayurveda and modern medicine.",
            },
            {
              title: "Patient Success Stories",
              desc: "Real-life testimonials of our product impact.",
            },
            {
              title: "Eco-Impact Dashboard",
              desc: "Live data on our green initiatives and sustainability.",
            },
            {
              title: "Collaborate With Us",
              desc: "Portal for researchers and partners to join projects.",
            },
            {
              title: "Global Community Map",
              desc: "Visualize our worldwide reach and partnerships.",
            },
          ].map(({ title, desc }, i) => (
            <article
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              tabIndex={0}
              aria-label={title}
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {title}
              </h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
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
        className="bg-green-700 text-white py-16 px-6"
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
          <label className="flex flex-col text-gray-100">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-2 p-3 rounded-md text-white-800 bg-green-800"
              placeholder="Your full name"
              aria-required="true"
            />
          </label>
          <label className="flex flex-col text-gray-100">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-2 p-3 rounded-md text-white-800 bg-green-800"
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
              className="mt-2 p-3 rounded-md text-white-800 resize-none bg-green-800"
              placeholder="Your message here..."
              aria-required="true"
            />
          </label>
          <button
            type="submit"
            className="md:col-span-2 bg-green-900 hover:bg-green-800 transition-colors py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
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


