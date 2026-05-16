export default function Navbar({ searchQuery, onSearchQueryChange }) {
  return (
    <div className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src="/youtube.jpg.png" className="logo" alt="YouTube Logo" />
      </div>

      {/* MIDDLE */}
      <div className="nav-middle">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
          />
          <img src="/search.jpg.png" alt="Search" />
        </div>
        <img src="/mic.jpg.png" alt="Voice search" />
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <div className="create">
          <img src="/plus.jpg.png" alt="Create" />
          <p>Create</p>
        </div>
        <img src="/bell.jpg.png" alt="Notifications" />
        <div className="profile-top">
          <img src="/1.jpg.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  );
}
