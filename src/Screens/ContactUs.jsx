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

  const handleSubmit = async (e) => {
  e.preventDefault();
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

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("Missing EmailJS environment variables.");
    toast.error("Email service is not properly configured.");
    return;
  }

  try {
    await emailjs.send(serviceId, templateId, formData, publicKey);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("EmailJS error:", error);
    toast.error("Failed to send message. Try again later.");
  }
};

  return (
    <>
      <ToastNotification />
      <div className="container mx-auto max-w-screen-lg py-8 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 pt-18">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-muted-foreground">
        Have questions about our church? Want to learn more about our services or ministries? Fill out the form
        below and someone from our team will get back to you soon.
        </p>
      </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Message Form */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-xl overflow-hidden border border-gray-300 lg:col-span-7">
            <div className="p-1 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 pt-4">Send Us a Message</h2>
            </div>
            <div className="p-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                  className="w-full bg-gradient-to-tr from-lime-500 via-lime-500 to-lime-600 hover:from-[#7EA82C] hover:to-[#8BC53F] text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all duration-200 transform hover:scale-102 active:scale-99"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
  
          {/* Visit Us Info */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-xl overflow-hidden border border-gray-300 lg:col-span-5">
            <div className="p-1 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 pt-4">Visit Us</h2>
            </div>
            <div className="p-4 space-y-5">
              <div className="w-full h-[200px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47062.928277006016!2d121.0042495!3d14.5663595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c87777938deb%3A0x7f7e5476021cee1c!2sGlobal%20Surge%20Worship%20Center%20Pasig!5e1!3m2!1sen!2sph!4v1745653359707!5m2!1sen!2sph" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
  
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-center gap-3">
                  <FaBuilding className="h-5 w-5 text-[#7EA82C]" />
                  <span>Global Surge Worship Center Pasig</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-[#7EA82C]" />
                  <span>H38G+GGX, Dr. Sixto Antonio Ave., Pasig, 1606 Metro Manila, Philippines</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="h-5 w-5 text-[#7EA82C]" />
                  <span>09228097513 / 09178685053</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiGmail className="h-5 w-5 text-[#7EA82C]" />
                  <span>contact@companyname.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <PiMicrosoftOutlookLogoFill className="h-5 w-5 text-[#7EA82C]" />
                  <span>support@outlook.com</span>
                </div>
              </div>
  
              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-700">Follow Us:</h3>
                <div className="flex gap-4">
                  <div
                    className="text-[#7EA82C] hover:text-[#5C7A1E] transition-colors cursor-pointer"
                    onClick={() => window.open('https://www.facebook.com/GSWCPasig', '_blank')}
                  >
                    <FaFacebook className="h-6 w-6" />
                  </div>
                  <div
                    className="text-[#7EA82C] hover:text-[#5C7A1E] transition-colors cursor-pointer"
                    onClick={() => window.open('https://www.instagram.com/gswcpasig', '_blank')}
                  >
                    <FaInstagram className="h-6 w-6" />
                  </div>
                  <div
                    className="text-[#7EA82C] hover:text-[#5C7A1E] transition-colors cursor-pointer"
                    onClick={() => window.open ('https://www.youtube.com/@GlobalSurgeOfficial', '_blank')}
                  >
                    <FaYoutube className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}
