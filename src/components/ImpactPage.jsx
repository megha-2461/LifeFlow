import React from "react";
import { FaHandsHelping, FaHeartbeat } from "react-icons/fa";

function ImpactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 dark:text-white transition-colors duration-300">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          At LifeFlow, we believe that every drop counts. Our mission is to make blood donation safe, easy, and accessible for everyone, everywhere.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-red-500">
            <FaHeartbeat /> Our Mission
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            We connect donors to blood banks, hospitals, and patients through an intuitive and transparent platform. From registration to donation, we simplify the entire process to ensure timely and life-saving support.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-red-500">
            <FaHandsHelping /> Our Vision
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            A world where no life is lost due to lack of blood. We aim to build a strong community of committed donors and educate people about the importance of regular blood donation.
          </p>
        </div>
      </section>

      <section className="text-center bg-red-50 dark:bg-red-950 p-6 rounded-md transition-colors">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">Join the Mission</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Be a part of something life-changing. Whether you donate, volunteer, or spread awareness — your contribution saves lives.
        </p>
        <a
          href="/register"
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Become a Donor
        </a>
      </section>
    </div>
  );
}

export default ImpactPage;
