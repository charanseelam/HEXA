import { Link } from 'react-router-dom';

export default function History({ user }) {
  const trades = [
    { id: 1, symbol: 'EUR/USD', side: 'Buy', size: '1.25 lots', entry: '1.0864', exit: '1.0891', pnl: '+$240.00', status: 'Closed' },
    { id: 2, symbol: 'GBP/USD', side: 'Sell', size: '0.80 lots', entry: '1.2671', exit: '1.2628', pnl: '+$180.00', status: 'Closed' },
    { id: 3, symbol: 'USD/JPY', side: 'Buy', size: '1.00 lot', entry: '155.24', exit: '154.91', pnl: '-$90.00', status: 'Closed' }
  ];

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem 3rem', background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: '#00d2ff', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Trade History</div>
              <h2 style={{ color: '#fff', margin: '0 0 0.35rem', fontSize: '1.8rem' }}>Recent Activity</h2>
              <p style={{ color: '#94a3b8', margin: 0 }}>Review your executed trades and performance for {user?.username || 'your account'}.</p>
            </div>
            <Link to="/profile" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(0,210,255,0.12)', color: '#7dd3fc', textDecoration: 'none', fontWeight: '700' }}>Back to Profile</Link>
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
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Exit</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>P/L</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id} style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.14)' }}>
                  <td style={{ padding: '0.8rem 0.5rem', fontWeight: '700' }}>{trade.symbol}</td>
                  <td style={{ padding: '0.8rem 0.5rem' }}>{trade.side}</td>
                  <td style={{ padding: '0.8rem 0.5rem' }}>{trade.size}</td>
                  <td style={{ padding: '0.8rem 0.5rem' }}>{trade.entry}</td>
                  <td style={{ padding: '0.8rem 0.5rem' }}>{trade.exit}</td>
                  <td style={{ padding: '0.8rem 0.5rem', color: trade.pnl.startsWith('+') ? '#4ade80' : '#f87171', fontWeight: '700' }}>{trade.pnl}</td>
                  <td style={{ padding: '0.8rem 0.5rem', color: '#94a3b8' }}>{trade.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
