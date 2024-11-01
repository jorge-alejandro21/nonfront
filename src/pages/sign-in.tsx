import { Helmet } from 'react-helmet-async';
import { CONFIG } from 'src/config-global';
import { SignInView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <div style={{
      backgroundImage: 'url("/LOGO.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(8px)',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}>
      <Helmet>
        <title>{`Iniciar Sesion - ${CONFIG.appName}`}</title>
      </Helmet>

      <div style={{
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <SignInView />
      </div>
    </div>
  );
}
