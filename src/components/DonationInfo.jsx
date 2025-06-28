import React from "react";

function DonationInfo() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
        Donation Information
      </h1>

      <p className="text-lg text-center mb-10 text-gray-700 dark:text-gray-300">
        Donating blood is a safe, simple, and powerful way to save lives. Here's everything you need to know before you donate.
      </p>

      <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
        <li>
          💉 <strong>Eligibility:</strong> You must be between <strong>18–65 years old</strong> and weigh at least <strong>50kg</strong>.
        </li>
        <li>
          🍎 <strong>Preparation:</strong> Eat a healthy meal and drink plenty of water <strong>before donating</strong>. Avoid fatty foods.
        </li>
        <li>
          📋 <strong>Identification:</strong> Bring a valid ID and share your <strong>medical history</strong> if available.
        </li>
        <li>
          🧑‍⚕️ <strong>Screening:</strong> A quick checkup will be done for blood pressure, hemoglobin, and overall health.
        </li>
        <li>
          ⏱️ <strong>Duration:</strong> The entire process takes about <strong>30–45 minutes</strong>, including rest time.
        </li>
        <li>
          🩸 <strong>Donation Types:</strong> You can donate <strong>whole blood, platelets, or plasma</strong> depending on eligibility and need.
        </li>
        <li>
          🔁 <strong>Frequency:</strong> You can donate blood once every <strong>3 months</strong>. Platelet donors may donate more frequently.
        </li>
        <li>
          🛋️ <strong>Post-Donation:</strong> Rest for 10–15 minutes and have a light snack. Avoid strenuous activity for the rest of the day.
        </li>
      </ul>

      <div className="mt-10 text-center">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Every donation can save <span className="text-red-600 font-bold">up to 3 lives</span>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Thank you for being a hero. Your simple act of kindness makes a world of difference.
        </p>
        <a
          href="/register"
          className="inline-block mt-6 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
        >
          Register to Donate
        </a>
      </div>
    </div>
  );
}

export default DonationInfo;
