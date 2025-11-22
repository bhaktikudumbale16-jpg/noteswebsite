 import React, { useState, useEffect } from 'react';
import { BookOpen, Download, Search, Users, Star, ArrowRight, GraduationCap, FileText, Lightbulb, Award } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: BookOpen, text: "Comprehensive Study Materials", color: "text-orange-500" },
    { icon: FileText, text: "Previous Year Papers", color: "text-orange-600" },
    { icon: Lightbulb, text: "Quick Revision Notes", color: "text-orange-400" }
  ];

  const stats = [
    { number: "500+", label: "Notes Available" },
    { number: "1000+", label: "Happy Students" },
    { number: "50+", label: "Subjects Covered" },
    { number: "24/7", label: "Access Anytime" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-semibold">By Students, For Students</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Your Trusted Study
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Resource Hub
              </span>
            </h1>
            
            <p class="text-xl text-slate-600 mb-8 leading-relaxed">
  Access comprehensive study materials, notes, and previous year papers created
  <span class="text-purple-600 font-semibold">by</span>
  students,
  <span class="text-purple-600 font-semibold">for</span>
  students at
  <span class="text-purple-600 font-semibold">Mahila BCA Latur</span>.
</p>

            {/* Search Bar */}
            <div className="bg-white rounded-full p-2 flex items-center gap-3 mb-8 shadow-lg border border-slate-200">
              <Search className="w-5 h-5 text-slate-400 ml-4" />
              <input 
                type="text" 
                placeholder="Search for notes, subjects, or topics..."
                className="bg-transparent text-slate-700 placeholder-slate-400 flex-1 outline-none"
              />
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold">
                Search
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2 group">
                Browse Notes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>

            {/* Rotating Features */}
            <div className="flex flex-wrap items-center gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 ${
                      activeFeature === index ? 'scale-110 opacity-100' : 'scale-95 opacity-60'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${activeFeature === index ? 'bg-orange-100' : 'bg-slate-100'}`}>
                      <Icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    {activeFeature === index && (
                      <span className="text-slate-700 font-medium text-sm">{feature.text}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-4 rounded-2xl shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-bold text-lg">Latest Notes</h3>
                    <p className="text-slate-500 text-sm">Updated Daily</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['Data Structures', 'Java Programming', 'Database Management'].map((subject, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-4 hover:bg-orange-50 transition-colors cursor-pointer border border-slate-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-orange-500" />
                          <span className="text-slate-700 font-medium">{subject}</span>
                        </div>
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-white" />
                  {/* <div>
                    <p className="text-white text-2xl font-bold">500+</p>
                    <p className="text-orange-100 text-sm">Active Students</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <p className="text-4xl font-bold text-slate-800 mb-2">{stat.number}</p>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}