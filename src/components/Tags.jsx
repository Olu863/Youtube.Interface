export default function Tags({ activeTag, onTagChange }) {
  const tags = [
    'All',
    'Nollywood',
    'Music',
    'Live',
    'Podcasts',
    'Study',
    'Aviation',
    'Boxing',
    'Basketball',
    'True Crime',
    'Chinese'
  ];

  return (
    <div className="tags">
      {tags.map((tag) => (
        <span
          key={tag}
          className={activeTag === tag ? 'active' : ''}
          onClick={() => onTagChange(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
