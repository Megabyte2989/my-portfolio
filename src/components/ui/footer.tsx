import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white py-6 mt-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="text-lg mb-4 font-berkshire">&copy; {new Date().getFullYear()} Mayar youness. All rights reserved.</p>
      </div>
    </footer>
  );
}
