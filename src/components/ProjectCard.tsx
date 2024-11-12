import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    client: string;
    tools: string[];
    role: string;
    teamSize: number;
    model: string;
    startDate: string;
    endDate: string;
    description: string;
    responsibilities: string[];
    link: string;
  };
}

export function ProjectCard({ project }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-indigo-600 transition-colors"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Client</p>
            <p className="text-gray-900">{project.client}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Role</p>
            <p className="text-gray-900">{project.role}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Timeline</p>
            <p className="text-gray-900">{project.startDate} - {project.endDate}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Team Size</p>
            <p className="text-gray-900">{project.teamSize} members</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-500 mb-2">Tools Used</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {isExpanded && (
          <div className="mt-6 space-y-4 border-t pt-4">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Description</p>
              <p className="text-gray-600">{project.description}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Key Responsibilities</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Project Model</p>
              <p className="text-gray-600">{project.model}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}