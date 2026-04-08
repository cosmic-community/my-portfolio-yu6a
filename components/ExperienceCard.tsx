import type { WorkExperience } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
  showTimeline?: boolean;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

export default function ExperienceCard({
  experience,
  index,
  showTimeline = false,
}: ExperienceCardProps) {
  const company = getMetafieldValue(experience.metadata?.company);
  const role = getMetafieldValue(experience.metadata?.role);
  const description = getMetafieldValue(experience.metadata?.description);
  const startDate = getMetafieldValue(experience.metadata?.start_date);
  const endDate = getMetafieldValue(experience.metadata?.end_date);
  const currentlyWorking = experience.metadata?.currently_working;
  const companyLogo = experience.metadata?.company_logo;

  const dateRange = startDate
    ? `${formatDate(startDate)} — ${currentlyWorking ? 'Present' : endDate ? formatDate(endDate) : 'Present'}`
    : '';

  return (
    <div
      className={`relative animate-slide-up ${showTimeline ? 'pl-6 md:pl-20' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Timeline Dot */}
      {showTimeline && (
        <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2">
          <div className="w-3 h-3 rounded-full bg-primary-500 ring-4 ring-surface-950" />
        </div>
      )}

      <div className="card-glass-hover p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            {companyLogo ? (
              <img
                src={`${companyLogo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                alt={company || experience.title}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-contain bg-surface-700/50 p-1"
                width={56}
                height={56}
              />
            ) : (
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/30 flex items-center justify-center">
                <span className="text-primary-400 font-bold text-lg">
                  {(company || experience.title).charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-white">
                {role || experience.title}
              </h3>
              {currentlyWorking && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>

            {company && (
              <p className="text-primary-400 font-medium text-sm mb-1">
                {company}
              </p>
            )}

            {dateRange && (
              <p className="text-surface-500 text-sm mb-4">{dateRange}</p>
            )}

            {description && (
              <p className="text-surface-400 text-sm leading-relaxed whitespace-pre-line">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}