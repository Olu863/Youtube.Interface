import VideoCard from './VideoCard';

export default function VideoGrid({ videos }) {
  const videosToShow = videos?.slice(0, 6) ?? [];

  if (!videosToShow.length) {
    return <div className="videos">No videos match your search or selected tag.</div>;
  }

  return (
    <div className="videos">
      {videosToShow.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
