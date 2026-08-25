import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import avatarAmelia from "@/assets/tradeforge/avatar-amelia.jpg";
import avatarArron from "@/assets/tradeforge/avatar-arron.jpg";
import avatarCharlie from "@/assets/tradeforge/avatar-charlie.jpg";
import testimonial1Poster from "@/assets/tradeforge/testimonial-1.jpg";
import testimonial1 from "@/assets/tradeforge/testimonial-1.mp4";
import testimonial2Poster from "@/assets/tradeforge/testimonial-2.jpg";
import testimonial2 from "@/assets/tradeforge/testimonial-2.mp4";
import testimonial3Poster from "@/assets/tradeforge/testimonial-3.jpg";
import testimonial3 from "@/assets/tradeforge/testimonial-3.mp4";
import { SplitHeading } from "@/components/site/split-heading";

const VIDEOS = [
  {
    src: testimonial1,
    poster: testimonial1Poster,
    avatar: avatarCharlie,
    name: "Charlie Speaks",
    handle: "charlie.speaks",
  },
  {
    src: testimonial2,
    poster: testimonial2Poster,
    avatar: avatarAmelia,
    name: "Amelia Trades",
    handle: "amelia.trades",
  },
  {
    src: testimonial3,
    poster: testimonial3Poster,
    avatar: avatarArron,
    name: "Trading With Arron",
    handle: "Tradingwitharron",
  },
] as const;

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
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl shadow-soft">
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
          className="group absolute inset-0 flex flex-col justify-between text-left"
        >
          <span className="m-4 inline-flex size-10 items-center justify-center rounded-full bg-foreground/50 backdrop-blur transition-transform group-hover:scale-110">
            <span className="ml-0.5 inline-block size-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
          </span>
          <span className="flex items-center gap-3 bg-gradient-to-t from-foreground/80 to-transparent p-4 pt-10">
            <img
              src={video.avatar}
              alt=""
              className="size-9 rounded-full border border-white/40 object-cover"
              loading="lazy"
            />
            <span className="text-sm font-semibold text-white">
              {video.name}
              <span className="block text-xs font-normal text-white/80">
                @{video.handle}
              </span>
            </span>
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
    <section className="bg-tint-2 py-20 sm:py-28">
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
          <div
            key={video.handle}
            data-card
            className="w-[220px] shrink-0 snap-start sm:w-[240px]"
          >
            <VideoCard
              video={video}
              playing={playingIndex === i}
              onPlay={() => setPlayingIndex(i)}
            />
          </div>
        ))}
        <div data-card className="w-[220px] shrink-0 snap-start sm:w-[240px]">
          <div className="card-tint-lavender flex aspect-[9/16] w-full flex-col items-start justify-between rounded-2xl border border-border/50 p-5 shadow-soft">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary">
              <Users className="size-5 text-primary-foreground" />
            </span>
            <div>
              <p className="text-3xl font-bold tracking-tight text-foreground">750+</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                traders improving with TradeForge every day
              </p>
              <Link
                to="/pricing"
                className="mt-4 inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-button transition-colors hover:bg-primary-hover"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
