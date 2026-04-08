import type { Skill } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface SkillBadgeProps {
  skill: Skill;
  index: number;
  showProficiency?: boolean;
}

export default function SkillBadge({
  skill,
  index,
  showProficiency = false,
}: SkillBadgeProps) {
  const category = getMetafieldValue(skill.metadata?.category);
  const proficiency = skill.metadata?.proficiency;
  const icon = skill.metadata?.icon;
  const proficiencyValue = typeof proficiency === 'number' ? proficiency : 0;

  // Color mapping based on category
  const getCategoryColor = (cat: string): string => {
    const lower = cat.toLowerCase();
    if (lower.includes('frontend') || lower.includes('front-end') || lower.includes('ui'))
      return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    if (lower.includes('backend') || lower.includes('back-end') || lower.includes('server'))
      return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
    if (lower.includes('devops') || lower.includes('infra') || lower.includes('cloud'))
      return 'from-orange-500/20 to-amber-500/20 border-orange-500/30';
    if (lower.includes('design') || lower.includes('creative'))
      return 'from-pink-500/20 to-rose-500/20 border-pink-500/30';
    if (lower.includes('database') || lower.includes('data'))
      return 'from-purple-500/20 to-violet-500/20 border-purple-500/30';
    if (lower.includes('mobile'))
      return 'from-teal-500/20 to-cyan-500/20 border-teal-500/30';
    return 'from-primary-500/20 to-primary-600/20 border-primary-500/30';
  };

  const colorClass = category
    ? getCategoryColor(category)
    : 'from-primary-500/20 to-primary-600/20 border-primary-500/30';

  return (
    <div
      className={`relative bg-gradient-to-br ${colorClass} border rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/5 animate-fade-in`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex flex-col items-center text-center gap-2">
        {/* Icon */}
        {icon ? (
          <img
            src={`${icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={skill.title}
            className="w-10 h-10 rounded-lg object-contain"
            width={40}
            height={40}
          />
        ) : (
          <div className="w-10 h-10 rounded-lg bg-surface-700/50 flex items-center justify-center">
            <span className="text-lg font-bold text-surface-400">
              {skill.title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-sm font-semibold text-white leading-tight">
          {skill.title}
        </h3>

        {/* Proficiency Bar */}
        {showProficiency && proficiencyValue > 0 && (
          <div className="w-full mt-1">
            <div className="w-full h-1.5 rounded-full bg-surface-700/50 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-700"
                style={{ width: `${Math.min(proficiencyValue, 100)}%` }}
              />
            </div>
            <p className="text-[10px] text-surface-500 mt-1">
              {proficiencyValue}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}