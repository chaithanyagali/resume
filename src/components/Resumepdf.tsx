// Resume.tsx
import React from 'react';
import resumeData from '../data/resume.json';
import './resume.css'; // CSS to style the content for both web and PDF

const Resume = () => {
  const { basics, experience, skills, projects } = resumeData;

  return (
    <div id="resume">
      {/* Header */}
      <div className="header">
        <h1 className="name">{basics.name}</h1>
        <p className="title">{basics.title}</p>
        <p className="summary">{basics.summary}</p>
        <p className="location">{basics.location}</p>
      </div>

      {/* Experience */}
      <div className="section">
        <h2 className="section-title">Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="experience-item">
            <h3 className="job-title">{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="period">{job.period}</p>
            {job.achievements.map((achievement, i) => (
              <p key={i} className="achievement">
                • {achievement}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.technical.map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="section">
        <h2 className="section-title">Featured Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            {/* Project Image */}
            <div className="project-image">
              <img src={project.image || 'default-image.jpg'} alt={project.title} />
            </div>

            {/* Project Details */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-detail">Client: {project.client}</p>
            <p className="project-detail">Role: {project.role}</p>
            <p className="project-detail">
              Timeline: {project.startDate} - {project.endDate}
            </p>
            <p className="project-detail">Team Size: {project.teamSize} members</p>
            <p className="project-detail">Description: {project.description}</p>

            {/* Responsibilities */}
            <div className="project-responsibilities">
              <h4>Responsibilities:</h4>
              <ul>
                {project.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div className="project-tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
