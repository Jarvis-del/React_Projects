import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { CURRENT_USER, USERS, INITIAL_POSTS } from '../data';
import { STORIES } from '../data';

// ────────────────────────────────────────────────────────────
// Home Feed
// ────────────────────────────────────────────────────────────
export function HomePage({ posts, setPosts, showToast, onNewPost }) {
  const [activeTab, setActiveTab] = useState('for-you');
  const [seenStories, setSeenStories] = useState({});
  const [composeText, setComposeText] = useState('');

  const handleLike = (id) => {
    setPosts(prev => prev.map(p => p.id === id
      ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
      : p
    ));
  };
  const handleBookmark = (id) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, bookmarked: !p.bookmarked } : p));
  };
  const handleRepost = (id) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, reposts: p.reposts + 1 } : p));
  };

  const handleQuickPost = () => {
    if (!composeText.trim()) return;
    const newPost = {
      id: Date.now(),
      user: CURRENT_USER,
      body: composeText.trim(),
      image: null,
      likes: 0, comments: 0, reposts: 0,
      liked: false, bookmarked: false,
      time: 'just now',
    };
    setPosts(prev => [newPost, ...prev]);
    setComposeText('');
    showToast('Post published!');
  };

  const displayed = activeTab === 'following'
    ? posts.filter(p => p.user.id <= 2)
    : posts;

  return (
    <>
      {/* Feed header */}
      <div className="feed-header">
        <h5>Home</h5>
        <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1.1rem', cursor: 'pointer' }}>
          <i className="bi bi-sliders2"></i>
        </button>
      </div>

      {/* Tabs */}
      <div className="feed-tabs">
        {['for-you', 'following'].map(tab => (
          <button key={tab} className={`feed-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab === 'for-you' ? 'For You' : 'Following'}
          </button>
        ))}
      </div>

      {/* Stories */}
      <div className="stories-row">
        <div className="story-bubble" onClick={onNewPost}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--bg)', border: '2px dashed var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <i className="bi bi-plus-lg" style={{ fontSize: '1.3rem' }}></i>
          </div>
          <span className="story-label">Your story</span>
        </div>
        {STORIES.map(s => (
          <div key={s.id} className="story-bubble" onClick={() => setSeenStories(p => ({ ...p, [s.id]: true }))}>
            <div className={`story-ring ${seenStories[s.id] || s.seen ? 'seen' : ''}`}>
              <img src={s.user.avatar} alt={s.user.name} className="avatar" width={48} height={48} style={{ border: '2px solid white', borderRadius: '50%' }} />
            </div>
            <span className="story-label">{s.user.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>

      {/* Quick compose */}
      <div className="compose-box">
        <img src={CURRENT_USER.avatar} alt="You" className="avatar" width={40} height={40} />
        <div className="compose-input">
          <textarea
            placeholder="What's happening?"
            value={composeText}
            onChange={e => setComposeText(e.target.value)}
            rows={composeText.length > 60 ? 3 : 2}
          />
          <div className="compose-actions">
            <div className="compose-tools">
              {['bi-image', 'bi-emoji-smile', 'bi-geo-alt', 'bi-bar-chart'].map(icon => (
                <button className="compose-tool-btn" key={icon}><i className={`bi ${icon}`}></i></button>
              ))}
            </div>
            <button className="btn-primary-custom" disabled={!composeText.trim()} onClick={handleQuickPost} style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Posts */}
      {displayed.map(post => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onBookmark={handleBookmark}
          onRepost={handleRepost}
          showToast={showToast}
        />
      ))}
    </>
  );
}

// ────────────────────────────────────────────────────────────
// Explore
// ────────────────────────────────────────────────────────────
export function ExplorePage({ posts, setPosts, showToast }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Tech', 'Design', 'Photography', 'Startups', 'Life'];

  const filtered = posts.filter(p =>
    p.body.toLowerCase().includes(search.toLowerCase()) ||
    p.user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLike = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p));
  const handleBookmark = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, bookmarked: !p.bookmarked } : p));
  const handleRepost = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, reposts: p.reposts + 1 } : p));

  return (
    <>
      <div className="feed-header"><h5>Explore</h5></div>
      <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border)' }}>
        <div className="search-bar mb-0" style={{ margin: 0 }}>
          <i className="bi bi-search"></i>
          <input placeholder="Search posts, people..." value={search} onChange={e => setSearch(e.target.value)} />
          {search && <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={() => setSearch('')}><i className="bi bi-x"></i></button>}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, padding: '12px 20px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            style={{ whiteSpace: 'nowrap', padding: '6px 16px', borderRadius: 20, border: '1.5px solid', borderColor: activeCategory === cat ? 'var(--text-primary)' : 'var(--border)', background: activeCategory === cat ? 'var(--text-primary)' : 'transparent', color: activeCategory === cat ? 'white' : 'var(--text-secondary)', fontFamily: 'DM Sans', fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.15s' }}>
            {cat}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-secondary)' }}>
          <i className="bi bi-search" style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}></i>
          No results for "{search}"
        </div>
      ) : filtered.map(post => (
        <PostCard key={post.id} post={post} onLike={handleLike} onBookmark={handleBookmark} onRepost={handleRepost} showToast={showToast} />
      ))}
    </>
  );
}

// ────────────────────────────────────────────────────────────
// Notifications
// ────────────────────────────────────────────────────────────
export function NotificationsPage() {
  const notifications = [
    { id: 1, type: 'like', user: USERS[0], text: 'liked your post', time: '2m', icon: 'bi-heart-fill', iconColor: '#e0245e' },
    { id: 2, type: 'follow', user: USERS[1], text: 'started following you', time: '14m', icon: 'bi-person-check-fill', iconColor: '#1d9bf0' },
    { id: 3, type: 'comment', user: USERS[2], text: 'commented on your post', time: '1h', icon: 'bi-chat-fill', iconColor: '#17bf63' },
    { id: 4, type: 'repost', user: USERS[3], text: 'reposted your thread', time: '3h', icon: 'bi-repeat', iconColor: '#17bf63' },
    { id: 5, type: 'like', user: USERS[4], text: 'liked your reply', time: '5h', icon: 'bi-heart-fill', iconColor: '#e0245e' },
  ];

  return (
    <>
      <div className="feed-header"><h5>Notifications</h5></div>
      {notifications.map(n => (
        <div key={n.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 20px', borderBottom: '1px solid var(--border)', cursor: 'pointer', transition: 'background 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.01)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <div style={{ position: 'relative' }}>
            <img src={n.user.avatar} alt={n.user.name} className="avatar" width={44} height={44} />
            <div style={{ position: 'absolute', bottom: -2, right: -2, background: 'white', borderRadius: '50%', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 1.5px var(--border)' }}>
              <i className={`bi ${n.icon}`} style={{ fontSize: '0.65rem', color: n.iconColor }}></i>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{n.user.name}</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: 5 }}>{n.text}</span>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', flexShrink: 0 }}>{n.time}</span>
        </div>
      ))}
    </>
  );
}

// ────────────────────────────────────────────────────────────
// Bookmarks
// ────────────────────────────────────────────────────────────
export function BookmarksPage({ posts, setPosts, showToast }) {
  const bookmarked = posts.filter(p => p.bookmarked);
  const handleLike = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p));
  const handleBookmark = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, bookmarked: !p.bookmarked } : p));
  const handleRepost = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, reposts: p.reposts + 1 } : p));

  return (
    <>
      <div className="feed-header"><h5>Bookmarks</h5></div>
      {bookmarked.length === 0 ? (
        <div style={{ padding: 60, textAlign: 'center', color: 'var(--text-secondary)' }}>
          <i className="bi bi-bookmark" style={{ fontSize: '2.5rem', display: 'block', marginBottom: 16 }}></i>
          <h6 style={{ fontFamily: 'DM Serif Display', fontWeight: 400 }}>Save posts for later</h6>
          <p style={{ fontSize: '0.88rem', marginTop: 6 }}>Bookmark any post and find it here.</p>
        </div>
      ) : bookmarked.map(post => (
        <PostCard key={post.id} post={post} onLike={handleLike} onBookmark={handleBookmark} onRepost={handleRepost} showToast={showToast} />
      ))}
    </>
  );
}

// ────────────────────────────────────────────────────────────
// Profile
// ────────────────────────────────────────────────────────────
export function ProfilePage({ posts, setPosts, showToast }) {
  const [activeTab, setActiveTab] = useState('posts');
  const myPosts = posts.filter(p => p.user.id === 0);
  const likedPosts = posts.filter(p => p.liked);

  const handleLike = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p));
  const handleBookmark = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, bookmarked: !p.bookmarked } : p));
  const handleRepost = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, reposts: p.reposts + 1 } : p));

  const displayed = activeTab === 'posts' ? myPosts : activeTab === 'likes' ? likedPosts : [];

  return (
    <>
      {/* Cover */}
      <div style={{ height: 120, background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: -28, left: 20, padding: 3, background: 'white', borderRadius: '50%' }}>
          <img src={CURRENT_USER.avatar} alt="You" className="avatar" width={64} height={64} />
        </div>
        <button className="btn-primary-custom" style={{ position: 'absolute', right: 16, bottom: -44, background: 'transparent', color: 'var(--text-primary)', border: '1.5px solid var(--border)', padding: '7px 18px' }}
          onClick={() => showToast('Edit profile coming soon!')}>
          Edit profile
        </button>
      </div>

      <div style={{ padding: '40px 20px 16px' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{CURRENT_USER.name}</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>@{CURRENT_USER.handle}</div>
        <p style={{ fontSize: '0.9rem', marginTop: 10, lineHeight: 1.5 }}>Exploring ideas, building things. <span style={{ color: '#1d9bf0' }}>Joined Threadly</span></p>
        <div style={{ display: 'flex', gap: 20, marginTop: 12, fontSize: '0.88rem' }}>
          <span><strong>142</strong> <span style={{ color: 'var(--text-secondary)' }}>Following</span></span>
          <span><strong>1,204</strong> <span style={{ color: 'var(--text-secondary)' }}>Followers</span></span>
        </div>
      </div>

      <div className="feed-tabs">
        {['posts', 'replies', 'likes'].map(tab => (
          <button key={tab} className={`feed-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)} style={{ textTransform: 'capitalize' }}>
            {tab}
          </button>
        ))}
      </div>

      {displayed.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          {activeTab === 'posts' ? 'No posts yet — create your first one!' : `No ${activeTab} yet.`}
        </div>
      ) : displayed.map(post => (
        <PostCard key={post.id} post={post} onLike={handleLike} onBookmark={handleBookmark} onRepost={handleRepost} showToast={showToast} />
      ))}
    </>
  );
}
