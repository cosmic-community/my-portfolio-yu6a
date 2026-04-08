// app/projects/[slug]/page.tsx
import type { Metadata } from 'next';
import { getProjectBySlug, getProjects, getMetafieldValue } from '@/lib/cosmic';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | My Portfolio' };
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: getMetafieldValue(project.metadata?.description) || `Details about the ${project.title} project.`,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const description = getMetafieldValue(project.metadata?.description);
  const techStackRaw = getMetafieldValue(project.metadata?.tech_stack);
  const techStack = techStackRaw
    ? techStackRaw.split(',').map((t) => t.trim()).filter(Boolean)
    : [];
  const liveUrl = getMetafieldValue(project.metadata?.live_url);
  const sourceUrl = getMetafieldValue(project.metadata?.source_url);
  const featuredImage = project.metadata?.featured_image;
  const screenshots = project.metadata?.screenshots;

  return (
    <div className="section-padding pt-28 sm:pt-32">
      <div className="container-wide">
        {/* Breadcrumb */}
        <Link
          href="/projects"
          className="text-surface-400 hover:text-primary-400 text-sm font-medium transition-colors inline-flex items-center gap-1 mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Hero Image */}
        {featuredImage && (
          <div className="relative rounded-2xl overflow-hidden mb-10 aspect-video">
            <img
              src={`${featuredImage.imgix_url}?w=1400&h=700&fit=crop&auto=format,compress`}
              alt={project.title}
              className="w-full h-full object-cover"
              width={1400}
              height={700}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Source Code
              </a>
            )}
          </div>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-white mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          {description && (
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-white mb-4">About This Project</h2>
              <div className="prose prose-invert prose-surface max-w-none">
                <p className="text-surface-300 leading-relaxed whitespace-pre-line">{description}</p>
              </div>
            </div>
          )}

          {/* Content from Cosmic editor */}
          {project.content && (
            <div
              className="prose prose-invert prose-surface max-w-none mb-10 [&_p]:text-surface-300 [&_h2]:text-white [&_h3]:text-white [&_a]:text-primary-400 [&_a:hover]:text-primary-300 [&_li]:text-surface-300 [&_strong]:text-white"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          )}

          {/* Screenshots Gallery */}
          {screenshots && screenshots.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-white mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden border border-surface-700/50"
                  >
                    <img
                      src={`${screenshot.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto"
                      width={800}
                      height={500}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}