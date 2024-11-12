import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { ResumePDF } from './components/Resumepdf';
import { pdf } from '@react-pdf/renderer';
import resumeData from './data/resume.json';

function App() {
  const { basics, experience, skills, projects } = resumeData;

  const handleDownload = async () => {
    const blob = await pdf(<ResumePDF data={resumeData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${basics.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{basics.name}</h1>
              <h2 className="text-xl text-indigo-600 mb-4">{basics.title}</h2>
              <p className="text-gray-600 mb-6 max-w-2xl">{basics.summary}</p>
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{basics.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img
                src={basics.image}
                alt={basics.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="flex gap-4">
                <a href={basics.social.github} className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={basics.social.linkedin} className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${basics.social.email}`} className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-indigo-600">{job.company}</p>
                  </div>
                  <span className="text-gray-500">{job.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-gray-600 mb-6">
              Open to new opportunities and interesting projects
            </p>
            <div className="flex justify-center gap-6">
              <button 
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
              <a 
                href={`mailto:${basics.social.email}`}
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} {basics.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;