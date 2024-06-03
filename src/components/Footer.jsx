import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import Logo from './Logo';

const icons = [
  { id: 'fb', name: <FaFacebookF /> },
  { id: 'ig', name: <FaInstagram /> },
  { id: 'yt', name: <FaYoutube /> },
  { id: 'tw', name: <FaTwitter /> },
];

const links = [
  { id: 1, name: 'Privacy Policy' },
  { id: 1, name: 'Security' },

  { id: 1, name: 'Manage Cookies' },
];
function Footer() {
  return (
    <footer className="p-4">
      <div className="flex flex-col items-center max-w-6xl gap-6 pt-6 pb-5 mx-auto p-3">
        <div className="flex flex-row justify-center gap-12 border-t-2 pt-6 border-yellow-300 w-full">
          {icons.map((icon) => (
            <div
              className="text-3xl cursor-pointer hover:text-amber-500"
              key={icon.id}
            >
              {icon.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center text-sm gap-2 ">
          <Logo />
          <p>©2024 WatchMe, Inc.</p>
        </div>
        <div className="flex flex-row gap-8 cursor-pointer box-content">
          {links.map((link) => (
            <div className="hover:text-amber-500 underline" key={link.id}>
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
