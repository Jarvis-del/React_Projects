import React, { useState } from 'react';
import { TRENDING, SUGGESTIONS } from '../data';

export default function RightPanel({ showToast }) {
  const [followed, setFollowed] = useState({});
  const [search, setSearch] = useState('');

  const toggleFollow = (id) => {
    setFollowed(prev => ({ ...prev, [id]: !prev[id] }));
    showToast(followed[id] ? 'Unfollowed' : 'Following!');
  };

  return (
    <aside className="right-panel">
      <div className="search-bar">
        <i className="bi bi-search"></i>
        <input
          placeholder="Search Threadly"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="suggestion-card">
        <h6>Who to follow</h6>
        {SUGGESTIONS.map(user => (
          <div className="suggest-user" key={user.id}>
            <img src={user.avatar} alt={user.name} className="avatar" width={38} height={38} />
            <div className="suggest-user-info">
              <div className="suggest-user-name">{user.name}</div>
              <div className="suggest-user-handle">@{user.handle}</div>
            </div>
            <button
              className={`follow-btn ${followed[user.id] ? 'following' : ''}`}
              onClick={() => toggleFollow(user.id)}
            >
              {followed[user.id] ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>

      <div className="suggestion-card">
        <h6>Trending</h6>
        {TRENDING.map(t => (
          <div className="trend-item" key={t.tag}>
            <div className="trend-category">{t.category}</div>
            <div className="trend-tag">{t.tag}</div>
            <div className="trend-count">{t.count}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}
