import React from 'react';
import './ArtistStats.css';
import { useFadeIn } from './useFadeIn';

const ArtistStats = () => {
  const [ref, isVisible] = useFadeIn();

  const stats = [
    {
      platform: 'INSTAGRAM',
      icon: 'fab fa-instagram',
      followers: '202K',
      audienceType: 'AESTHETIC, ROMANTIC-MUSIC LOVERS, YOUTH-HEAVY',
      engagement: 'STRONG REEL PERFORMANCE & HIGH SHAREABILITY',
      color: '#E4405F'
    },
    {
      platform: 'SPOTIFY',
      icon: 'fab fa-spotify',
      followers: '13.9 MILLION',
      audienceType: 'INDIA + GLOBAL INDIE LISTENERS',
      engagement: 'EXTREMELY STRONG STREAMING PRESENCE → HIGH MUSIC RECALL',
      insight: 'MASSIVE LISTENER BASE EVEN BEYOND SOCIAL FOLLOWERS',
      color: '#1DB954'
    },
    {
      platform: 'YOUTUBE',
      icon: 'fab fa-youtube',
      followers: '1,60,000',
      totalViews: '983 MILLION+',
      engagement: 'SONGS AND LIVE SESSIONS PERFORM CONSISTENTLY WELL',
      insight: 'VISUAL + AUDIO FAN ENGAGEMENT → STRONG PROMOTION IMPACT',
      color: '#FF0000'
    }
  ];

  return (
    <section id="stats" ref={ref} className={`artist-stats ${isVisible ? 'is-visible' : ''}`}>
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">MADHUBANTI</h2>
          <p className="stats-subtitle">Digital Presence & Impact</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card-header">
                <i className={stat.icon} style={{ color: stat.color }}></i>
                <h3 className="stat-platform">{stat.platform}</h3>
              </div>
              <div className="stat-content">
                <div className="stat-main-metric">
                  {stat.platform === 'YOUTUBE' ? (
                    <>
                      <span className="stat-label">SUBSCRIBERS:</span>
                      <span className="stat-value">{stat.followers}</span>
                      <span className="stat-label" style={{ marginTop: '15px' }}>TOTAL VIEWS:</span>
                      <span className="stat-value">{stat.totalViews}</span>
                    </>
                  ) : (
                    <>
                      <span className="stat-label">
                        {stat.platform === 'SPOTIFY' ? 'MONTHLY LISTENERS:' : 'FOLLOWERS:'}
                      </span>
                      <span className="stat-value">{stat.followers}</span>
                    </>
                  )}
                </div>
                <div className="stat-details">
                  <div className="stat-detail-item">
                    <span className="detail-label">AUDIENCE {stat.platform === 'SPOTIFY' ? 'SPREAD' : 'TYPE'}:</span>
                    <span className="detail-value">{stat.audienceType}</span>
                  </div>
                  <div className="stat-detail-item">
                    <span className="detail-label">
                      {stat.platform === 'SPOTIFY' ? 'STRENGTH' : stat.platform === 'YOUTUBE' ? 'PERFORMANCE' : 'ENGAGEMENT'}:
                    </span>
                    <span className="detail-value">{stat.engagement}</span>
                  </div>
                  {stat.insight && (
                    <div className="stat-detail-item insight">
                      <span className="detail-label">INSIGHT:</span>
                      <span className="detail-value">{stat.insight}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistStats;

