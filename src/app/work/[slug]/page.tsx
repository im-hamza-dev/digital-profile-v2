import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projects';
import { ImageGallery } from '@/components/ui/image-gallery';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project – ScrumStack Solutions' };
  return {
    title: `${project.name} – ScrumStack Solutions`,
    description: project.description,
    openGraph: {
      title: `${project.name} – ScrumStack Solutions`,
      description: project.description,
    },
  };
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-16">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            ← Back to work
          </Link>

          {/* Image Gallery */}
          <ImageGallery images={project.images} projectName={project.name} />

          <span className="text-primary text-sm font-semibold">
            {project.industry}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            {project.name}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Value Delivered */}
          {project.valueDelivered && (
            <div className="mt-6 p-6 bg-secondary border border-border rounded-xl">
              <h2 className="text-foreground font-semibold mb-2">Value Delivered</h2>
              <p className="text-muted-foreground">{project.valueDelivered}</p>
            </div>
          )}

          {/* Stack */}
          {project.stack && (
            <div className="mt-6">
              <h2 className="text-foreground font-semibold mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.split(", ").map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary border border-border rounded-lg text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground">
              {project.metric}
            </span>
            <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground">
              {project.services}
            </span>
          </div>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
