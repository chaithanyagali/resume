import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';
import type { Project, Experience, Skills } from '../types';

// Register a default font
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Inter',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#4F46E5',
    marginBottom: 10,
  },
  summary: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 10,
    lineHeight: 1.5,
  },
  location: {
    fontSize: 12,
    color: '#4B5563',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111827',
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 12,
    color: '#4F46E5',
    marginBottom: 5,
  },
  period: {
    fontSize: 12,
    color: '#6B7280',
  },
  achievement: {
    fontSize: 11,
    color: '#4B5563',
    marginBottom: 3,
    lineHeight: 1.4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 11,
    backgroundColor: '#EEF2FF',
    color: '#4F46E5',
    padding: '4 8',
    borderRadius: 12,
  },
  projectItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  projectDetail: {
    fontSize: 11,
    color: '#4B5563',
    marginBottom: 3,
  },
  projectTools: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 5,
  },
  tool: {
    fontSize: 10,
    backgroundColor: '#EEF2FF',
    color: '#4F46E5',
    padding: '2 6',
    borderRadius: 8,
  },
  link: {
    color: '#4F46E5',
    textDecoration: 'none',
  },
});

interface ResumePDFProps {
  data: {
    basics: {
      name: string;
      title: string;
      summary: string;
      location: string;
      social: {
        github: string;
        linkedin: string;
        email: string;
      };
    };
    experience: Experience[];
    skills: Skills;
    projects: Project[];
  };
}

export function ResumePDF({ data }: ResumePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.basics.name}</Text>
          <Text style={styles.title}>{data.basics.title}</Text>
          <Text style={styles.summary}>{data.basics.summary}</Text>
          <Text style={styles.location}>{data.basics.location}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {data.experience.map((job, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.company}>{job.company}</Text>
              <Text style={styles.period}>{job.period}</Text>
              {job.achievements.map((achievement, i) => (
                <Text key={i} style={styles.achievement}>
                  • {achievement}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {data.skills.technical.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          {data.projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDetail}>Client: {project.client}</Text>
              <Text style={styles.projectDetail}>Role: {project.role}</Text>
              <Text style={styles.projectDetail}>
                Timeline: {project.startDate} - {project.endDate}
              </Text>
              <Text style={styles.projectDetail}>Team Size: {project.teamSize} members</Text>
              <Text style={styles.projectDetail}>Description: {project.description}</Text>
              <View style={styles.projectTools}>
                {project.tools.map((tool, i) => (
                  <Text key={i} style={styles.tool}>
                    {tool}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}