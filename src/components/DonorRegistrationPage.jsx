import React, { useState } from "react";
import ScheduleDonation from "./ScheduleDonation";

const DonorRegistrationPage = () => {
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleDonorRegistration = async (donorData) => {
    try {
      const response = await fetch("http://localhost:3000/donor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donorData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Registration failed:", error);
        setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white dark:bg-zinc-900 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-4">
        Donor Registration
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Please provide your details to register as a blood donor. Your generosity saves lives!
      </p>

      {status === "success" && (
        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 p-4 mb-6 rounded">
          🎉 Thank you for registering! We’ll get in touch with you soon.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 p-4 mb-6 rounded">
          ❌ Something went wrong. Please try again later.
        </div>
      )}

      <ScheduleDonation onSubmit={handleDonorRegistration} />
    </div>
  );
};

export default DonorRegistrationPage;
