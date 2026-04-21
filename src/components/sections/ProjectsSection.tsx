'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects';
import { useRef, useEffect, useCallback } from 'react';

function ProjectCard({
  project,
  onLinkClick,
}: {
  project: (typeof projects)[number];
  onLinkClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <Link
      href={`/work/${project.id}`}
      onClick={onLinkClick}
      className="group/card relative overflow-hidden rounded-2xl bg-secondary border border-border transition-[transform] duration-300 ease-out flex flex-col flex-shrink-0 w-[380px] h-[490px] hover:z-10"
    >
      <div
        className="h-[285px] group-hover/card:h-[150px] transition-[height] duration-300 ease-out relative overflow-hidden bg-secondary select-none"
        onDragStart={(e) => e.preventDefault()}
      >
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          quality={70}
          draggable={false}
          className="object-cover transition-transform duration-500 group-hover/card:scale-105 will-change-transform"
        />
      </div>
      <div className="flex-1 p-5 sm:p-6 bg-background/95 dark:bg-background/60 border-t border-border transition-[padding] duration-300 ease-out">
        <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full border border-border mb-3">
          {project.industry}
        </span>
        <h3 className="text-foreground text-lg sm:text-xl font-bold mb-2 transition-colors group-hover/card:text-primary">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed overflow-hidden max-h-[2.8rem] group-hover/card:max-h-[11.2rem] mb-4 transition-[max-height] duration-300 ease-out">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 translate-y-3 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 ease-out">
          <span>View project</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}

const SWIPEABLE_MEDIA = '(max-width: 1024px)';

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const didSwipeRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isSwipeableRef = useRef(false);

  useEffect(() => {
    const mq =
      typeof window !== 'undefined' ? window.matchMedia(SWIPEABLE_MEDIA) : null;
    if (!mq) return;
    const update = () => {
      isSwipeableRef.current = mq.matches;
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    if (didSwipeRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (!isSwipeableRef.current || !scrollRef.current) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    didSwipeRef.current = false;
    startXRef.current = e.clientX;
    startScrollRef.current = scrollRef.current.scrollLeft;
    isDraggingRef.current = true;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 12) didSwipeRef.current = true;
    scrollRef.current.scrollLeft = startScrollRef.current - dx;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    isDraggingRef.current = false;
    startScrollRef.current = scrollRef.current?.scrollLeft ?? 0;
  }, []);

  return (
    <section
      id="work"
      className="group/section py-16 sm:py-20 lg:py-[7.5rem] relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4"
            >
              Featured work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Projects I&apos;ve <br className="hidden sm:block" /> worked on{' '}
              <span className="transition-colors group-hover/section:text-primary">
                .
              </span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            href="/work"
            className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            See all projects
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden gap-4 scrollbar-hide -mx-6 sm:-mx-8 lg:-mx-16 px-6 sm:px-8 lg:px-16 pb-8 touch-pan-x "
        style={{ scrollBehavior: 'auto' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
            isDraggingRef.current = false;
          }
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onLinkClick={handleLinkClick}
          />
        ))}
      </div>
    </section>
  );
}
