import { Link } from 'react-router-dom';

export default function Portfolio({ user }) {
  const positions = [
    { symbol: 'EUR/USD', side: 'Long', size: '1.25 lots', entry: '1.0820', pnl: '+$240.00' },
    { symbol: 'Gold', side: 'Long', size: '0.50 lots', entry: '$1,935', pnl: '+$85.00' },
    { symbol: 'NASDAQ', side: 'Short', size: '2 contracts', entry: '17,840', pnl: '-$120.00' }
  ];

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem 3rem', background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: '#00d2ff', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Portfolio</div>
              <h2 style={{ color: '#fff', margin: '0 0 0.35rem', fontSize: '1.8rem' }}>Open Positions</h2>
              <p style={{ color: '#94a3b8', margin: 0 }}>Review your current allocations and performance for {user?.username || 'your account'}.</p>
            </div>
            <Link to="/dashboard" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(0,210,255,0.12)', color: '#7dd3fc', textDecoration: 'none', fontWeight: '700' }}>Go to Dashboard</Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '18px', padding: '1.2rem' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.16em' }}>Total Equity</div>
            <div style={{ color: '#fff', fontSize: '1.35rem', fontWeight: '700', marginTop: '0.4rem' }}>$11,240.00</div>
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '18px', padding: '1.2rem' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.16em' }}>Daily P/L</div>
            <div style={{ color: '#4ade80', fontSize: '1.35rem', fontWeight: '700', marginTop: '0.4rem' }}>$325.00</div>
          </div>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Symbol</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Side</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Size</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Entry</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>P/L</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((position) => (
                <tr key={position.symbol} style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.14)' }}>
                  <td style={{ padding: '0.8rem 0.5rem', fontWeight: '700' }}>{position.symbol}</td>
                  <td style={{ padding: '0.8rem 0.5rem' }}>{position.side}</td>
                  <td style={{ padding: '0.8rem 0.5rem' }}>{position.size}</td>
                  <td style={{ padding: '0.8rem 0.5rem' }}>{position.entry}</td>
                  <td style={{ padding: '0.8rem 0.5rem', color: position.pnl.startsWith('+') ? '#4ade80' : '#f87171', fontWeight: '700' }}>{position.pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
