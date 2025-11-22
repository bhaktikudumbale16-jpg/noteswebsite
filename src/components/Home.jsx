import React, { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp, Book, FileText } from "lucide-react";

// ---------------------- COMPONENT 1: BCA ----------------------
const DepartmentBCA = () => {
  const semesters = [
    { 
      id: 1, 
      name: "First Semester", 
      code: "SEM I",
      subjects: [
        { name: "Fundamentals of Computer", pdfUrl: "/pdfs/bca/sem1/fundamentals-of-computer.pdf" },
        { name: "Programming in C", pdfUrl: "/pdfs/bca/sem1/programming-in-c.pdf" },
        { name: "Mathematics-I", pdfUrl: "/pdfs/bca/sem1/mathematics-1.pdf" },
        { name: "English Communication", pdfUrl: "/pdfs/bca/sem1/english-communication.pdf" },
        { name: "Environmental Studies", pdfUrl: "/pdfs/bca/sem1/environmental-studies.pdf" }
      ]
    },
    { 
      id: 2, 
      name: "Second Semester", 
      code: "SEM II",
      subjects: [
        { name: "Data Structures", pdfUrl: "/pdfs/bca/sem2/data-structures.pdf" },
        { name: "Database Management System", pdfUrl: "/pdfs/bca/sem2/dbms.pdf" },
        { name: "Mathematics-II", pdfUrl: "/pdfs/bca/sem2/mathematics-2.pdf" },
        { name: "Operating Systems", pdfUrl: "/pdfs/bca/sem2/operating-systems.pdf" },
        { name: "Web Technologies", pdfUrl: "/pdfs/bca/sem2/web-technologies.pdf" }
      ]
    },
    { 
      id: 3, 
      name: "Third Semester", 
      code: "SEM III",
      subjects: [
        { name: "Object Oriented Programming with C++", pdfUrl: "/pdfs/bca/sem3/oop-cpp.pdf" },
        { name: "Software Engineering", pdfUrl: "/pdfs/bca/sem3/software-engineering.pdf" },
        { name: "Computer Networks", pdfUrl: "/pdfs/bca/sem3/computer-networks.pdf" },
        { name: "Discrete Mathematics", pdfUrl: "/pdfs/bca/sem3/discrete-mathematics.pdf" },
        { name: "Java Programming", pdfUrl: "/pdfs/bca/sem3/java-programming.pdf" }
      ]
    },
    { 
      id: 4, 
      name: "Fourth Semester", 
      code: "SEM IV",
      subjects: [
        { name: "Advanced Java", pdfUrl: "/pdfs/bca/sem4/advanced-java.pdf" },
        { name: "Python Programming", pdfUrl: "/pdfs/bca/sem4/python-programming.pdf" },
        { name: "Computer Graphics", pdfUrl: "/pdfs/bca/sem4/computer-graphics.pdf" },
        { name: "Theory of Computation", pdfUrl: "/pdfs/bca/sem4/theory-of-computation.pdf" },
        { name: "Mobile Application Development", pdfUrl: "/pdfs/bca/sem4/mobile-app-dev.pdf" }
      ]
    },
    { 
      id: 5, 
      name: "Fifth Semester", 
      code: "SEM V",
      subjects: [
        { name: "Artificial Intelligence", pdfUrl: "/pdfs/bca/sem5/artificial-intelligence.pdf" },
        { name: "Cloud Computing", pdfUrl: "/pdfs/bca/sem5/cloud-computing.pdf" },
        { name: "Information Security", pdfUrl: "/pdfs/bca/sem5/information-security.pdf" },
        { name: "Machine Learning", pdfUrl: "/pdfs/bca/sem5/machine-learning.pdf" },
        { name: "Elective-I", pdfUrl: "/pdfs/bca/sem5/elective-1.pdf" }
      ]
    },
    { 
      id: 6, 
      name: "Sixth Semester", 
      code: "SEM VI",
      subjects: [
        { name: "Big Data Analytics", pdfUrl: "/pdfs/bca/sem6/big-data-analytics.pdf" },
        { name: "IoT and Applications", pdfUrl: "/pdfs/bca/sem6/iot-applications.pdf" },
        { name: "Blockchain Technology", pdfUrl: "/pdfs/bca/sem6/blockchain.pdf" },
        { name: "Project Work", pdfUrl: "/pdfs/bca/sem6/project-work.pdf" },
        { name: "Elective-II", pdfUrl: "/pdfs/bca/sem6/elective-2.pdf" }
      ]
    }
  ];

  return (
    <DepartmentCard
      title="BCA Department"
      subtitle="Bachelor of Computer Applications"
      semesters={semesters}
    />
  );
};

