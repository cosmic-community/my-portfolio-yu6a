import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import ExperienceCard from '@/components/ExperienceCard';
import { getFeaturedProjects, getProjects, getSkills, getWorkExperience } from '@/lib/cosmic';
import Link from 'next/link';

export default async function HomePage() {
  const [featuredProjects, allProjects, skills, experiences] = await Promise.all([
    getFeaturedProjects(),
    getProjects(),
    getSkills(),
    getWorkExperience(),
  ]);

  const displayProjects = featuredProjects.length > 0 ? featuredProjects : allProjects.slice(0, 3);
  const displayExperiences = experiences.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="section-padding bg-surface-950">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary-400 font-medium text-sm uppercase tracking-wider mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-primary-400 hover:text-primary-300 font-medium transition-colors hidden sm:inline-flex items-center gap-2"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {displayProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400 text-lg">
                No projects to display yet. Add some projects in your Cosmic dashboard!
              </p>
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-surface-900/50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary-400 font-medium text-sm uppercase tracking-wider mb-2">
                Expertise
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Skills & Technologies
              </h2>
            </div>
            <Link
              href="/skills"
              className="text-primary-400 hover:text-primary-300 font-medium transition-colors hidden sm:inline-flex items-center gap-2"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {skills.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <SkillBadge key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400 text-lg">
                No skills added yet. Add some in your Cosmic dashboard!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="section-padding bg-surface-950">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary-400 font-medium text-sm uppercase tracking-wider mb-2">
                Career
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Work Experience
              </h2>
            </div>
            <Link
              href="/experience"
              className="text-primary-400 hover:text-primary-300 font-medium transition-colors hidden sm:inline-flex items-center gap-2"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {displayExperiences.length > 0 ? (
            <div className="space-y-6">
              {displayExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-surface-400 text-lg">
                No work experience added yet. Add some in your Cosmic dashboard!
              </p>
            </div>
          )}

          {experiences.length > 3 && (
            <div className="mt-8 text-center">
              <Link href="/experience" className="btn-primary">
                View Full Timeline
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}