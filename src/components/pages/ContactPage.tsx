import React from 'react';
// import { Navbar } from '../navbar';
import { OfficeLocation } from '../OfficeLocation';
import { ContactForm } from '../ContactForm';
// import { SocialIcon } from '../SocialIcon';
// import { FooterLink } from '../FooterLink';
import { officeLocations } from '@/data';
import { FormData } from '@/types';

export const ContactsPage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-black">
      {/* Navbar and Header */}
      <div className="flex gap-5 justify-between items-start px-20 py-11 w-full text-white max-md:px-5">
        <div className="flex gap-4 items-center text-base leading-none text-center">
          {/* <div className="flex justify-center self-stretch my-auto border border-solid border-white border-opacity-40 min-h-[40px] rounded-[52px] w-[111px]">
            <button className="gap-2.5 self-stretch px-5 py-3 h-full rounded-[71px]">Sign Up</button>
          </div>
          <div className="flex justify-center self-stretch my-auto whitespace-nowrap border border-solid border-white border-opacity-40 min-h-[40px] rounded-[52px] w-[111px]">
            <button className="gap-2.5 self-stretch px-5 py-3 h-full rounded-[71px]">Login</button>
          </div> */}
        </div>
      </div>

      {/* Header */}
      <h1 className="self-center mt-9 ml-3 text-4xl font-poppins tracking-tighter leading-loose text-white max-md:max-w-full max-md:text-2xl">
        Your questions, Our expertise - Let's talk
      </h1>

      {/* Main Content */}
      <div className="self-center mt-16 w-full max-w-[1732px] max-md:mt-10 max-md:px-4">
        <div className="flex gap-8 justify-between max-md:flex-col max-md:gap-6">
          {/* Left: Global Offices */}
          <div className="flex flex-col w-7/12 max-md:w-full max-md:items-center">
            <div className="self-start text-3xl font-medium leading-loose text-cyan-400  mb-6 pl-16 max-md:text-2xl">
              Global Offices
            </div>
            <div className="flex gap-6 justify-center  max-md:flex-col max-md:items-center">
              {officeLocations.map((office, index) => (
                <OfficeLocation key={index} {...office} />
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex flex-col w-5/12 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center px-8 py-8 mb-20 w-full text-xl font-light leading-none border border-cyan-400 border-solid bg-zinc-950 rounded-[30px] shadow-md max-md:px-5 max-md:py-6">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <footer className="flex flex-col justify-center items-center px-20 py-40 mt-16 w-full bg-zinc-950 max-md:px-5 max-md:py-24">
        <div className="flex flex-col items-center mb-0 w-full max-w-[1422px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d250e7a714f4b95708b519f404efb3ca1b3139b76c8111b4005e9862ed1aac50?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
            alt="Footer logo"
            className="object-contain max-w-full aspect-[2.94] w-[150px]"
          />
          <div className="flex gap-9 items-center px-2.5 mt-16 max-md:mt-10">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-20 text-lg text-white max-md:mt-10">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} {...link} />
            ))}
          </div>
          <div className="mt-20 text-base font-medium leading-8 text-center text-white max-md:mt-10">
            UAE: Office 501, 05th FLoor, Innovation One, DIFC, Dubai, UAE
          </div>
          <div className="self-stretch mt-12 text-base font-medium leading-8 text-center text-white max-md:mt-10">
            © 2023 Nuqi Digital Wealth Limited. All rights reserved.
            <a
              href="https://uae.nuqiwealth.com/disclaimer"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disclaimer Notice page
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};
