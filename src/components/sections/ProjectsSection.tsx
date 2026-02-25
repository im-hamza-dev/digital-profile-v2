"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { useRef, useEffect, useCallback } from "react";

const CARD_WIDTH = 380;
const CARD_GAP = 16;
const SCROLL_SPEED = 0.5;

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
      className="group/card block relative overflow-hidden rounded-2xl bg-secondary border border-border transition-all duration-300 ease-out h-full flex-shrink-0 w-[380px] hover:w-[494px] hover:z-10 hover:shadow-xl"
    >
      <div
        className="aspect-[4/3] relative overflow-hidden bg-secondary select-none"
        onDragStart={(e) => e.preventDefault()}
      >
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          draggable={false}
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
      </div>
      <div className="p-5 sm:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-xl border-t border-white/20 dark:border-white/5 shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.3)]">
        <span className="inline-block px-3 py-1 bg-white/40 dark:bg-white/10 backdrop-blur-sm text-primary text-xs font-semibold rounded-full border border-white/30 dark:border-white/10 mb-3">
          {project.industry}
        </span>
        <h3 className="text-foreground text-lg sm:text-xl font-bold mb-2 transition-colors group-hover/card:text-primary">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 group-hover/card:line-clamp-none mb-4">
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

const SWIPEABLE_MEDIA = "(max-width: 1024px)";

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const didSwipeRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const isDraggingRef = useRef(false);
  const rafRef = useRef<number>(0);
  const isSwipeableRef = useRef(false);

  useEffect(() => {
    const mq = typeof window !== "undefined" ? window.matchMedia(SWIPEABLE_MEDIA) : null;
    if (!mq) return;
    const update = () => {
      isSwipeableRef.current = mq.matches;
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    if (didSwipeRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const autoScroll = () => {
      if (!el || isDraggingRef.current) {
        rafRef.current = requestAnimationFrame(autoScroll);
        return;
      }
      const half = el.scrollWidth / 2;
      el.scrollLeft += SCROLL_SPEED;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
      rafRef.current = requestAnimationFrame(autoScroll);
    };

    rafRef.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(rafRef.current);
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
    const half = scrollRef.current.scrollWidth / 2;
    let next = startScrollRef.current - dx;
    while (next < 0) next += half;
    while (next >= half) next -= half;
    scrollRef.current.scrollLeft = next;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    isDraggingRef.current = false;
    startScrollRef.current = scrollRef.current?.scrollLeft ?? 0;
  }, []);

  const duplicated = [...projects, ...projects];

  return (
    <section id="work" className="group/section py-16 sm:py-20 lg:py-[7.5rem] relative">
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
              Projects I&apos;ve <br className="hidden sm:block" /> worked on{" "}
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
        className="flex overflow-x-auto overflow-y-hidden gap-4 scrollbar-hide -mx-6 sm:-mx-8 lg:-mx-16 px-6 sm:px-8 lg:px-16 pb-8 touch-pan-x"
        style={{ scrollBehavior: "auto" }}
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
        {duplicated.map((project, i) => (
          <ProjectCard
            key={`${project.id}-${i}`}
            project={project}
            onLinkClick={handleLinkClick}
          />
        ))}
      </div>
    </section>
  );
}
