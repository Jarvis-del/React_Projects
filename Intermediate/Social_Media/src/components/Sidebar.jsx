import React from 'react';
import { CURRENT_USER } from '../data';

export default function Sidebar({ activePage, setActivePage, onNewPost }) {
  const navItems = [
    { icon: 'bi-house-door-fill', label: 'Home', page: 'home' },
    { icon: 'bi-search', label: 'Explore', page: 'explore' },
    { icon: 'bi-bell', label: 'Notifications', page: 'notifications', badge: 4 },
    { icon: 'bi-bookmark', label: 'Bookmarks', page: 'bookmarks' },
    { icon: 'bi-person', label: 'Profile', page: 'profile' },
  ];

  return (
    <nav className="sidebar">
      <span className="sidebar-logo">Threadly</span>

      {navItems.map(item => (
        <button
          key={item.page}
          className={`nav-item ${activePage === item.page ? 'active' : ''}`}
          onClick={() => setActivePage(item.page)}
        >
          <i className={`bi ${item.icon}`}></i>
          {item.label}
          {item.badge && <span className="badge-count">{item.badge}</span>}
        </button>
      ))}

      <button className="btn-primary-custom mt-3 w-100" onClick={onNewPost}>
        Post
      </button>

      <div className="sidebar-profile mt-auto" onClick={() => setActivePage('profile')}>
        <img src={CURRENT_USER.avatar} alt="You" className="avatar" width={36} height={36} />
        <div className="sidebar-profile-info">
          <div className="sidebar-profile-name">{CURRENT_USER.name}</div>
          <div className="sidebar-profile-handle">@{CURRENT_USER.handle}</div>
        </div>
        <i className="bi bi-three-dots" style={{ color: 'var(--text-secondary)' }}></i>
      </div>
    </nav>
  );
}
