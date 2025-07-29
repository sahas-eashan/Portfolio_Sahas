import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 text-center bg-black/10 text-gray-400 mt-10">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://github.com/sahas-eashan" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-cyan-400" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-cyan-400" />
        </a>
        <a href="mailto:sahas.eashan@example.com">
          <Mail className="w-6 h-6 hover:text-cyan-400" />
        </a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Sahas Eashan. Crafted with <span className="text-pink-400">❤</span>
      </div>
    </footer>
  );
}
