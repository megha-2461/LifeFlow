import React, { useState } from "react";

const ScheduleDonation = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodType: "",
    donationDate: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.bloodType) newErrors.bloodType = "Blood type is required";
    if (!formData.donationDate) newErrors.donationDate = "Date is required";
    if (!formData.location.trim())
      newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Donation Info:", formData);
    }

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      bloodType: "",
      donationDate: "",
      location: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Blood Type</label>
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              errors.bloodType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          {errors.bloodType && (
            <p className="text-red-500 text-sm mt-1">{errors.bloodType}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Preferred Donation Date</label>
          <input
            type="date"
            name="donationDate"
            value={formData.donationDate}
            onChange={handleChange}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              errors.donationDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.donationDate && (
            <p className="text-red-500 text-sm mt-1">{errors.donationDate}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">
            Preferred Donation Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              errors.location ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Register as Donor
        </button>

        {submitted && (
          <div className="mt-4 text-green-600 font-medium">
            🎉 Thank you for registering to donate!
          </div>
        )}
      </form>
    </div>
  );
};

export default ScheduleDonation;
