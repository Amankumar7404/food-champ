import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Food Champ</h1>
      <p className="text-lg text-gray-600 mb-10">
        Questions, feedback or a problem with your order? We would love to hear
        from you.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Email</h2>
          <p className="text-gray-600">support@foodchamp.com</p>
        </div>
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Phone</h2>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Hours</h2>
          <p className="text-gray-600">Every day, 9:00 AM to 11:00 PM</p>
        </div>
      </div>

      <form
        className="bg-gray-50 shadow-lg rounded-lg p-6 max-w-xl mx-auto text-left"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Send us a message
        </h2>

        <label className="block font-bold mb-1">Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />

        <label className="block font-bold mb-1">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />

        <label className="block font-bold mb-1">Message</label>
        <textarea
          rows="4"
          placeholder="How can we help?"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white font-bold rounded-lg py-2 hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
