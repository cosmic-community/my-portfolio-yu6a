import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-900/50 border-t border-surface-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MP</span>
              </div>
              <span className="font-bold text-white text-lg">My Portfolio</span>
            </div>
            <p className="text-surface-400 text-sm leading-relaxed">
              A creative developer portfolio showcasing projects, skills, and
              professional experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-surface-400 hover:text-primary-400 text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="block text-surface-400 hover:text-primary-400 text-sm transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="block text-surface-400 hover:text-primary-400 text-sm transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/experience"
                className="block text-surface-400 hover:text-primary-400 text-sm transition-colors"
              >
                Experience
              </Link>
            </div>
          </div>

          {/* Built With */}
          <div>
            <h3 className="text-white font-semibold mb-4">Built With</h3>
            <div className="space-y-2">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-surface-400 hover:text-primary-400 text-sm transition-colors"
              >
                Next.js
              </a>
              <a
                href="https://www.cosmicjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-surface-400 hover:text-primary-400 text-sm transition-colors"
              >
                Cosmic
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-surface-400 hover:text-primary-400 text-sm transition-colors"
              >
                Tailwind CSS
              </a>
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-surface-400 hover:text-primary-400 text-sm transition-colors"
              >
                TypeScript
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-surface-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface-500 text-sm">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          <p className="text-surface-600 text-xs">
            Powered by{' '}
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-400 hover:text-primary-400 transition-colors"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}