"use client";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
}

export function YouTubePlayer({
  videoId,
  title = "YouTube video player",
  className = "",
  autoplay = false
}: YouTubePlayerProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?${autoplay ? 'autoplay=1&' : ''}rel=0&modestbranding=1`;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

interface YouTubeGridProps {
  videos: Array<{
    id: string;
    title: string;
    description?: string;
  }>;
  className?: string;
}

export function YouTubeGrid({ videos, className = "" }: YouTubeGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {videos.map((video) => (
        <div key={video.id} className="space-y-3">
          <YouTubePlayer
            videoId={video.id}
            title={video.title}
          />
          <div>
            <h3 className="font-medium text-lg">{video.title}</h3>
            {video.description && (
              <p className="text-sm text-muted-foreground mt-1">
                {video.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
