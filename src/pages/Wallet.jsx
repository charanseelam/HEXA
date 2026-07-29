import { Link } from 'react-router-dom';

export default function Wallet({ user }) {
  const balances = [
    { label: 'Main Balance', value: '$10,000.00', tone: '#00d2ff' },
    { label: 'Available Margin', value: '$8,450.00', tone: '#4ade80' },
    { label: 'Pending Withdrawals', value: '$1,200.00', tone: '#f59e0b' }
  ];

  const transactions = [
    { id: 1, title: 'Deposit', amount: '+$2,500.00', status: 'Completed' },
    { id: 2, title: 'Withdrawal', amount: '-$500.00', status: 'Pending' },
    { id: 3, title: 'Bonus Credit', amount: '+$300.00', status: 'Completed' }
  ];

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem 3rem', background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: '#00d2ff', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Wallet</div>
              <h2 style={{ color: '#fff', margin: '0 0 0.35rem', fontSize: '1.8rem' }}>Funding & Withdrawals</h2>
              <p style={{ color: '#94a3b8', margin: 0 }}>Manage funds for {user?.username || 'your account'} with fast transfers and secure payouts.</p>
            </div>
            <Link to="/profile" style={{ padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(0,210,255,0.12)', color: '#7dd3fc', textDecoration: 'none', fontWeight: '700' }}>Back to Profile</Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {balances.map((balance) => (
            <div key={balance.label} style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '18px', padding: '1.2rem' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.16em' }}>{balance.label}</div>
              <div style={{ color: balance.tone, fontSize: '1.35rem', fontWeight: '700', marginTop: '0.45rem' }}>{balance.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem' }}>
            <h3 style={{ color: '#00d2ff', marginTop: 0 }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
              <button type="button" style={{ padding: '0.8rem 1rem', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg, #00d2ff, #4ade80)', color: '#04111d', fontWeight: '700', cursor: 'pointer' }}>Deposit Funds</button>
              <button type="button" style={{ padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid rgba(148, 163, 184, 0.2)', background: 'transparent', color: '#e2e8f0', fontWeight: '700', cursor: 'pointer' }}>Withdraw Funds</button>
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '20px', padding: '1.3rem' }}>
            <h3 style={{ color: '#00d2ff', marginTop: 0 }}>Recent Transactions</h3>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              {transactions.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.7rem', borderBottom: '1px solid rgba(148, 163, 184, 0.14)' }}>
                  <div>
                    <div style={{ color: '#fff', fontWeight: '700' }}>{item.title}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.status}</div>
                  </div>
                  <div style={{ color: item.amount.startsWith('+') ? '#4ade80' : '#f87171', fontWeight: '700' }}>{item.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
