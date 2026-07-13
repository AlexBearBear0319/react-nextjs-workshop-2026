/**
 * Responsive YouTube embed for workshop reference videos.
 * Uses youtube-nocookie for slightly better privacy defaults.
 */

type VideoEmbedProps = {
  videoId: string;
  title: string;
  /** Optional start time in seconds (e.g. skip an intro). */
  startSeconds?: number;
};

export function VideoEmbed({ videoId, title, startSeconds }: VideoEmbedProps) {
  const params = new URLSearchParams();
  if (typeof startSeconds === "number" && startSeconds > 0) {
    params.set("start", String(startSeconds));
  }
  const query = params.toString();
  const src = `https://www.youtube-nocookie.com/embed/${videoId}${query ? `?${query}` : ""}`;

  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950">
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
