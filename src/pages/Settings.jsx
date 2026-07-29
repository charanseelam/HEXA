import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Settings({ user }) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [riskAlerts, setRiskAlerts] = useState(true);

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem 3rem', background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: '#00d2ff', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Settings</div>
              <h2 style={{ color: '#fff', margin: '0 0 0.35rem', fontSize: '1.8rem' }}>Account Preferences</h2>
              <p style={{ color: '#94a3b8', margin: 0 }}>Tune your trading workspace and notifications for {user?.username || 'your account'}.</p>
            </div>
            <Link to="/profile" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(0,210,255,0.12)', color: '#7dd3fc', textDecoration: 'none', fontWeight: '700' }}>Back to Profile</Link>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem' }}>
            <h3 style={{ color: '#00d2ff', marginTop: 0 }}>Workspace</h3>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {[
                { label: 'Enable notifications', value: notifications, onChange: () => setNotifications(!notifications) },
                { label: 'Dark mode', value: darkMode, onChange: () => setDarkMode(!darkMode) },
                { label: 'Risk alerts', value: riskAlerts, onChange: () => setRiskAlerts(!riskAlerts) }
              ].map((item) => (
                <label key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#e2e8f0', cursor: 'pointer' }}>
                  <span>{item.label}</span>
                  <input type="checkbox" checked={item.value} onChange={item.onChange} style={{ accentColor: '#00d2ff', width: '18px', height: '18px' }} />
                </label>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem' }}>
            <h3 style={{ color: '#00d2ff', marginTop: 0 }}>Security</h3>
            <p style={{ color: '#94a3b8', margin: '0 0 0.8rem' }}>Protect your account with a strong password and active session monitoring.</p>
            <button type="button" style={{ padding: '0.8rem 1rem', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg, #00d2ff, #4ade80)', color: '#04111d', fontWeight: '700', cursor: 'pointer' }}>
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
