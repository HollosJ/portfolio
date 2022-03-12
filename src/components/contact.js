import React from 'react';
import { FiSend } from 'react-icons/fi';

const contact = () => {
  const mySubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="container max-w-4xl px-2 mx-auto md:px-4">
      <h1 className="my-4 md:my-8 header">Contact</h1>
      <form
        method="POST"
        action="https://formsubmit.co/hollosj99@gmail.com"
        className="grid gap-4 sm:grid-cols-2"
      >
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="name">
            Full Name:
          </label>
          <input
            className="input-field"
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
          ></input>
        </div>

        <div className="flex flex-col">
          <label className="font-bold" htmlFor="email">
            Email:
          </label>
          <input
            className="input-field"
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@email.com"
            required
          ></input>
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label className="font-bold" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full resize-y input-field"
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
