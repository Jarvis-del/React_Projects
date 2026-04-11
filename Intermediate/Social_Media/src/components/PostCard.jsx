import React, { useState } from 'react';

export default function PostCard({ post, onLike, onBookmark, onRepost, showToast }) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleComment = () => {
    if (!commentText.trim()) return;
    setComments(prev => [
      ...prev,
      { id: Date.now(), text: commentText, time: 'just now' }
    ]);
    setCommentText('');
    showToast('Comment posted!');
  };

  return (
    <article className="post-card">
      <div className="post-header">
        <img src={post.user.avatar} alt={post.user.name} className="avatar" width={40} height={40} />
        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-1">
            <span className="post-author">{post.user.name}</span>
            <span className="post-handle">@{post.user.handle}</span>
          </div>
        </div>
        <span className="post-time">{post.time}</span>
      </div>

      <div className="post-body">{post.body}</div>

      {post.image && (
        <img src={post.image} alt="Post" className="post-image" />
      )}

      <div className="post-actions">
        <button
          className={`action-btn ${post.liked ? 'liked' : ''}`}
          onClick={() => onLike(post.id)}
        >
          <i className={`bi ${post.liked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          {post.likes > 0 && <span>{post.likes >= 1000 ? (post.likes / 1000).toFixed(1) + 'k' : post.likes}</span>}
        </button>

        <button
          className="action-btn"
          onClick={() => setShowComments(s => !s)}
        >
          <i className="bi bi-chat"></i>
          {(post.comments + comments.length) > 0 && <span>{post.comments + comments.length}</span>}
        </button>

        <button
          className="action-btn"
          onClick={() => { onRepost(post.id); showToast('Reposted!'); }}
        >
          <i className="bi bi-repeat"></i>
          {post.reposts > 0 && <span>{post.reposts}</span>}
        </button>

        <button
          className={`action-btn ${post.bookmarked ? 'liked' : ''}`}
          style={post.bookmarked ? { color: '#1d9bf0' } : {}}
          onClick={() => { onBookmark(post.id); showToast(post.bookmarked ? 'Removed bookmark' : 'Bookmarked!'); }}
        >
          <i className={`bi ${post.bookmarked ? 'bi-bookmark-fill' : 'bi-bookmark'}`}></i>
        </button>

        <button
          className="action-btn ms-auto"
          onClick={() => { navigator.clipboard?.writeText(post.body); showToast('Copied to clipboard!'); }}
        >
          <i className="bi bi-upload"></i>
        </button>
      </div>

      {showComments && (
        <div className="px-3 pb-2" style={{ paddingLeft: '64px' }}>
          <div className="d-flex gap-2 mt-3" style={{ paddingLeft: '44px' }}>
            <input
              className="form-control form-control-sm"
              style={{ borderRadius: 20, fontSize: '0.85rem', border: '1px solid var(--border)', background: 'var(--bg)' }}
              placeholder="Write a comment..."
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleComment()}
            />
            <button
              className="btn-primary-custom"
              style={{ padding: '5px 14px', fontSize: '0.8rem' }}
              onClick={handleComment}
            >
              Send
            </button>
          </div>
          {comments.map(c => (
            <div key={c.id} className="d-flex gap-2 align-items-start mt-2" style={{ paddingLeft: '44px' }}>
              <div style={{ fontSize: '0.85rem', background: 'var(--bg)', borderRadius: 10, padding: '6px 12px', flex: 1 }}>
                <span style={{ fontWeight: 600, marginRight: 6 }}>You</span>{c.text}
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
