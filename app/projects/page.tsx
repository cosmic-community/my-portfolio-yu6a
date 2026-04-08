import type { Metadata } from 'next';
import { getProjects } from '@/lib/cosmic';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects | My Portfolio',
  description: 'Browse my portfolio of projects, featuring web applications, tools, and creative experiments.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="section-padding pt-28 sm:pt-32">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-surface-400 hover:text-primary-400 text-sm font-medium transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <p className="text-primary-400 font-medium text-sm uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            All Projects
          </h1>
          <p className="text-surface-400 text-lg max-w-2xl">
            A collection of my work spanning web applications, tools, and creative experiments.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-2xl bg-surface-800 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Projects Yet</h3>
            <p className="text-surface-400 max-w-md mx-auto">
              Projects will appear here once you add them to your Cosmic dashboard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}