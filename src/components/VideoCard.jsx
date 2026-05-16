export default function VideoCard({ video }) {
  return (
    <div className="card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <div className="profile">
          <img src={video.profilePic} alt="Channel" />
        </div>
        <div className="text">
          <h3>{video.title}</h3>
          <p>{video.info}</p>
        </div>
      </div>
    </div>
  );
}
