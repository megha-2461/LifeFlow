import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTint, FaUserPlus, FaHeartbeat } from "react-icons/fa";
import heroImg from "./hero.avif";

function Home() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <div className="bg-white text-gray-800 dark:bg-zinc-900 dark:text-white transition-colors duration-300">

      <header
        className="relative text-center py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <p className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Your donation can make a difference in someone's life today.
          </p>
          <a
            href="/register"
            className="inline-block px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            Become a Donor
          </a>
        </div>
      </header>

      <section className="text-center py-12 px-6 md:px-16 bg-white dark:bg-zinc-900">
        <h2 className="text-2xl font-bold mb-4">Why Donate Blood?</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Blood donation is a simple act that saves millions of lives. By donating blood, you help those in need during surgeries, accidents, and medical conditions that require transfusions.
        </p>
      </section>

      <motion.section
        ref={statsRef}
        className="bg-gray-100 dark:bg-zinc-800 py-12 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-10">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-50 dark:bg-red-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition">
            <FaTint className="text-red-600 text-4xl mx-auto mb-3" />
            <h3 className="text-4xl font-bold text-red-700 dark:text-red-300">200+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Successful Donations</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition">
            <FaUserPlus className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-4xl font-bold text-blue-700 dark:text-blue-300">800+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Registered Donors</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition">
            <FaHeartbeat className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="text-4xl font-bold text-green-700 dark:text-green-300">100+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Patients Helped</p>
          </div>
        </div>
      </motion.section>

      <section className="py-12 px-6 md:px-20 text-center bg-white dark:bg-zinc-900">
        <h2 className="text-2xl font-bold mb-6">How to Donate</h2>
        <ol className="list-decimal text-left max-w-2xl mx-auto space-y-3 text-gray-700 dark:text-gray-300 pl-6">
          <li>Check the eligibility requirements for donating blood.</li>
          <li>Book an appointment at your nearest blood donation camp.</li>
          <li>Come prepared, stay hydrated, and donate!</li>
        </ol>
        <a
          href="https://www.redcrossblood.org/donate-blood/how-to-donate/eligibility-requirements.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
        >
          Learn More About the Process
        </a>
      </section>

      <footer className="bg-red-100 dark:bg-red-950 text-center py-6 text-gray-700 dark:text-gray-300 text-sm">
        <p>
          Join our community of life-savers. Follow us on social media or contact us for more information.
        </p>
      </footer>
    </div>
  );
}

export default Home;
