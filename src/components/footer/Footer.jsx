import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Instagram', Icon: FaInstagram, url: 'https://www.instagram.com/prakash____cs/' },
  { name: 'LinkedIn', Icon: FaLinkedin, url: 'https://www.linkedin.com/in/prakash0099/' },
  { name: 'GitHub', Icon: FaGithub, url: 'https://github.com/Victry0099' },
];

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-white text-xl">Developed By Prakash</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white">All Rights Reserved By &copy; BldVictry-2024</p>
          </div>
          <div className="flex justify-center md:justify-end items-center space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} to={link.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <link.Icon size={28} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
