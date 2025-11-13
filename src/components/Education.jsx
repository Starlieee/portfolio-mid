const Education = ({ education }) => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education?.map((edu) => (
            <div
              key={edu.id}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🎓
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-gray-600 mb-2">
                    {edu.institution}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="text-blue-600 font-semibold">
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;