// ---------------------- COMPONENT 2: BSC CLS ----------------------
const BscClsDepartment = () => {
  const semesters = [
    { 
      id: 1, 
      name: "First Semester", 
      code: "SEM I",
      subjects: [
        { name: "Human Anatomy", pdfUrl: "/pdfs/bsc-cls/sem1/human-anatomy.pdf" },
        { name: "Medical Biochemistry", pdfUrl: "/pdfs/bsc-cls/sem1/medical-biochemistry.pdf" },
        { name: "Basic Hematology", pdfUrl: "/pdfs/bsc-cls/sem1/basic-hematology.pdf" },
        { name: "Laboratory Techniques", pdfUrl: "/pdfs/bsc-cls/sem1/lab-techniques.pdf" },
        { name: "Medical Ethics", pdfUrl: "/pdfs/bsc-cls/sem1/medical-ethics.pdf" }
      ]
    },
    { 
      id: 2, 
      name: "Second Semester", 
      code: "SEM II",
      subjects: [
        { name: "Clinical Pathology", pdfUrl: "/pdfs/bsc-cls/sem2/clinical-pathology.pdf" },
        { name: "Immunology", pdfUrl: "/pdfs/bsc-cls/sem2/immunology.pdf" },
        { name: "Blood Banking", pdfUrl: "/pdfs/bsc-cls/sem2/blood-banking.pdf" },
        { name: "Microbiology", pdfUrl: "/pdfs/bsc-cls/sem2/microbiology.pdf" },
        { name: "Lab Management", pdfUrl: "/pdfs/bsc-cls/sem2/lab-management.pdf" }
      ]
    },
    { 
      id: 3, 
      name: "Third Semester", 
      code: "SEM III",
      subjects: [
        { name: "Advanced Hematology", pdfUrl: "/pdfs/bsc-cls/sem3/advanced-hematology.pdf" },
        { name: "Clinical Chemistry", pdfUrl: "/pdfs/bsc-cls/sem3/clinical-chemistry.pdf" },
        { name: "Histopathology", pdfUrl: "/pdfs/bsc-cls/sem3/histopathology.pdf" },
        { name: "Cytology", pdfUrl: "/pdfs/bsc-cls/sem3/cytology.pdf" },
        { name: "Quality Control", pdfUrl: "/pdfs/bsc-cls/sem3/quality-control.pdf" }
      ]
    },
    { 
      id: 4, 
      name: "Fourth Semester", 
      code: "SEM IV",
      subjects: [
        { name: "Molecular Diagnostics", pdfUrl: "/pdfs/bsc-cls/sem4/molecular-diagnostics.pdf" },
        { name: "Clinical Microbiology", pdfUrl: "/pdfs/bsc-cls/sem4/clinical-microbiology.pdf" },
        { name: "Serology", pdfUrl: "/pdfs/bsc-cls/sem4/serology.pdf" },
        { name: "Lab Instrumentation", pdfUrl: "/pdfs/bsc-cls/sem4/lab-instrumentation.pdf" },
        { name: "Research Methodology", pdfUrl: "/pdfs/bsc-cls/sem4/research-methodology.pdf" }
      ]
    },
    { 
      id: 5, 
      name: "Fifth Semester", 
      code: "SEM V",
      subjects: [
        { name: "Advanced Immunology", pdfUrl: "/pdfs/bsc-cls/sem5/advanced-immunology.pdf" },
        { name: "Clinical Diagnostics", pdfUrl: "/pdfs/bsc-cls/sem5/clinical-diagnostics.pdf" },
        { name: "Laboratory Medicine", pdfUrl: "/pdfs/bsc-cls/sem5/laboratory-medicine.pdf" },
        { name: "Biostatistics", pdfUrl: "/pdfs/bsc-cls/sem5/biostatistics.pdf" },
        { name: "Elective-I", pdfUrl: "/pdfs/bsc-cls/sem5/elective-1.pdf" }
      ]
    },
    { 
      id: 6, 
      name: "Sixth Semester", 
      code: "SEM VI",
      subjects: [
        { name: "Clinical Training", pdfUrl: "/pdfs/bsc-cls/sem6/clinical-training.pdf" },
        { name: "Lab Safety & Biosafety", pdfUrl: "/pdfs/bsc-cls/sem6/lab-safety.pdf" },
        { name: "Project Work", pdfUrl: "/pdfs/bsc-cls/sem6/project-work.pdf" },
        { name: "Internship", pdfUrl: "/pdfs/bsc-cls/sem6/internship.pdf" },
        { name: "Elective-II", pdfUrl: "/pdfs/bsc-cls/sem6/elective-2.pdf" }
      ]
    }
  ];

  return (
    <DepartmentCard
      title="BSC CLS Department"
      subtitle="Bachelor of Science in Clinical Laboratory Science"
      semesters={semesters}
    />
  );
};

