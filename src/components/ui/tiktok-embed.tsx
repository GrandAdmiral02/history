
"use client";

import { useEffect, useRef } from 'react';

interface TikTokEmbedProps {
  videoId: string;
  username: string;
  caption: string;
  videoUrl: string;
}

export function TikTokEmbed({ videoId, username, caption, videoUrl }: TikTokEmbedProps) {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTikTokScript = () => {
      // Remove existing script if any
      const existingScript = document.getElementById('tiktok-embed-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script
      const script = document.createElement('script');
      script.id = 'tiktok-embed-script';
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      
      script.onload = () => {
        // Trigger TikTok embed rendering
        if (window.tiktokEmbed) {
          window.tiktokEmbed.lib.render();
        }
      };
      
      document.head.appendChild(script);
    };

    // Load script when component mounts
    loadTikTokScript();

    // Cleanup function
    return () => {
      const script = document.getElementById('tiktok-embed-script');
      if (script) {
        script.remove();
      }
    };
  }, [videoId]);

  return (
    <div className="flex justify-center" ref={embedRef}>
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoId}
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title={username}
            href={`https://www.tiktok.com/${username}?refer=embed`}
          >
            {username}
          </a>{" "}
          {caption}
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            title="♬ original sound" 
            href={videoUrl}
          >
            ♬ original sound
          </a>
        </section>
      </blockquote>
    </div>
  );
}

// Extend window type for TypeScript
declare global {
  interface Window {
    tiktokEmbed?: any;
  }
}
