"use client";
import { useCallback, useEffect, useRef } from "react";

import { useIsVisible } from "@/app/hooks/useIsVisible";

type VideoComponentProps = {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
};
export const VideoComponent = ({
  src,
  poster,
  alt,
  className,
}: VideoComponentProps) => {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideoOnMouseMove = useCallback(async () => {
    if (videoRef.current) {
      await videoRef.current.play();
    }
  }, []);

  const stopVideoOnMove = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

  return (
    <span ref={targetRef as React.RefObject<HTMLSpanElement>}>
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={false}
        preload="none"
        playsInline
        poster={poster}
        aria-label={alt}
        className={className}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
    </span>
  );
};
