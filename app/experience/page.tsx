import type { Metadata } from 'next';
import { getWorkExperience } from '@/lib/cosmic';
import ExperienceCard from '@/components/ExperienceCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Experience | My Portfolio',
  description: 'My professional work experience and career journey.',
};

export default async function ExperiencePage() {
  const experiences = await getWorkExperience();

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
            Career
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work Experience
          </h1>
          <p className="text-surface-400 text-lg max-w-2xl">
            My professional journey and the companies I&apos;ve had the privilege of working with.
          </p>
        </div>

        {/* Timeline */}
        {experiences.length > 0 ? (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                  showTimeline
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-2xl bg-surface-800 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Experience Added Yet</h3>
            <p className="text-surface-400 max-w-md mx-auto">
              Work experience entries will appear here once you add them to your Cosmic dashboard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}