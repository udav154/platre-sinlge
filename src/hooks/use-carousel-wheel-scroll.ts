"use client";

import * as React from "react";

const WHEEL_COOLDOWN_MS = 400;

type EmblaApi = {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
};

export function useCarouselWheelScroll<T extends HTMLElement>({
  containerRef,
  api,
  enabled = true,
}: {
  containerRef: React.RefObject<T | null>;
  api: EmblaApi | undefined;
  enabled?: boolean;
}) {
  const lastWheelScrollRef = React.useRef(0);

  React.useEffect(() => {
    if (!enabled || !api) return;

    const handler = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container || !container.contains(e.target as Node)) return;

      const { deltaX, deltaY } = e;
      if (Math.abs(deltaX) <= Math.abs(deltaY)) return;

      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      if (now - lastWheelScrollRef.current < WHEEL_COOLDOWN_MS) return;

      const canPrev = api.canScrollPrev();
      const canNext = api.canScrollNext();

      if (deltaX > 0 && canNext) {
        lastWheelScrollRef.current = now;
        api.scrollNext();
      } else if (deltaX < 0 && canPrev) {
        lastWheelScrollRef.current = now;
        api.scrollPrev();
      }
    };

    document.addEventListener("wheel", handler, { passive: false, capture: true });
    return () =>
      document.removeEventListener("wheel", handler, { capture: true });
  }, [enabled, api, containerRef]);
}
