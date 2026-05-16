import VideoCard from './VideoCard';

export default function VideoGrid({ videos }) {
  if (!videos || videos.length === 0) {
    return <div className="videos">No videos match your search or selected tag.</div>;
  }

  return (
    <div className="videos">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
