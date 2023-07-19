import { socials } from "@/config/app.config";
import React from "react";

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 border-t border-gray-200 py-10">
          <div className="flex items-center space-x-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{social.name}</span>
                <social.icon
                  size={30}
                  className="rounded-full bg-gray-200 p-2"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Copyright &copy; 2023 Konveksitangerang.id
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
