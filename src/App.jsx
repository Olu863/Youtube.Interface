import { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Tags from './components/Tags';
import VideoGrid from './components/VideoGrid';
import ShortsFeed from './components/ShortsFeed';

const allVideos = [
  {
    id: 1,
    title: 'HELLO',
    thumbnail: '/1.jpg.jpg',
    profilePic: '/1.jpg.jpg',
    info: 'Sponsored',
    category: 'All',
    section: 'Home'
  },
  {
    id: 2,
    title: 'NICE TO MEET YOU',
    thumbnail: '/1.jpg.jpg',
    profilePic: '/1.jpg.jpg',
    info: '13M views • 2 weeks ago',
    category: 'Music',
    section: 'Shorts'
  },
  {
    id: 3,
    title: 'BYE',
    thumbnail: '/1.jpg.jpg',
    profilePic: '/1.jpg.jpg',
    info: '972K views • 7 days ago',
    category: 'Live',
    section: 'Subscriptions'
  },
  {
    id: 4,
    title: 'HELLO AGAIN',
    thumbnail: '/1.jpg.jpg',
    profilePic: '/1.jpg.jpg',
    info: 'Sponsored',
    category: 'Podcasts',
    section: 'You'
  },
  {
    id: 5,
    title: 'WELCOME BACK',
    thumbnail: '/1.jpg.jpg',
    profilePic: '/1.jpg.jpg',
    info: '2.5M views • 1 week ago',
    category: 'Study',
    section: 'Home'
  },
  {
    id: 6,
    title: 'CATCH YOU LATER',
    thumbnail: '/1.jpg.jpg',
    profilePic: '/1.jpg.jpg',
    info: '543K views • 3 days ago',
    category: 'Aviation',
    section: 'Shorts'
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [activeSection, setActiveSection] = useState('Home');

  const filteredVideos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allVideos.filter((video) => {
      const matchesSection =
        activeSection === 'Home' || video.section === activeSection;
      const matchesTag = activeTag === 'All' || video.category === activeTag;
      const matchesSearch =
        video.title.toLowerCase().includes(query) ||
        video.info.toLowerCase().includes(query);

      return matchesSection && matchesTag && (query.length === 0 || matchesSearch);
    });
  }, [activeTag, activeSection, searchQuery]);

  return (
    <>
      <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
      <div className="main">
        <Navbar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
        <Tags activeTag={activeTag} onTagChange={setActiveTag} />
        <div className="section-header">
          {activeSection} • {filteredVideos.length} videos
        </div>
        {activeSection === 'Shorts' ? (
          <ShortsFeed videos={filteredVideos} />
        ) : (
          <>
            <div className="search-summary">
              {searchQuery
                ? `Search results for "${searchQuery}" (${filteredVideos.length})`
                : `Showing ${filteredVideos.length} videos`}
            </div>
            <VideoGrid videos={filteredVideos} />
          </>
        )}
      </div>
    </>
  );
}
