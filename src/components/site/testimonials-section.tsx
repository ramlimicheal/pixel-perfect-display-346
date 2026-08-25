import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import testimonial1Poster from "@/assets/tradeforge/testimonial-1-poster.jpg";
import testimonial1 from "@/assets/tradeforge/testimonial-1.mp4";
import testimonial2Poster from "@/assets/tradeforge/testimonial-2-poster.jpg";
import testimonial2 from "@/assets/tradeforge/testimonial-2.mp4";
import testimonial3Poster from "@/assets/tradeforge/testimonial-3-poster.jpg";
import testimonial3 from "@/assets/tradeforge/testimonial-3.mp4";
import testimonialA1 from "@/assets/tradeforge/testimonial-a1.png";
import testimonialA2 from "@/assets/tradeforge/testimonial-a2.png";
import testimonialA3 from "@/assets/tradeforge/testimonial-a3.png";
import testimonialA4 from "@/assets/tradeforge/testimonial-a4.png";
import testimonialA5 from "@/assets/tradeforge/testimonial-a5.png";
import testimonialA6 from "@/assets/tradeforge/testimonial-a6.png";
import testimonialA7 from "@/assets/tradeforge/testimonial-a7.png";
import { SplitHeading } from "@/components/site/split-heading";

const VIDEOS = [
  {
    src: testimonial1,
    poster: testimonial1Poster,
    name: "Charlie Speaks",
    handle: "charlie.speaks",
  },
  {
    src: testimonial2,
    poster: testimonial2Poster,
    name: "Amelia Trades",
    handle: "amelia.trades",
  },
  {
    src: testimonial3,
    poster: testimonial3Poster,
    name: "Trading With Arron",
    handle: "Tradingwitharron",
  },
] as const;

const PHOTO_CARDS = [testimonialA1, testimonialA2, testimonialA3, testimonialA4, testimonialA5, testimonialA6, testimonialA7];

function VideoCard({
  video,
  playing,
  onPlay,
}: {
  video: (typeof VIDEOS)[number];
  playing: boolean;
  onPlay: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!playing && ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  }, [playing]);

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-foreground/5">
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        playsInline
        preload="metadata"
        controls={playing}
        className="absolute inset-0 size-full object-cover"
      />
      {playing ? null : (
        <button
          type="button"
          onClick={() => {
            void ref.current?.play();
            onPlay();
          }}
          aria-label={`Play testimonial from ${video.name}`}
          className="group absolute inset-0 flex flex-col justify-between p-4 text-left"
        >
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-foreground/50 backdrop-blur transition-transform group-hover:scale-110">
            <span className="ml-0.5 inline-block size-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
          </span>
          <span className="rounded-b-xl bg-gradient-to-t from-foreground/70 to-transparent p-3 pt-8 text-sm font-medium text-white">
            {video.name}
            <span className="block text-xs font-normal text-white/80">@{video.handle}</span>
          </span>
        </button>
      )}
    </div>
  );
}

export function TestimonialsSection() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : 280;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SplitHeading label="Our happy customers">
            Loved by profitable traders worldwide.
          </SplitHeading>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll testimonials left"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:bg-accent"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll testimonials right"
              className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-button transition-colors hover:bg-primary-hover"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={stripRef}
        className="scroll-strip mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {VIDEOS.map((video, i) => (
          <div key={video.handle} data-card className="w-[220px] shrink-0 snap-start sm:w-[240px]">
            <VideoCard
              video={video}
              playing={playingIndex === i}
              onPlay={() => setPlayingIndex(i)}
            />
          </div>
        ))}
        {PHOTO_CARDS.map((img, i) => (
          <div key={img} data-card className="w-[220px] shrink-0 snap-start sm:w-[240px]">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl shadow-soft">
              <img
                src={img}
                alt={`Trader testimonial ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <span className="absolute left-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-foreground/40 backdrop-blur">
                <Quote className="size-4 fill-white text-white" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 px-4 text-center sm:px-6">
        <Link
          to="/pricing"
          className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground shadow-button transition-colors hover:bg-primary-hover"
        >
          Join Now
        </Link>
      </div>
    </section>
  );
}
