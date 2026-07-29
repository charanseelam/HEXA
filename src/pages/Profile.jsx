import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile({ user, onLogout }) {
  const [profilePhoto, setProfilePhoto] = useState('');

  useEffect(() => {
    const savedPhoto = localStorage.getItem('hexa-profile-photo');
    if (savedPhoto) {
      setProfilePhoto(savedPhoto);
    }
  }, []);

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      setProfilePhoto(typeof imageData === 'string' ? imageData : '');
      localStorage.setItem('hexa-profile-photo', typeof imageData === 'string' ? imageData : '');
    };
    reader.readAsDataURL(file);
  };

  const accountInfo = [
    { label: 'Username', value: user?.username || 'Trader' },
    { label: 'Email', value: user?.email || 'user@example.com' },
    { label: 'Account Type', value: 'Premium' },
    { label: 'Leverage', value: '1:500' },
    { label: 'Verification', value: 'Verified' },
    { label: 'Status', value: 'Active' }
  ];

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem 3rem', background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.5rem', boxShadow: '0 20px 45px rgba(2, 6, 23, 0.35)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ width: '82px', height: '82px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(0, 210, 255, 0.35)', background: 'rgba(15, 23, 42, 0.8)', display: 'grid', placeItems: 'center' }}>
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Profile preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ color: '#fff', fontSize: '1.8rem', fontWeight: '800' }}>{(user?.username || 'T').charAt(0).toUpperCase()}</span>
                )}
              </div>
              <div>
                <div style={{ color: '#00d2ff', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Account Profile</div>
                <h2 style={{ color: '#fff', margin: '0 0 0.35rem', fontSize: '1.8rem' }}>Welcome, {user?.username || 'Trader'}</h2>
                <p style={{ color: '#94a3b8', margin: 0 }}>Manage your account details and trading preferences.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
              <Link to="/dashboard" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(0,210,255,0.12)', color: '#7dd3fc', textDecoration: 'none', fontWeight: '700' }}>Go to Dashboard</Link>
              <Link to="/settings" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(74,222,128,0.12)', color: '#4ade80', textDecoration: 'none', fontWeight: '700' }}>Settings</Link>
              <Link to="/wallet" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(245,158,11,0.12)', color: '#fbbf24', textDecoration: 'none', fontWeight: '700' }}>Wallet</Link>
              <Link to="/history" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(192,132,252,0.12)', color: '#c084fc', textDecoration: 'none', fontWeight: '700' }}>History</Link>
              <Link to="/support" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(248,113,113,0.12)', color: '#f87171', textDecoration: 'none', fontWeight: '700' }}>Support</Link>
              <Link to="/notifications" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(74,222,128,0.12)', color: '#4ade80', textDecoration: 'none', fontWeight: '700' }}>Notifications</Link>
              <button type="button" onClick={onLogout} style={{ padding: '0.75rem 1rem', borderRadius: '999px', border: '1px solid rgba(248, 113, 113, 0.35)', color: '#f87171', background: 'transparent', cursor: 'pointer', fontWeight: '700' }}>Logout</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1rem' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem' }}>
            <h3 style={{ color: '#00d2ff', marginTop: 0 }}>Profile Photo</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(0, 210, 255, 0.3)', background: 'rgba(2, 6, 23, 0.9)', display: 'grid', placeItems: 'center' }}>
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Current profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ color: '#fff', fontWeight: '800', fontSize: '1.4rem' }}>{(user?.username || 'T').charAt(0).toUpperCase()}</span>
                )}
              </div>
              <label style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.7rem 1rem', borderRadius: '999px', background: 'rgba(0, 210, 255, 0.12)', color: '#7dd3fc', cursor: 'pointer', fontWeight: '700' }}>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
                Choose Photo
              </label>
            </div>
            <p style={{ color: '#94a3b8', margin: '0.75rem 0 0', fontSize: '0.95rem' }}>Upload a profile image to personalize your account.</p>
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem' }}>
            <h3 style={{ color: '#00d2ff', marginTop: 0 }}>Account Information</h3>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {accountInfo.map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', paddingBottom: '0.7rem', borderBottom: '1px solid rgba(148, 163, 184, 0.14)' }}>
                  <span style={{ color: '#94a3b8' }}>{item.label}</span>
                  <span style={{ color: '#fff', fontWeight: '700' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem' }}>
            <h3 style={{ color: '#00d2ff', marginTop: 0 }}>Quick Actions</h3>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              <div style={{ padding: '0.9rem', borderRadius: '12px', background: 'rgba(0,210,255,0.1)', color: '#7dd3fc' }}>Upgrade to a dedicated VIP account</div>
              <div style={{ padding: '0.9rem', borderRadius: '12px', background: 'rgba(74,222,128,0.1)', color: '#4ade80' }}>Enable advanced risk alerts</div>
              <div style={{ padding: '0.9rem', borderRadius: '12px', background: 'rgba(245,158,11,0.12)', color: '#fbbf24' }}>Review latest trading activity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
