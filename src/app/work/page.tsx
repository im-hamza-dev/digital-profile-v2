import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Work – ScrumStack Solutions',
  description:
    'Featured projects and case studies. How we helped others succeed.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg mb-12 group cursor-default">
            How we helped others{' '}
            <span className="transition-colors group-hover:text-primary">
              succeed
            </span>
            .
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/work/${project.id}`}
                  className="block bg-secondary border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors p-6"
                >
                  <span className="text-primary text-sm font-semibold">
                    {project.industry}
                  </span>
                  <h2 className="text-foreground text-xl font-bold mt-2 hover:text-primary transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link href="/" className="text-primary font-medium hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
