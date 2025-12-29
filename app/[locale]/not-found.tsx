import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#3a3a3a',
      color: 'white'
    }}>
      <title>Página no encontrada | Asesoría IA</title>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>Página no encontrada</p>
      <Link href="/" style={{
        marginTop: '2rem',
        padding: '12px 24px',
        background: '#7C3AED',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px'
      }}>
        Volver al inicio
      </Link>
    </div>
  );
}
