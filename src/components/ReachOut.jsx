import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReachOut = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[^0-9]/g, "")))
      newErrors.phoneNumber = "Phone must be 10 digits";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus({ loading: true, success: false, error: null });
    try {
      await axios.post("/api/contact", formData);
      setSubmitStatus({ loading: false, success: true, error: null });
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
      setTimeout(() => navigate("/"), 3000);
    } catch {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 px-6 md:px-12 py-12 max-w-6xl mx-auto text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Reach Out to Us</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Questions or concerns about blood donation? We’re happy to help.
        </p>

        {submitStatus.success ? (
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border border-green-400 p-4 rounded">
            <h3 className="font-bold">Thank you!</h3>
            <p>We’ll get back to you shortly. Redirecting...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Your Name", name: "name" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phoneNumber", type: "tel" },
              { label: "Subject", name: "subject" },
            ].map(({ label, name, type = "text" }) => (
              <div key={name}>
                <label className="block font-medium mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-white dark:bg-zinc-800 ${
                    errors[name] ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  }`}
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm">{errors[name]}</p>
                )}
              </div>
            ))}

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded bg-white dark:bg-zinc-800 ${
                  errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitStatus.loading}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              {submitStatus.loading ? "Sending..." : "Send Message"}
            </button>

            {submitStatus.error && (
              <p className="text-red-600 mt-2">{submitStatus.error}</p>
            )}
          </form>
        )}
      </div>

      <div className="w-full md:w-1/3 space-y-6">
        <h3 className="text-xl font-semibold">Contact Info</h3>
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
          <p><strong>📍 Address:</strong> 123 Blood Donation Street, City, State</p>
          <p><strong>📞 Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>📧 Email:</strong> support@blooddonation.org</p>
          <p><strong>🕒 Hours:</strong> Mon–Fri: 8AM–6PM, Sat: 9AM–1PM</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Connect with us</h4>
          <div className="flex gap-3 text-lg text-red-600 dark:text-red-400">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
