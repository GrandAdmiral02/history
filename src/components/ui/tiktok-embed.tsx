
"use client";

import { useEffect } from 'react';

interface TikTokEmbedProps {
  videoId: string;
  username: string;
  caption: string;
  videoUrl: string;
}

export function TikTokEmbed({ videoId, username, caption, videoUrl }: TikTokEmbedProps) {
  useEffect(() => {
    // Load TikTok embed script if not already loaded
    if (!window.tiktokEmbedScript) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = () => {
        window.tiktokEmbedScript = true;
        // Reload TikTok embeds after script loads
        if (window.tiktokEmbed) {
          window.tiktokEmbed.lib.render();
        }
      };
      document.head.appendChild(script);
    } else {
      // If script already loaded, just render
      setTimeout(() => {
        if (window.tiktokEmbed) {
          window.tiktokEmbed.lib.render();
        }
      }, 100);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoId}
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            title={username}
            href={`https://www.tiktok.com/${username}?refer=embed`}
          >
            {username}
          </a>{" "}
          {caption}
        </section>
      </blockquote>
    </div>
  );
}

// Extend window type for TypeScript
declare global {
  interface Window {
    tiktokEmbedScript?: boolean;
    tiktokEmbed?: any;
  }
}
