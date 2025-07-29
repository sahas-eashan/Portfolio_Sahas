import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // Replace this with your Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzvgwvw"; // <-- CHANGE THIS!

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: new FormData(form)
      });
      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-transparent to-blue-950/30">
      {/* Background: Circuit SVG and gradient orbs, to match other pages */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit4" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M12 0v5h5v5h-5v5h-5v-5H0V5h5V0z" fill="currentColor" opacity="0.35" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit4)" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-l from-blue-500/25 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>
        <p className="text-base sm:text-xl text-gray-300 mt-2">
          Let's collaborate on innovative projects and bring ideas to life!
        </p>
      </div>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/10 p-8 rounded-xl max-w-lg mx-auto flex flex-col gap-6 shadow-lg relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        autoComplete="off"
      >
        <input
          required
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
          placeholder="Your Name"
          name="name"
        />
        <input
          required
          type="email"
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
          placeholder="Your Email"
          name="email"
        />
        <textarea
          required
          rows={4}
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
          placeholder="Your Message"
          name="message"
        />
        <button
          className="bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform"
          type="submit"
          disabled={sent}
        >
          {sent ? "Sent!" : "Send Message"}
        </button>
        {error && (
          <div className="text-red-400 font-medium mt-2 text-sm text-center">
            Could not send message. Please try again later.
          </div>
        )}
        {sent && (
          <motion.div
            className="text-cyan-400 font-semibold mt-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Thank you! I'll get back to you soon.
          </motion.div>
        )}
      </motion.form>
      {/* Social icons row */}
      <div className="flex justify-center gap-5 mt-12 relative z-10">
        <a
          href="mailto:sahaseashangalle@gmail.com"
          className="text-cyan-400 hover:text-purple-400 transition text-2xl"
          title="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sahas-eashan"
          className="text-cyan-400 hover:text-purple-400 transition text-2xl"
          target="_blank" rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/sahas-eashan"
          className="text-cyan-400 hover:text-purple-400 transition text-2xl"
          target="_blank" rel="noopener noreferrer"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}
