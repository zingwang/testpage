"use client";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  speed = 30,
  direction = "left",
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex whitespace-nowrap ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
