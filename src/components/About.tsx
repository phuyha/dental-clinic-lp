import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="facebook"
            href={socialMedia.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
          </a>
          <a
            aria-label="zalo"
            href={socialMedia.zalo}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 15 15"
            >
              <path d="M7,7.73a.57.57,0,0,0-.71.14A1,1,0,0,0,6.31,9,.55.55,0,0,0,7,9.17a.76.76,0,0,0,.38-.72A.79.79,0,0,0,7,7.73Zm0,0a.57.57,0,0,0-.71.14A1,1,0,0,0,6.31,9,.55.55,0,0,0,7,9.17a.76.76,0,0,0,.38-.72A.79.79,0,0,0,7,7.73ZM7.49,1.5C3.54,1.5.33,4.41.33,8a6.17,6.17,0,0,0,1.86,4.35h0l0,0,.11.1a.61.61,0,0,1,0,.71,3.18,3.18,0,0,1-1.16,1.07.1.1,0,0,0,0,.18,4.34,4.34,0,0,0,2-.13,2.62,2.62,0,0,1,1.94-.18h0a7.8,7.8,0,0,0,2.38.38c4,0,7.17-2.91,7.17-6.5S11.46,1.5,7.49,1.5ZM4.77,10H2.53A.56.56,0,0,1,2,9.76a.6.6,0,0,1,.11-.66L3.72,6.91a.43.43,0,0,0,.13-.26H2.66a1.13,1.13,0,0,1-.32,0A.37.37,0,0,1,2,6.23a.37.37,0,0,1,.37-.41c.79,0,1.59,0,2.39,0a.43.43,0,0,1,.35.65,3.64,3.64,0,0,1-.37.59L3.16,9.13H4.71c.23,0,.45,0,.51.33S5.13,10,4.77,10Zm3.55-.54c0,.23,0,.43-.26.54a.44.44,0,0,1-.58-.14s-.07-.06-.14,0a1.31,1.31,0,0,1-2-.8,1.86,1.86,0,0,1,.3-1.77,1.24,1.24,0,0,1,1.82-.19c.16-.18.33-.34.6-.23s.31.35.31.61Zm1.32.07c0,.33-.17.53-.46.53s-.45-.2-.45-.54c0-1.18,0-2.35,0-3.53,0-.35.16-.53.44-.54s.46.19.47.55Zm2.64.39a1.46,1.46,0,0,1-1.57,0,1.8,1.8,0,0,1-.5-2.4A1.54,1.54,0,0,1,12.32,7a1.6,1.6,0,0,1,.76,1.47A1.57,1.57,0,0,1,12.28,9.93Zm-.44-2.17a.56.56,0,0,0-.76.12,1,1,0,0,0,0,1.14.58.58,0,0,0,.77.12.77.77,0,0,0,.32-.69A.78.78,0,0,0,11.84,7.76ZM7,7.73a.57.57,0,0,0-.71.14A1,1,0,0,0,6.31,9,.55.55,0,0,0,7,9.17a.76.76,0,0,0,.38-.72A.79.79,0,0,0,7,7.73Zm0,0a.57.57,0,0,0-.71.14A1,1,0,0,0,6.31,9,.55.55,0,0,0,7,9.17a.76.76,0,0,0,.38-.72A.79.79,0,0,0,7,7.73Zm0,0a.57.57,0,0,0-.71.14A1,1,0,0,0,6.31,9,.55.55,0,0,0,7,9.17a.76.76,0,0,0,.38-.72A.79.79,0,0,0,7,7.73Z" />
            </svg>
          </a>
          <a
            aria-label="contact"
            href={socialMedia.contact}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 17 17"
            >
              <path d="M2.16,2,1.54,3S-.8,6.18,4.22,11.23h0l0,0,0,0h0c5.05,5,8.26,2.68,8.26,2.68l1-.62a1.2,1.2,0,0,0,.13-1.8l-1.21-1.2a1.19,1.19,0,0,0-1.56-.11l-1.28.82s-.86.51-3.28-1.9S4.45,5.88,4.45,5.88L5.27,4.6A1.19,1.19,0,0,0,5.16,3L4,1.83A1.2,1.2,0,0,0,2.16,2Z" />
              <path d="M10.43,14.75c-1.48,0-3.65-.65-6.31-3.29h0l.13-.2h0l-.16.17,0,0C-1,6.26,1.25,3,1.35,2.83l.61-1v0a1.42,1.42,0,0,1,2.15-.15l1.21,1.2a1.45,1.45,0,0,1,.13,1.87L4.65,6h0s-.3.81,1.86,3,3,1.85,3,1.85L10.78,10a1.43,1.43,0,0,1,1.85.14l1.2,1.21a1.47,1.47,0,0,1,.42,1.11,1.44,1.44,0,0,1-.57,1l-1,.63A4,4,0,0,1,10.43,14.75Zm-6-3.65v0c4.83,4.8,7.84,2.74,8,2.65l1-.63a1,1,0,0,0,.36-.69,1,1,0,0,0-.28-.74L12.3,10.5A1,1,0,0,0,11,10.41l-1.3.83c-.17.11-1.14.49-3.56-1.92s-2-3.39-1.93-3.56l.83-1.29A1,1,0,0,0,5,3.2L3.79,2a1,1,0,0,0-1.44.09l-.61,1c-.1.14-2.16,3.15,2.64,8l0,0Z" />
              <path d="M11,7.56a.24.24,0,0,1-.17-.4A1.67,1.67,0,0,0,11.32,6a1.7,1.7,0,0,0-.5-1.2,1.66,1.66,0,0,0-1.19-.49,1.69,1.69,0,0,0-1.2.49.23.23,0,0,1-.33-.33,2.16,2.16,0,0,1,3.05,0,2.16,2.16,0,0,1,0,3.05A.2.2,0,0,1,11,7.56Z" />
              <path d="M11.85,8.42a.23.23,0,0,1-.16-.06.22.22,0,0,1,0-.33A2.91,2.91,0,0,0,7.57,3.91a.23.23,0,0,1-.33-.33A3.38,3.38,0,0,1,12,8.36.27.27,0,0,1,11.85,8.42Z" />
              <path d="M12.73,9.3a.27.27,0,0,1-.17-.06.24.24,0,0,1,0-.33,4.15,4.15,0,0,0,0-5.88A4.14,4.14,0,0,0,6.69,3a.23.23,0,1,1-.33-.33,4.62,4.62,0,1,1,6.53,6.54A.23.23,0,0,1,12.73,9.3Z" />
            </svg>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a href="https://www.facebook.com/hhang0502" rel="nofollow">
              Ha Pham
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
