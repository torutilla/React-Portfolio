import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProjectGalleryProps {
  screenshots: string[];
}

export default function ProjectGallery({ screenshots }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = screenshots.map((src) => ({
    src,
  }));

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {screenshots.map((src, i) => {
            const actualIndex = i;

            return (
              <button
                key={src}
                onClick={() => {
                  setIndex(actualIndex);
                  setOpen(true);
                }}
                className="group overflow-hidden rounded-xl"
              >
                <img
                  src={src}
                  alt={`Project screenshot ${actualIndex + 1}`}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen viewer */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        on={{
          view: ({ index }) => setIndex(index),
        }}
      />
    </>
  );
}
