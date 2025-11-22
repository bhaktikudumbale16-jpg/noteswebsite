"use client"

import { useState } from "react"
import { BookOpen, Menu, X, ChevronDown, Search } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const departments = [
    { name: "BCA", path: "#bca" },
    { name: "BSC CLS", path: "#bsc-cls" },
    { name: "Microbiology", path: "#microbiology" },
    { name: "Fashion Design", path: "#fashion" },
    { name: "MSC CS", path: "#msc-cs" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-xl shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-slate-900">StudyHub</h1>
              <p className="text-xs text-orange-600 font-semibold">Mahila BCA Latur</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </a>

            {/* Departments Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-slate-700 hover:text-orange-600 font-medium transition-colors"
              >
                Departments
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                  {departments.map((dept, idx) => (
                    <a
                      key={idx}
                      href={dept.path}
                      className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-slate-100 last:border-b-0"
                    >
                      {dept.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#notes" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
              Notes
            </a>
            <a href="#papers" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
              Papers
            </a>
            <a href="#about" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
              About
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-slate-700" />
            </button>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Browse Notes
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors">
            {isOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-200 pt-4">
            <a href="#home" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded-lg transition-colors">
              Home
            </a>

            {/* Mobile Departments Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between px-4 py-2 text-slate-700 hover:bg-orange-50 rounded-lg transition-colors"
              >
                Departments
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isDropdownOpen && (
                <div className="bg-slate-50 rounded-lg mt-1 overflow-hidden">
                  {departments.map((dept, idx) => (
                    <a
                      key={idx}
                      href={dept.path}
                      className="block px-6 py-2 text-sm text-slate-700 hover:bg-orange-100 transition-colors"
                    >
                      {dept.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#notes" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded-lg transition-colors">
              Notes
            </a>
            <a
              href="#papers"
              className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded-lg transition-colors"
            >
              Papers
            </a>
            <a href="#about" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded-lg transition-colors">
              About
            </a>

            <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all mt-4">
              Browse Notes
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
