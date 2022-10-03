import React from 'react';
import { FiSend } from 'react-icons/fi';

const contact = () => {
  return (
    <div>
      <h1 className="header">Contact</h1>
      <form
        method="POST"
        action="https://formsubmit.co/hollosj99@gmail.com"
        className="grid gap-4 md:grid-cols-2"
      >
        <div className="input-field">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
          ></input>
        </div>

        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@email.com"
            required
          ></input>
        </div>

        <div className="md:col-span-2 input-field">
          <label htmlFor="message">Message:</label>
          <textarea
            className="resize-y"
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Hi James, I'm interested in your work and..."
            required
          ></textarea>
        </div>

        <button
          className="flex items-center justify-center p-2 text-white transition-colors bg-black rounded-md focus:outline-jurple group sm:col-span-2 hover:bg-jurple"
          type="submit"
        >
          Send <FiSend className="ml-1 md:transition-all md:group-hover:ml-2" />
        </button>
      </form>
    </div>
  );
};

export default contact;
