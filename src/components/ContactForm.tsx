import React from 'react';
import { ContactFormProps } from '../types';

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit(Object.fromEntries(formData) as any);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-full w-[572px] max-md:w-full max-md:px-4"
    >
      {/* Contact Us Header */}
      <div className="self-start text-4xl font-medium tracking-tighter leading-loose text-cyan-400 max-md:text-2xl">
        Contact Us
      </div>

      {/* Name Input */}
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="px-7 pt-4 pb-7 mt-12 tracking-tight whitespace-nowrap bg-black rounded-2xl border border-gray-600 border-solid max-md:px-5 max-md:py-3 max-md:mt-6 max-md:w-full"
        placeholder="Name"
      />

      {/* Email Input */}
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="px-7 pt-4 pb-7 mt-6 tracking-tight whitespace-nowrap bg-black rounded-2xl border border-gray-600 border-solid max-md:px-5 max-md:py-3 max-md:w-full"
        placeholder="Email"
      />

      {/* Phone Input */}
      <div className="flex items-center gap-3 px-6 py-4 mt-6 bg-black rounded-2xl border border-gray-600 max-md:px-5 max-md:py-3 max-md:w-full">
        {/* Country Code and Flag */}
        <div className="flex items-center gap-2">
          <div className="text-white font-medium">+971</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9ff2e95294cfe0754088dfc6cc7e9e2a8389f27721e1b0ff8623dfff9fed80?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
            alt="Country flag"
            className="object-contain rounded-sm w-6 h-4"
          />
        </div>
        {/* Phone Input */}
        <input
          type="tel"
          name="phone"
          className="flex-grow bg-transparent border-none outline-none text-white placeholder-gray-400"
          placeholder="Phone number"
        />
      </div>

      {/* Message Input */}
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="px-7 pt-7 pb-20 mt-6 tracking-tight whitespace-nowrap bg-black rounded-2xl border border-gray-600 border-solid max-md:px-5 max-md:py-4 max-md:w-full max-md:h-[120px]"
        placeholder="Message"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="self-center px-14 pt-3.5 pb-7 mt-7 font-medium text-center whitespace-nowrap bg-cyan-400 rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.2)] text-teal-950 w-[247px] max-md:w-full max-md:px-5 max-md:mt-5"
      >
        Submit
      </button>
    </form>
  );
};