// ---------------------- COMPONENT 3: Microbiology ----------------------
const MicrobiologyDepartment = () => {
  const semesters = [
    { 
      id: 1, 
      name: "First Semester", 
      code: "SEM I",
      subjects: [
        { name: "General Microbiology", pdfUrl: "/pdfs/microbiology/sem1/general-microbiology.pdf" },
        { name: "Cell Biology", pdfUrl: "/pdfs/microbiology/sem1/cell-biology.pdf" },
        { name: "Chemistry", pdfUrl: "/pdfs/microbiology/sem1/chemistry.pdf" },
        { name: "Biostatistics", pdfUrl: "/pdfs/microbiology/sem1/biostatistics.pdf" },
        { name: "English", pdfUrl: "/pdfs/microbiology/sem1/english.pdf" }
      ]
    },
    { 
      id: 2, 
      name: "Second Semester", 
      code: "SEM II",
      subjects: [
        { name: "Bacteriology", pdfUrl: "/pdfs/microbiology/sem2/bacteriology.pdf" },
        { name: "Biochemistry", pdfUrl: "/pdfs/microbiology/sem2/biochemistry.pdf" },
        { name: "Genetics", pdfUrl: "/pdfs/microbiology/sem2/genetics.pdf" },
        { name: "Immunology", pdfUrl: "/pdfs/microbiology/sem2/immunology.pdf" },
        { name: "Laboratory Techniques", pdfUrl: "/pdfs/microbiology/sem2/lab-techniques.pdf" }
      ]
    },
    { 
      id: 3, 
      name: "Third Semester", 
      code: "SEM III",
      subjects: [
        { name: "Virology", pdfUrl: "/pdfs/microbiology/sem3/virology.pdf" },
        { name: "Mycology", pdfUrl: "/pdfs/microbiology/sem3/mycology.pdf" },
        { name: "Microbial Physiology", pdfUrl: "/pdfs/microbiology/sem3/microbial-physiology.pdf" },
        { name: "Molecular Biology", pdfUrl: "/pdfs/microbiology/sem3/molecular-biology.pdf" },
        { name: "Bioinformatics", pdfUrl: "/pdfs/microbiology/sem3/bioinformatics.pdf" }
      ]
    },
    { 
      id: 4, 
      name: "Fourth Semester", 
      code: "SEM IV",
      subjects: [
        { name: "Medical Microbiology", pdfUrl: "/pdfs/microbiology/sem4/medical-microbiology.pdf" },
        { name: "Food Microbiology", pdfUrl: "/pdfs/microbiology/sem4/food-microbiology.pdf" },
        { name: "Environmental Microbiology", pdfUrl: "/pdfs/microbiology/sem4/environmental-microbiology.pdf" },
        { name: "Microbial Genetics", pdfUrl: "/pdfs/microbiology/sem4/microbial-genetics.pdf" },
        { name: "Biotechnology", pdfUrl: "/pdfs/microbiology/sem4/biotechnology.pdf" }
      ]
    },
    { 
      id: 5, 
      name: "Fifth Semester", 
      code: "SEM V",
      subjects: [
        { name: "Industrial Microbiology", pdfUrl: "/pdfs/microbiology/sem5/industrial-microbiology.pdf" },
        { name: "Pharmaceutical Microbiology", pdfUrl: "/pdfs/microbiology/sem5/pharmaceutical-microbiology.pdf" },
        { name: "Soil Microbiology", pdfUrl: "/pdfs/microbiology/sem5/soil-microbiology.pdf" },
        { name: "Research Methodology", pdfUrl: "/pdfs/microbiology/sem5/research-methodology.pdf" },
        { name: "Elective-I", pdfUrl: "/pdfs/microbiology/sem5/elective-1.pdf" }
      ]
    },
    { 
      id: 6, 
      name: "Sixth Semester", 
      code: "SEM VI",
      subjects: [
        { name: "Microbial Technology", pdfUrl: "/pdfs/microbiology/sem6/microbial-technology.pdf" },
        { name: "Clinical Microbiology", pdfUrl: "/pdfs/microbiology/sem6/clinical-microbiology.pdf" },
        { name: "Project Work", pdfUrl: "/pdfs/microbiology/sem6/project-work.pdf" },
        { name: "Internship", pdfUrl: "/pdfs/microbiology/sem6/internship.pdf" },
        { name: "Elective-II", pdfUrl: "/pdfs/microbiology/sem6/elective-2.pdf" }
      ]
    }
  ];

  return (
    <DepartmentCard
      title="Microbiology Department"
      subtitle="Bachelor of Science in Microbiology"
      semesters={semesters}
    />
  );
};

