import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-700 py-16 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="inline-block bg-orange-100 px-4 py-2 rounded-full text-orange-600 text-xs font-semibold mb-4">
              💡 By Students, For Students
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              LiveNotes
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-md">
              Your trusted study resource hub. Access comprehensive study materials, notes, and previous year papers created by students, for students at Mahila BCA Latur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center gap-2">
                <span className="text-orange-500">📚</span> Browse Notes
              </a>
              <a href="/revision" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center gap-2">
                <span className="text-orange-500">⚡</span> Quick Revision
              </a>
              <a href="/subjects" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center gap-2">
                <span className="text-orange-500">📖</span> All Subjects
              </a>
            </div>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Support</h3>
            <div className="flex flex-col gap-4">
              <a href="/help" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center gap-2">
                <span className="text-orange-500">❓</span> Help Center
              </a>
              <a href="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center gap-2">
                <span className="text-orange-500">🔒</span> Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center gap-2">
                <span className="text-orange-500">📋</span> Terms of Service
              </a>
              <a href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center gap-2">
                <span className="text-orange-500">✉️</span> Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Mahila BCA Live Notes. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="text-xl">📖</span>
            </a>
            <a href="#" className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="text-xl">🌟</span>
            </a>
            <a href="#" className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="text-xl">💬</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;