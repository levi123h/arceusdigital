"use client";

import { MotionDiv, fadeUp } from "@/components/ui/Motion";

export function VideoTile({
  title,
  src,
  index,
  earlyLoopSeconds = 4,
}: {
  title: string;
  src?: string;
  index: number;
  earlyLoopSeconds?: number;
}) {
  return (
    <MotionDiv
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.05 + index * 0.03 }}
      className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.02] shadow-[var(--shadow-soft)]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {src ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            muted
            playsInline
            autoPlay
            preload="metadata"
            onTimeUpdate={(e) => {
              const video = e.currentTarget;
              const duration = video.duration;
              if (!Number.isFinite(duration) || duration <= earlyLoopSeconds) return;

              if (video.currentTime >= duration - earlyLoopSeconds) {
                video.currentTime = 0;
                void video.play?.();
              }
            }}
          />
        ) : null}
      </div>

      <div className="p-5">
        <p className="text-sm font-semibold tracking-tight text-white/85">
          {title}
        </p>
      </div>
    </MotionDiv>
  );
}