// ---------------------- COMPONENT 4: Fashion Design ----------------------
const FashionDesignDepartment = () => {
  const semesters = [
    { 
      id: 1, 
      name: "First Semester", 
      code: "SEM I",
      subjects: [
        { name: "Elements of Design", pdfUrl: "/pdfs/fashion/sem1/elements-of-design.pdf" },
        { name: "Fashion Illustration", pdfUrl: "/pdfs/fashion/sem1/fashion-illustration.pdf" },
        { name: "Textile Science", pdfUrl: "/pdfs/fashion/sem1/textile-science.pdf" },
        { name: "History of Costume", pdfUrl: "/pdfs/fashion/sem1/history-of-costume.pdf" },
        { name: "Basic Sewing Techniques", pdfUrl: "/pdfs/fashion/sem1/basic-sewing.pdf" }
      ]
    },
    { 
      id: 2, 
      name: "Second Semester", 
      code: "SEM II",
      subjects: [
        { name: "Pattern Making", pdfUrl: "/pdfs/fashion/sem2/pattern-making.pdf" },
        { name: "Fashion Drawing", pdfUrl: "/pdfs/fashion/sem2/fashion-drawing.pdf" },
        { name: "Fabric Study", pdfUrl: "/pdfs/fashion/sem2/fabric-study.pdf" },
        { name: "Color Theory", pdfUrl: "/pdfs/fashion/sem2/color-theory.pdf" },
        { name: "Garment Construction", pdfUrl: "/pdfs/fashion/sem2/garment-construction.pdf" }
      ]
    },
    { 
      id: 3, 
      name: "Third Semester", 
      code: "SEM III",
      subjects: [
        { name: "Fashion Design", pdfUrl: "/pdfs/fashion/sem3/fashion-design.pdf" },
        { name: "Draping Techniques", pdfUrl: "/pdfs/fashion/sem3/draping-techniques.pdf" },
        { name: "Surface Ornamentation", pdfUrl: "/pdfs/fashion/sem3/surface-ornamentation.pdf" },
        { name: "Computer Aided Design", pdfUrl: "/pdfs/fashion/sem3/cad.pdf" },
        { name: "Fashion Merchandising", pdfUrl: "/pdfs/fashion/sem3/fashion-merchandising.pdf" }
      ]
    },
    { 
      id: 4, 
      name: "Fourth Semester", 
      code: "SEM IV",
      subjects: [
        { name: "Advanced Pattern Making", pdfUrl: "/pdfs/fashion/sem4/advanced-pattern-making.pdf" },
        { name: "Fashion Forecasting", pdfUrl: "/pdfs/fashion/sem4/fashion-forecasting.pdf" },
        { name: "Textile Testing", pdfUrl: "/pdfs/fashion/sem4/textile-testing.pdf" },
        { name: "Accessory Design", pdfUrl: "/pdfs/fashion/sem4/accessory-design.pdf" },
        { name: "Portfolio Development", pdfUrl: "/pdfs/fashion/sem4/portfolio-development.pdf" }
      ]
    },
    { 
      id: 5, 
      name: "Fifth Semester", 
      code: "SEM V",
      subjects: [
        { name: "Fashion Marketing", pdfUrl: "/pdfs/fashion/sem5/fashion-marketing.pdf" },
        { name: "Costume Design", pdfUrl: "/pdfs/fashion/sem5/costume-design.pdf" },
        { name: "Quality Control", pdfUrl: "/pdfs/fashion/sem5/quality-control.pdf" },
        { name: "Fashion Photography", pdfUrl: "/pdfs/fashion/sem5/fashion-photography.pdf" },
        { name: "Elective-I", pdfUrl: "/pdfs/fashion/sem5/elective-1.pdf" }
      ]
    },
    { 
      id: 6, 
      name: "Sixth Semester", 
      code: "SEM VI",
      subjects: [
        { name: "Fashion Show Production", pdfUrl: "/pdfs/fashion/sem6/fashion-show-production.pdf" },
        { name: "Entrepreneurship", pdfUrl: "/pdfs/fashion/sem6/entrepreneurship.pdf" },
        { name: "Internship", pdfUrl: "/pdfs/fashion/sem6/internship.pdf" },
        { name: "Final Collection Project", pdfUrl: "/pdfs/fashion/sem6/final-collection.pdf" },
        { name: "Elective-II", pdfUrl: "/pdfs/fashion/sem6/elective-2.pdf" }
      ]
    }
  ];

  return (
    <DepartmentCard
      title="Fashion Design Department"
      subtitle="Bachelor of Fashion Design"
      semesters={semesters}
    />
  );
};

