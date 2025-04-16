import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";  

import ToastNotification from "../components/toastNotification";

import { FaPhoneAlt, FaMapMarkerAlt, FaBuilding, FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const containsFoulWords = (message) => {
    const foulWords = ["badword1", "badword2", "badword3"]; 
    const messageWords = message.toLowerCase().split(/\s+/);
    return messageWords.some(word => foulWords.includes(word));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear existing toasts (optional)
    toast.dismiss();

    if (!formData.name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (containsFoulWords(formData.message)) {
      toast.error("Please remove inappropriate language from your message.");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <>
      <ToastNotification />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 py-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Contact Us
        </h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* First Container: Send us a message */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-xl overflow-hidden lg:col-span-7">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
            </div>
            <div className="p-6">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="text-sm font-medium block text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                    placeholder="Your name"
                  />
                </div>
  
                <div>
                  <label htmlFor="email" className="text-sm font-medium block text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                    placeholder="Your email"
                  />
                </div>
  
                <div>
                  <label htmlFor="message" className="text-sm font-medium block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 min-h-[150px] bg-white"
                    placeholder="Your message"
                  />
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
  
          {/* Second Container: Visit us */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-xl overflow-hidden lg:col-span-5">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">Visit Us</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="w-full h-[250px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
  
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <FaBuilding className="h-5 w-5 text-indigo-500" />
                  <span>Company Name Inc.</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-indigo-500" />
                  <span>123 Business Street, New York, NY 10001</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="h-5 w-5 text-indigo-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <SiGmail className="h-5 w-5 text-indigo-500" />
                  <span>contact@companyname.com</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <PiMicrosoftOutlookLogoFill className="h-5 w-5 text-indigo-500" />
                  <span>support@outlook.com</span>
                </div>
              </div>
  
              <div>
                <h3 className="text-sm font-medium mb-3 text-gray-700">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-black transition-colors">
                    <FaTiktok className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-black transition-colors">
                    <FaYoutube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}