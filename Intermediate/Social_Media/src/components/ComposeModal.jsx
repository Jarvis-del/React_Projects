import React, { useState } from 'react';
import { CURRENT_USER } from '../data';

export default function ComposeModal({ onClose, onPost }) {
  const [text, setText] = useState('');
  const MAX = 280;

  const handlePost = () => {
    if (!text.trim()) return;
    onPost(text.trim());
    onClose();
  };

  const remaining = MAX - text.length;
  const pct = (text.length / MAX) * 100;
  const color = remaining < 20 ? '#e0245e' : remaining < 60 ? '#f5a623' : 'var(--text-primary)';

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <button
            style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer', color: 'var(--text-secondary)', padding: '4px 8px', borderRadius: 8 }}
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <span style={{ fontFamily: 'DM Serif Display', fontSize: '1rem' }}>New Post</span>
          <button
            className="btn-primary-custom"
            disabled={!text.trim()}
            onClick={handlePost}
          >
            Post
          </button>
        </div>

        <div className="d-flex gap-3">
          <img src={CURRENT_USER.avatar} alt="You" className="avatar" width={40} height={40} />
          <div className="flex-grow-1">
            <textarea
              autoFocus
              style={{
                width: '100%', border: 'none', outline: 'none',
                background: 'transparent', fontFamily: 'DM Sans', fontSize: '1rem',
                lineHeight: 1.6, resize: 'none', minHeight: 120, color: 'var(--text-primary)'
              }}
              placeholder="What's on your mind?"
              value={text}
              onChange={e => e.target.value.length <= MAX && setText(e.target.value)}
            />
            <div className="d-flex align-items-center justify-content-between mt-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="d-flex gap-2">
                {['bi-image', 'bi-emoji-smile', 'bi-geo-alt'].map(icon => (
                  <button
                    key={icon}
                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1.1rem', cursor: 'pointer', padding: '4px 6px', borderRadius: 8 }}
                  >
                    <i className={`bi ${icon}`}></i>
                  </button>
                ))}
              </div>
              <div className="d-flex align-items-center gap-3">
                <div style={{ position: 'relative', width: 28, height: 28 }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="14" cy="14" r="11" fill="none" stroke="var(--border)" strokeWidth="2.5" />
                    <circle cx="14" cy="14" r="11" fill="none" stroke={color} strokeWidth="2.5"
                      strokeDasharray={`${2 * Math.PI * 11}`}
                      strokeDashoffset={`${2 * Math.PI * 11 * (1 - pct / 100)}`}
                      style={{ transition: 'stroke-dashoffset 0.2s, stroke 0.2s' }}
                    />
                  </svg>
                  {remaining <= 60 && (
                    <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 700, color }}>
                      {remaining}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