// ---------------------- COMPONENT 5: MSC CS ----------------------
const MscCsDepartment = () => {
  const semesters = [
    { 
      id: 1, 
      name: "First Semester", 
      code: "SEM I",
      subjects: [
        { name: "Advanced Data Structures", pdfUrl: "/pdfs/msc-cs/sem1/advanced-data-structures.pdf" },
        { name: "Advanced Database Systems", pdfUrl: "/pdfs/msc-cs/sem1/advanced-database.pdf" },
        { name: "Computer Architecture", pdfUrl: "/pdfs/msc-cs/sem1/computer-architecture.pdf" },
        { name: "Mathematical Foundation", pdfUrl: "/pdfs/msc-cs/sem1/mathematical-foundation.pdf" },
        { name: "Research Methodology", pdfUrl: "/pdfs/msc-cs/sem1/research-methodology.pdf" }
      ]
    },
    { 
      id: 2, 
      name: "Second Semester", 
      code: "SEM II",
      subjects: [
        { name: "Advanced Algorithms", pdfUrl: "/pdfs/msc-cs/sem2/advanced-algorithms.pdf" },
        { name: "Machine Learning", pdfUrl: "/pdfs/msc-cs/sem2/machine-learning.pdf" },
        { name: "Network Security", pdfUrl: "/pdfs/msc-cs/sem2/network-security.pdf" },
        { name: "Cloud Computing", pdfUrl: "/pdfs/msc-cs/sem2/cloud-computing.pdf" },
        { name: "Soft Computing", pdfUrl: "/pdfs/msc-cs/sem2/soft-computing.pdf" }
      ]
    },
    { 
      id: 3, 
      name: "Third Semester", 
      code: "SEM III",
      subjects: [
        { name: "Artificial Intelligence", pdfUrl: "/pdfs/msc-cs/sem3/artificial-intelligence.pdf" },
        { name: "Big Data Analytics", pdfUrl: "/pdfs/msc-cs/sem3/big-data-analytics.pdf" },
        { name: "Internet of Things", pdfUrl: "/pdfs/msc-cs/sem3/iot.pdf" },
        { name: "Cryptography", pdfUrl: "/pdfs/msc-cs/sem3/cryptography.pdf" },
        { name: "Elective-I", pdfUrl: "/pdfs/msc-cs/sem3/elective-1.pdf" }
      ]
    },
    { 
      id: 4, 
      name: "Fourth Semester", 
      code: "SEM IV",
      subjects: [
        { name: "Deep Learning", pdfUrl: "/pdfs/msc-cs/sem4/deep-learning.pdf" },
        { name: "Blockchain Technology", pdfUrl: "/pdfs/msc-cs/sem4/blockchain.pdf" },
        { name: "Dissertation", pdfUrl: "/pdfs/msc-cs/sem4/dissertation.pdf" },
        { name: "Project Work", pdfUrl: "/pdfs/msc-cs/sem4/project-work.pdf" },
        { name: "Elective-II", pdfUrl: "/pdfs/msc-cs/sem4/elective-2.pdf" }
      ]
    }
  ];

  return (
    <DepartmentCard
      title="MSC CS Department"
      subtitle="Master of Science in Computer Science"
      semesters={semesters}
    />
  );
};

