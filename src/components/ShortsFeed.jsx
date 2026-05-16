export default function ShortsFeed({ videos }) {
  if (!videos || videos.length === 0) {
    return <div className="shorts-feed-empty" style={{ padding: '20px' }}>No shorts available.</div>;
  }

  return (
    <div className="shorts-grid">
      {videos.map((video) => (
        <article key={video.id} className="short-card">
          <div
            className="short-card-image"
            style={{ backgroundImage: `url(${video.thumbnail})` }}
          />
          <div className="short-card-content">
            <div className="short-profile">
              <img src={video.profilePic} alt="channel" />
            </div>
            <div className="short-text">
              <h3>{video.title}</h3>
              <p>{video.info}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
