import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ComposeModal from './components/ComposeModal';
import RightPanel from './components/RightPanel';
import { HomePage, ExplorePage, NotificationsPage, BookmarksPage, ProfilePage } from './pages';
import { INITIAL_POSTS, CURRENT_USER } from './data';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [showCompose, setShowCompose] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleNewPost = (text) => {
    const newPost = {
      id: Date.now(),
      user: CURRENT_USER,
      body: text,
      image: null,
      likes: 0, comments: 0, reposts: 0,
      liked: false, bookmarked: false,
      time: 'just now',
    };
    setPosts(prev => [newPost, ...prev]);
    showToast('Post published! 🎉');
  };

  const pageProps = { posts, setPosts, showToast, onNewPost: () => setShowCompose(true) };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage {...pageProps} />;
      case 'explore': return <ExplorePage {...pageProps} />;
      case 'notifications': return <NotificationsPage />;
      case 'bookmarks': return <BookmarksPage {...pageProps} />;
      case 'profile': return <ProfilePage {...pageProps} />;
      default: return <HomePage {...pageProps} />;
    }
  };

  return (
    <>
      <Sidebar activePage={activePage} setActivePage={setActivePage} onNewPost={() => setShowCompose(true)} />

      <div className="main-layout">
        <div className="feed-container">
          {renderPage()}
        </div>
        <RightPanel showToast={showToast} />
      </div>

      {/* Mobile bottom nav */}
      <nav className="bottom-nav">
        {[
          { icon: 'bi-house-door-fill', page: 'home' },
          { icon: 'bi-search', page: 'explore' },
          { icon: 'bi-bell', page: 'notifications' },
          { icon: 'bi-bookmark', page: 'bookmarks' },
          { icon: 'bi-person', page: 'profile' },
        ].map(item => (
          <button
            key={item.page}
            className={`bottom-nav-btn ${activePage === item.page ? 'active' : ''}`}
            onClick={() => setActivePage(item.page)}
          >
            <i className={`bi ${item.icon}`}></i>
          </button>
        ))}
      </nav>

      {showCompose && (
        <ComposeModal onClose={() => setShowCompose(false)} onPost={handleNewPost} />
      )}

      {toast && <div className="toast-notif">{toast}</div>}
    </>
  );
}