// ---------------------------------------------------------------------
//             REUSABLE TEMPLATE FOR ALL DEPARTMENT CARDS
// ---------------------------------------------------------------------
const DepartmentCard = ({ title, subtitle, semesters }) => {
  const [expandedSemester, setExpandedSemester] = useState(null);

  const toggleSemester = (semesterId) => {
    setExpandedSemester(expandedSemester === semesterId ? null : semesterId);
  };

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-t-3xl p-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-2xl shadow-lg">
            <BookOpen className="w-7 h-7 text-orange-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-0.5">{title}</h2>
            <p className="text-orange-100 text-sm">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Semesters */}
      <div className="bg-white rounded-b-3xl shadow-xl overflow-hidden border-2 border-gray-100">
        <div className="p-6">
          <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-5 px-2">
            Academic Semesters
          </h3>

          <div className="space-y-3">
            {semesters.map((semester) => (
              <div
                key={semester.id}
                className="border-2 border-gray-200 rounded-2xl hover:border-orange-600 transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleSemester(semester.id)}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-orange-50 hover:from-orange-50 hover:to-orange-100 transition-all duration-300 px-5 py-4 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      {semester.code}
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {semester.name}
                    </span>
                  </div>
                  {expandedSemester === semester.id ? (
                    <ChevronUp className="w-5 h-5 text-orange-600 font-bold" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-600 font-bold" />
                  )}
                </button>

                {/* Subjects Dropdown */}
                {expandedSemester === semester.id && (
                  <div className="bg-orange-50 border-t-2 border-orange-200 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Book className="w-5 h-5 text-orange-600" />
                      <h4 className="text-sm font-bold text-gray-700">Subjects</h4>
                    </div>
                    <ul className="space-y-3">
                      {semester.subjects.map((subject, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm bg-white rounded-xl p-4 hover:shadow-md transition-all duration-200 border border-gray-100"
                        >
                          <FileText className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <a
                            href={subject.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-orange-600 hover:underline transition-colors duration-200 font-medium flex-1"
                          >
                            {subject.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-orange-50 px-6 py-4 border-t-2 border-orange-200">
          <p className="text-sm text-gray-600 text-center font-medium">
            Total Semesters:{" "}
            <span className="font-bold text-orange-600 text-base">
              {semesters.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------
//                        MAIN HOME PAGE
// ---------------------------------------------------------------------
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title - Hero Style */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-orange-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
              🎓 By Students, For Students
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Your Trusted Study <span className="text-orange-600">Resource Hub</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Access comprehensive study materials, notes, and previous year papers created by students, for students at Mahila BCA Latur
          </p>
        </div>

        {/* Grid Layout - 2x2 with centered last card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <DepartmentBCA />
          <BscClsDepartment />
          <MicrobiologyDepartment />
          <FashionDesignDepartment />
        </div>

        {/* MSC CS Centered */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 md:px-4">
            <MscCsDepartment />
          </div>
        </div>
      </div>
    </div>
  );
}