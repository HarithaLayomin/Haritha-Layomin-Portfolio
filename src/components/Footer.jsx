import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-darker text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="mr-2 text-azure-blue" size={20} />
          <span>Colombo, Sri Lanka</span>
        </div>
        <p className="text-gray-400">
          Thank you for visiting my portfolio. Let&apos;s connect and build something amazing together.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          © 2024 Haritha Layomin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;