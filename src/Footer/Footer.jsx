import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">JobPortal</h2>
          <p className="text-sm text-gray-400">
            Your dream job is just a click away. Explore thousands of opportunities with us.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Find Jobs</a></li>
            <li><a href="#" className="hover:text-white">Post a Job</a></li>
            <li><a href="#" className="hover:text-white">Career Advice</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-medium mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
          </div>
        </div>
        
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-medium mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-2">Get the latest job updates in your inbox.</p>
          <div className="flex space-x-2">
            <TextField label="Enter your email" variant="outlined" className="bg-gray-800 text-white border-gray-600" />
            <Button variant="contained" color="primary">Subscribe</Button>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} JobPortal. All Rights Reserved.
      </div>
    </footer>
  );
}
