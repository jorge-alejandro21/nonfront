import { Helmet } from 'react-helmet-async';
import { CONFIG } from 'src/config-global';
import { SignInView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Helmet>
        <title>{`Iniciar Sesion - ${CONFIG.appName}`}</title>
      </Helmet>

      {/* Capa de fondo difuminada */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("ruta/de/tu-imagen.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: 0,
      }} />

      {/* Contenido principal sin difuminar */}
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
