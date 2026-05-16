export default function Sidebar({ activeSection, onSelectSection }) {
  const menuItems = [
    { icon: '/home.jpg.png', label: 'Home', alt: 'Home' },
    { icon: '/shorts.jpg.png', label: 'Shorts', alt: 'Shorts' },
    { icon: '/subscription.jpg.png', label: 'Subscriptions', alt: 'Subscriptions' },
    { icon: '/you.jpg.png', label: 'You', alt: 'You' }
  ];

  return (
    <div className="sidebar">
      <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>☰</h2>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`menu ${activeSection === item.label ? 'active' : ''}`}
          onClick={() => onSelectSection(item.label)}
        >
          <img src={item.icon} alt={item.alt} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
