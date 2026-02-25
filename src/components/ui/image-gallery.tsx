"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ImageGalleryProps {
  images: readonly string[] | string[];
  projectName: string;
}

export function ImageGallery({ images, projectName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (images.length === 0) return null;

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Main Image Display */}
      <div className="relative aspect-video rounded-2xl overflow-y-auto overflow-x-hidden bg-secondary border border-border mb-8 custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="relative w-full min-h-full flex items-start justify-center"
          >
            <Image
              src={images[selectedIndex]}
              alt={`${projectName} - Main view ${selectedIndex + 1}`}
              width={1920}
              height={1080}
              sizes="(max-width: 900px) 100vw, 900px"
              className="w-full h-auto object-contain rounded-lg"
              priority={selectedIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full text-sm text-foreground">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setSelectedIndex(index);
              setIsLightboxOpen(true);
            }}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              selectedIndex === index
                ? "border-primary scale-105"
                : "border-border hover:border-primary/50"
            }`}
          >
            <Image
              src={image}
              alt={`${projectName} - Image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
            />
            {selectedIndex === index && (
              <div className="absolute inset-0 bg-primary/20" />
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-foreground hover:bg-secondary transition-all z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.9 }}
                  className="relative w-full h-full max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={images[selectedIndex]}
                    alt={`${projectName} - Full view ${selectedIndex + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain rounded-lg"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
