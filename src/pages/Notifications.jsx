import { Link } from 'react-router-dom';

export default function Notifications({ user }) {
  const items = [
    { id: 1, title: 'Market Alert', message: 'EUR/USD is approaching your target price.', time: '5 min ago', type: 'info' },
    { id: 2, title: 'Deposit Confirmed', message: 'Your latest deposit of $2,500 has been credited.', time: '1 hour ago', type: 'success' },
    { id: 3, title: 'Risk Warning', message: 'Your open exposure has moved above the recommended threshold.', time: '3 hours ago', type: 'warning' }
  ];

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem 3rem', background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: '#00d2ff', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Notifications</div>
              <h2 style={{ color: '#fff', margin: '0 0 0.35rem', fontSize: '1.8rem' }}>Account Updates</h2>
              <p style={{ color: '#94a3b8', margin: 0 }}>Stay informed on market activity and account events for {user?.username || 'your account'}.</p>
            </div>
            <Link to="/profile" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(0,210,255,0.12)', color: '#7dd3fc', textDecoration: 'none', fontWeight: '700' }}>Back to Profile</Link>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '0.8rem' }}>
          {items.map((item) => (
            <div key={item.id} style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '18px', padding: '1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ color: '#fff', fontWeight: '700', marginBottom: '0.25rem' }}>{item.title}</div>
                  <div style={{ color: '#94a3b8', lineHeight: 1.6 }}>{item.message}</div>
                </div>
                <div style={{ color: item.type === 'success' ? '#4ade80' : item.type === 'warning' ? '#f59e0b' : '#7dd3fc', fontWeight: '700', fontSize: '0.9rem' }}>{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
