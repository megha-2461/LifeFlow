import React from "react";

const InsightsPost = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          The Life-Saving Impact of Donating Blood
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Every two seconds, someone in the world needs blood. Whether it's a patient undergoing surgery, a victim of a car accident, or someone living with a chronic illness like sickle cell anemia — donated blood often stands between life and death. But despite the constant need, many blood banks face shortages — and that’s where everyday heroes like you come in.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-red-500 mb-2">
          Why Blood Donation Matters
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Blood cannot be manufactured; it can only come from generous donors. A single donation can save up to three lives, thanks to how blood is separated into red cells, platelets, and plasma — each used for different treatments.
        </p>
      </div>

      <section className="bg-red-50 dark:bg-red-950 p-6 rounded-lg shadow-sm transition-colors">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Tips for First-Time Donors
        </h2>
        <ul className="space-y-3 text-gray-800 dark:text-gray-300">
          <li>
            💧 <strong>Stay Hydrated:</strong> Drink plenty of water before your appointment.
          </li>
          <li>
            🍽️ <strong>Eat a Healthy Meal:</strong> A balanced meal can help maintain your blood sugar levels.
          </li>
          <li>
            🚫 <strong>Avoid Alcohol:</strong> Stay away from alcohol for at least 24 hours before donating.
          </li>
          <li>
            👕 <strong>Wear Comfortable Clothing:</strong> Opt for short sleeves or loose-fitting clothing to make the process easier.
          </li>
          <li>
            <a
              href="https://www.redcrossblood.org/local-homepage/news/article/blood-donation-importance.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
            >
              Read More About Blood Donation Importance
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default InsightsPost;
