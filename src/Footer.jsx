import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: "linear-gradient(to right, #141e30, #243b55)" }} className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-8 lg:mb-0">
          <h1 className="text-2xl font-extrabold">Your Innovate Co.</h1>
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <NavLink href="#home">Home</NavLink>

        </div>
        <div className="flex flex-col items-center lg:items-end">
          <h4 className="mb-4">Connect With Us</h4>
          <div className="flex  gap-9">
            <SocialLink href="#" iconClass="ml-6 fab fa-facebook-f" />
            <SocialLink href="#" iconClass="ml-6 fab fa-twitter" />
            <SocialLink href="#" iconClass="ml-6 fab fa-instagram" />
            <SocialLink href="#" iconClass="ml-6 fab fa-linkedin-in" />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2024 Your Innovate Co. All rights reserved. | Crafted with ❤️ by Satish Nadipalli</p>
      </div>
    </footer>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-100 hover:text-gray-200 transition duration-300">
    {children}
  </a>
);

const SocialLink = ({ href, iconClass }) => (
  <a href={href} target="_blank" className="text-gray-100 ml-8 hover:text-gray-200 transition duration-300">
    <i className={`${iconClass} text-2xl`}></i>
  </a>
);

export default Footer;
