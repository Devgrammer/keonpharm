import React from 'react'

const Footer = () => {
  return (
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
  );
}

export default Footer