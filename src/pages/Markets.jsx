import { Link } from 'react-router-dom';

export default function Markets({ user }) {
  const marketRows = [
    { symbol: 'EUR/USD', price: '1.0864', change: '+0.42%', volume: '18.2B' },
    { symbol: 'GBP/USD', price: '1.2671', change: '+0.18%', volume: '12.7B' },
    { symbol: 'USD/JPY', price: '155.24', change: '-0.09%', volume: '9.4B' },
    { symbol: 'Gold', price: '$1,935', change: '+1.12%', volume: '7.1M' }
  ];

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem 3rem', background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: '#00d2ff', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Markets</div>
              <h2 style={{ color: '#fff', margin: '0 0 0.35rem', fontSize: '1.8rem' }}>Live Market Overview</h2>
              <p style={{ color: '#94a3b8', margin: 0 }}>Track prices and volatility for {user?.username || 'your account'} across major instruments.</p>
            </div>
            <Link to="/dashboard" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(0,210,255,0.12)', color: '#7dd3fc', textDecoration: 'none', fontWeight: '700' }}>Open Dashboard</Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'US Dollar Index', value: '104.18', change: '+0.16%' },
            { label: 'Nasdaq', value: '17,840', change: '+0.74%' },
            { label: 'S&P 500', value: '5,610', change: '+0.54%' }
          ].map((item) => (
            <div key={item.label} style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '18px', padding: '1.2rem' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.16em' }}>{item.label}</div>
              <div style={{ color: '#fff', fontSize: '1.35rem', fontWeight: '700', marginTop: '0.4rem' }}>{item.value}</div>
              <div style={{ color: '#4ade80', marginTop: '0.25rem', fontWeight: '700' }}>{item.change}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.16)' }}>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Instrument</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Price</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Change</th>
                <th style={{ textAlign: 'left', padding: '0.7rem 0.5rem' }}>Volume</th>
              </tr>
            </thead>
            <tbody>
              {marketRows.map((row) => (
                <tr key={row.symbol} style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.14)' }}>
                  <td style={{ padding: '0.8rem 0.5rem', fontWeight: '700' }}>{row.symbol}</td>
                  <td style={{ padding: '0.8rem 0.5rem' }}>{row.price}</td>
                  <td style={{ padding: '0.8rem 0.5rem', color: row.change.startsWith('+') ? '#4ade80' : '#f87171', fontWeight: '700' }}>{row.change}</td>
                  <td style={{ padding: '0.8rem 0.5rem', color: '#94a3b8' }}>{row.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
