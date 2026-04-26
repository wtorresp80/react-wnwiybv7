import React, { useState, useEffect } from 'react';

// Íconos integrados directamente para evitar errores de dependencias externas
const Menu = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>;
const X = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const Clock = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const MapPin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const Mail = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const Heart = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const Users = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const BookOpen = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Instagram = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Youtube = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const Gift = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>;
const Target = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="1TargetTarget2" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const Compass = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>;

// Paleta de colores de la Iglesia
const colors = {
  lightBlue: '#3ba4d8', 
  darkBlue: '#13436b',  
  white: '#ffffff',
  grayLight: '#f8fafc',
  grayDark: '#4b5563'
};

// Componente Logo Completo (Texto e Icono)
const LogoCompleto = ({ className }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <svg className="w-12 h-12 md:w-16 md:h-16 mb-1" viewBox="0 0 100 100" fill="none">
          <path d="M48,5 c-12,16-24.5,33-18.5,56 c-11-13-11-34,3.5-49 C37,8,42,6,48,5z" fill={colors.lightBlue} />
          <path d="M45,52 c16-9,23.5,6.5,32,6.5 c12,0,21.5-11,21.5-11 c-6.5,18.5-24.5,31-43,34 c-21.5,3.5-43-2.5-55.5-17.5 C10,59,26,48,45,52z" fill={colors.darkBlue} />
        </svg>
        <div className="flex flex-col items-center text-center">
          <span className="font-medium text-[11px] sm:text-[13px] md:text-sm lg:text-base leading-none tracking-wide" style={{ color: colors.lightBlue }}>
            LUGAR DE <span className="font-black" style={{ color: colors.darkBlue }}>PROVISIÓN</span> Y CRECIMIENTO
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src="logo iglesia en azules.png"
      alt="Iglesia Wesleyana Suba"
      className={className}
      onError={() => setError(true)}
    />
  );
};

// Componente Solo Icono
const LogoSoloIcono = ({ className }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <path d="M48,5 c-12,16-24.5,33-18.5,56 c-11-13-11-34,3.5-49 C37,8,42,6,48,5z" fill={colors.lightBlue} />
        <path d="M45,52 c16-9,23.5,6.5,32,6.5 c12,0,21.5-11,21.5-11 c-6.5,18.5-24.5,31-43,34 c-21.5,3.5-43-2.5-55.5-17.5 C10,59,26,48,45,52z" fill={colors.darkBlue} />
      </svg>
    );
  }

  return (
    <img
      src="Logo1.png"
      alt="Iglesia Wesleyana Suba"
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  // Verificar si el usuario ya aceptó las cookies previamente
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Identidad', href: '#identidad' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const schedules = [
    {
      day: 'Domingo',
      time: '7:00 AM y 10:30 AM',
      title: 'Reunión Dominical',
      description: 'Ven y comparte con nosotros un tiempo especial en familia escuchando la palabra de Dios.',
      icon: <Users className="w-8 h-8" style={{ color: colors.lightBlue }} />
    },
    {
      day: 'Martes',
      time: '6:30 PM',
      title: 'Reunión de Adoración',
      description: 'Un espacio dedicado a exaltar el nombre de Dios a través de la alabanza y la adoración.',
      icon: <Heart className="w-8 h-8" style={{ color: colors.lightBlue }} />
    },
    {
      day: 'Jueves',
      time: '6:30 PM',
      title: 'Reunión de Oración',
      description: 'Nos unimos en clamor y ruego. Creemos en el poder de la oración en comunidad.',
      icon: <BookOpen className="w-8 h-8" style={{ color: colors.lightBlue }} />
    },
    {
      day: 'Sábados',
      time: '5:00 PM',
      title: 'Reunión de Jóvenes',
      description: 'Un tiempo dinámico y lleno de energía para que los jóvenes conecten con su propósito.',
      icon: <Users className="w-8 h-8" style={{ color: colors.lightBlue }} />
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 relative" style={{ backgroundColor: colors.white }}>
      
      {/* Componente Modal de DONACIONES */}
      {isDonationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center bg-blue-50 shrink-0">
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6" style={{ color: colors.lightBlue }} />
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: colors.darkBlue }}>Donaciones</h3>
              </div>
              <button onClick={() => setIsDonationModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X className="w-6 h-6" style={{ color: colors.darkBlue }} />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto text-gray-700 space-y-4 sm:space-y-6">
              <p className="text-center text-base sm:text-lg font-medium" style={{ color: colors.darkBlue }}>
                "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." <br/>
                <span className="text-xs sm:text-sm font-normal text-gray-500">2 Corintios 9:7</span>
              </p>
              
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-200 space-y-4">
                <h4 className="font-bold text-base sm:text-lg border-b pb-2 text-center" style={{ color: colors.darkBlue }}>Aporte con Código QR</h4>
                
                <div className="flex justify-center">
                  <img 
                    src="qr-bancolombia.jpeg" 
                    alt="Código QR Bancolombia Iglesia Wesleyana" 
                    className="w-full max-w-[200px] sm:max-w-[250px] object-contain rounded-xl shadow-sm border border-gray-200"
                  />
                </div>

                <div className="pt-3 border-t border-gray-200 space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-base">
                    <span className="font-semibold">Llave Bancolombia:</span>
                    <span className="font-mono bg-white px-2 py-1 rounded border border-gray-300">0090866521</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-base">
                    <span className="font-semibold">A nombre de:</span>
                    <span className="text-right">Iglesia Wesleyana Distrito C</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-base">
                    <span className="font-semibold">NIT:</span>
                    <span>900302800</span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Para solicitar un certificado de donación, por favor envía el comprobante de tu transferencia a nuestro correo oficial.
              </p>
            </div>
            
            <div className="p-4 border-t border-gray-200 flex justify-center bg-gray-50 shrink-0">
              <button 
                onClick={() => setIsDonationModalOpen(false)} 
                className="px-8 py-2.5 sm:py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity w-full" 
                style={{ backgroundColor: colors.lightBlue }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Componente Modal de Políticas de Privacidad */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50 shrink-0">
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: colors.darkBlue }}>Políticas de Privacidad y Cookies</h3>
              <button onClick={() => setIsPrivacyModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X className="w-6 h-6" style={{ color: colors.darkBlue }} />
              </button>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto text-gray-700 space-y-6 text-sm md:text-base">
              <p>
                En la <strong>Iglesia Wesleyana Suba - Lugar de Provisión y Crecimiento</strong> valoramos su privacidad y nos comprometemos a proteger sus datos personales de acuerdo con la legislación vigente en Colombia (Ley Estatutaria 1581 de 2012).
              </p>
              
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: colors.darkBlue }}>1. Uso de Cookies</h4>
                <p>
                  Este sitio web utiliza "cookies" técnicas estrictamente necesarias para el correcto funcionamiento de la página y para mejorar su experiencia de navegación. No utilizamos cookies para rastreo publicitario invasivo ni vendemos su información a terceros. Al continuar navegando, usted acepta el uso de estas cookies.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: colors.darkBlue }}>2. Recopilación y Uso de Datos Personales</h4>
                <p>
                  Si usted se pone en contacto con nosotros o realiza aportes financieros (diezmos o donaciones), la información proporcionada (como nombre, correo, teléfono o identificación) será tratada con absoluta confidencialidad. Estos datos se utilizarán exclusivamente para:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Responder a sus peticiones, dudas o solicitudes de oración.</li>
                  <li>Proveer información sobre los horarios, eventos y actividades de la iglesia.</li>
                  <li>Gestión contable, administrativa y emisión de certificados de donación requeridos por ley.</li>
                  <li>Mantener contacto pastoral y apoyo espiritual si así lo requiere.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: colors.darkBlue }}>3. Sus Derechos</h4>
                <p>
                  Como titular de los datos, usted tiene derecho a conocer, actualizar, rectificar o solicitar la eliminación de su información de nuestras bases de datos en cualquier momento.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: colors.darkBlue }}>4. Contacto</h4>
                <p>
                  Para ejercer sus derechos o resolver cualquier duda sobre estas políticas, puede comunicarse con nosotros enviando un mensaje a <strong>provision@wesleyansuba.org</strong>.
                </p>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200 flex justify-end bg-gray-50 shrink-0">
              <button 
                onClick={() => setIsPrivacyModalOpen(false)} 
                className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity" 
                style={{ backgroundColor: colors.lightBlue }}
              >
                Entendido y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b transition-all duration-300" style={{ borderColor: `${colors.grayLight}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div className="flex items-center">
              <a href="#inicio" className="flex items-center">
                <LogoCompleto className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-semibold hover:opacity-70 transition-opacity uppercase tracking-wider" style={{ color: colors.darkBlue }}>{link.name}</a>
              ))}
              <button onClick={() => setIsDonationModalOpen(true)} className="px-5 py-2 rounded-full text-white text-sm font-bold shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2" style={{ backgroundColor: colors.lightBlue }}><Gift className="w-4 h-4" />DONAR</button>
            </div>
            <div className="lg:hidden flex items-center gap-4">
              <button onClick={() => setIsDonationModalOpen(true)} className="px-4 py-2 rounded-full text-white text-sm font-bold shadow-md active:scale-95 transition-all flex items-center gap-2" style={{ backgroundColor: colors.lightBlue }}><Gift className="w-4 h-4" />DONAR</button>
              <button onClick={toggleMenu} style={{ color: colors.darkBlue }} className="p-2">{isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}</button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg" style={{ borderColor: colors.grayLight }}>
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-4 py-4 rounded-xl text-lg font-bold uppercase tracking-wider bg-gray-50 active:bg-gray-100" style={{ color: colors.darkBlue }} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-24 md:pt-32 md:pb-32 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Fondo" className="w-full h-full object-cover opacity-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center w-full">
          <div className="lg:w-3/5 space-y-6 md:space-y-8 text-center lg:text-left mt-10 lg:mt-0">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-100 bg-blue-50/50 text-sm md:text-base font-semibold mb-2" style={{ color: colors.darkBlue }}><Heart className="w-5 h-5" style={{ color: colors.lightBlue }} />Bienvenido a casa</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block" style={{ color: colors.darkBlue }}>Tu Lugar de</span>
              <span className="block mt-2" style={{ color: colors.lightBlue }}>Provisión</span>
              <span className="block mt-2" style={{ color: colors.darkBlue }}>y Crecimiento</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">Somos una comunidad de fe, ubicada en Suba, apasionada por la presencia de Dios y dedicada a crecer juntos en amor, gracia y conocimiento.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <a href="#horarios" className="w-full sm:w-auto px-8 py-4 text-base md:text-lg font-bold rounded-full text-white hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2" style={{ backgroundColor: colors.lightBlue }}>Nuestros Horarios</a>
              <a href="#contacto" className="w-full sm:w-auto px-8 py-4 border-2 text-base md:text-lg font-bold rounded-full hover:bg-gray-50 transition-all flex justify-center items-center" style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}>Ubicación</a>
            </div>
          </div>
          <div className="lg:w-2/5 mt-12 lg:mt-0 flex justify-center lg:justify-end w-full">
             <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white rounded-full shadow-2xl flex items-center justify-center p-8 sm:p-12 border-8" style={{ borderColor: colors.grayLight }}>
               <LogoSoloIcono className="w-full h-full object-contain" />
             </div>
          </div>
        </div>
      </section>

      {/* Schedules Section */}
      <section id="horarios" className="py-24" style={{ backgroundColor: colors.grayLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide" style={{ color: colors.darkBlue }}>Nuestros Horarios</h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.lightBlue }}></div>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">Te esperamos en nuestras reuniones. Hay un lugar especial para ti y tu familia.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {schedules.map((schedule, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 border-b-4 flex flex-col h-full" style={{ borderBottomColor: colors.lightBlue }}>
                <div className="flex justify-center mb-6"><div className="p-5 rounded-2xl" style={{ backgroundColor: `${colors.lightBlue}15` }}>{schedule.icon}</div></div>
                <h3 className="text-xl font-black text-center mb-3 uppercase tracking-wider" style={{ color: colors.darkBlue }}>{schedule.day}</h3>
                <div className="flex items-center justify-center gap-2 mb-6 py-2 px-4 rounded-full bg-gray-50 text-sm sm:text-base font-bold" style={{ color: colors.lightBlue }}><Clock className="w-5 h-5" /><span>{schedule.time}</span></div>
                <div className="flex-grow"><h4 className="text-lg font-bold text-center mb-3 text-gray-800">{schedule.title}</h4><p className="text-gray-600 text-center text-sm md:text-base leading-relaxed">{schedule.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: MISIÓN Y VISIÓN (IDENTIDAD) */}
      <section id="identidad" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide" style={{ color: colors.darkBlue }}>Nuestra Identidad</h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.lightBlue }}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Tarjeta de VISIÓN */}
            <div className="relative p-8 rounded-3xl border-2 transition-all hover:shadow-xl group" style={{ borderColor: colors.grayLight }}>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full border-2 flex items-center gap-2" style={{ borderColor: colors.lightBlue }}>
                <Target className="w-6 h-6" style={{ color: colors.lightBlue }} />
                <span className="font-bold uppercase tracking-widest text-sm" style={{ color: colors.darkBlue }}>Visión</span>
              </div>
              <div className="mt-4 text-center space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  "Ser una Iglesia que funcione como un lugar de provisión y crecimiento. Donde cada persona encuentre en Dios todo lo necesario para su vida, y un espacio de crecimiento constante que forme creyentes maduros, firmes en su fe y comprometidos con el propósito de Cristo."
                </p>
                {/* Pilares de Visión inspirados en el cuadro */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div className="flex flex-col items-center text-center p-3">
                    <LogoSoloIcono className="w-8 h-8 mb-2 opacity-80" />
                    <span className="text-xs font-bold uppercase" style={{ color: colors.lightBlue }}>Provisión y Crecimiento</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3">
                    <Users className="w-8 h-8 mb-2 opacity-80" style={{ color: colors.darkBlue }} />
                    <span className="text-xs font-bold uppercase" style={{ color: colors.lightBlue }}>Comunidad Integral</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3">
                    <Heart className="w-8 h-8 mb-2 opacity-80" style={{ color: colors.darkBlue }} />
                    <span className="text-xs font-bold uppercase" style={{ color: colors.lightBlue }}>Firmes en la Fe</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3">
                    <Compass className="w-8 h-8 mb-2 opacity-80" style={{ color: colors.darkBlue }} />
                    <span className="text-xs font-bold uppercase" style={{ color: colors.lightBlue }}>Propósito de Cristo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de MISIÓN */}
            <div className="relative p-8 rounded-3xl border-2 transition-all hover:shadow-xl group" style={{ borderColor: colors.grayLight }}>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full border-2 flex items-center gap-2" style={{ borderColor: colors.darkBlue }}>
                <Compass className="w-6 h-6" style={{ color: colors.darkBlue }} />
                <span className="font-bold uppercase tracking-widest text-sm" style={{ color: colors.darkBlue }}>Misión</span>
              </div>
              <div className="mt-4 text-center space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Guiar a las personas a una relación genuina con Dios, supliendo sus necesidades espirituales a través de la palabra, la oración, y la comunidad; acompañándolas en el proceso de crecimiento integral que transforme sus vidas, desarrollando carácter, propósito y servicio.
                </p>
                {/* Pilares de Misión inspirados en el cuadro */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div className="flex flex-col items-center text-center p-3">
                    <Users className="w-8 h-8 mb-2 opacity-80" style={{ color: colors.lightBlue }} />
                    <span className="text-xs font-bold uppercase" style={{ color: colors.darkBlue }}>Guiar a otros</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3">
                    <BookOpen className="w-8 h-8 mb-2 opacity-80" style={{ color: colors.lightBlue }} />
                    <span className="text-xs font-bold uppercase" style={{ color: colors.darkBlue }}>Enseñar la Palabra</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3">
                    <Heart className="w-8 h-8 mb-2 opacity-80" style={{ color: colors.lightBlue }} />
                    <span className="text-xs font-bold uppercase" style={{ color: colors.darkBlue }}>Acompañar Crecimiento</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3">
                    <Users className="w-8 h-8 mb-2 opacity-80" style={{ color: colors.lightBlue }} />
                    <span className="text-xs font-bold uppercase" style={{ color: colors.darkBlue }}>Desarrollar Carácter</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24" style={{ backgroundColor: colors.grayLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <div className="relative px-4 sm:px-0">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform translate-x-4 translate-y-4"></div>
                <img src="https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Comunidad" className="relative rounded-3xl shadow-xl w-full object-cover h-[300px] md:h-[400px] lg:h-[500px]" />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8 px-2 sm:px-0">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-4" style={{ color: colors.darkBlue }}>¿Quiénes Somos?</h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: colors.lightBlue }}></div>
              </div>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>La <strong>Iglesia Lugar de Provisión y Crecimiento</strong> es una comunidad cristiana dedicada a exaltar a Jesucristo, anunciar su evangelio y formar discípulos que vivan para la gloria de Dios. Creemos que la iglesia es un refugio donde cada persona puede experimentar <em>"La Provisión del Señor"</em>, y ser edificada en la verdad de su Palabra.</p>
                <p>Nos caracterizamos por la adoración sincera, la enseñanza bíblica sólida y el acompañamiento pastoral cercano. Somos una familia espiritual abierta para niños, jóvenes y adultos que buscan conocer y seguir más profundamente a Jesús.</p>
              </div>
              {/* Se restauró la lista de pilares */}
              <ul className="space-y-4 mt-8 bg-gray-50 p-6 rounded-2xl">
                {['Amor a Dios y al prójimo', 'Crecimiento espiritual constante', 'Comunidad y compañerismo', 'Servicio con excelencia'].map((value, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-full shadow-sm shrink-0">
                      <Heart className="w-5 h-5" style={{ color: colors.lightBlue }} />
                    </div>
                    <span className="font-semibold text-gray-800 text-base md:text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" className="text-white pt-20 pb-8 relative" style={{ backgroundColor: colors.darkBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div className="flex flex-col gap-2 bg-blue-50 p-6 rounded-2xl border border-blue-100 w-max mx-auto md:mx-0 items-center md:items-start text-center md:text-left">
                <LogoSoloIcono className="w-20 h-20 md:w-16 md:h-16 object-contain" />
                <h3 className="text-xl md:text-2xl font-black mt-2 leading-tight uppercase" style={{ color: colors.lightBlue }}>Lugar de Provisión<br/><span className="text-base font-semibold" style={{ color: colors.darkBlue }}>Y Crecimiento</span></h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-sm text-center md:text-left">Transformando vidas a través del amor de Jesús en nuestra ciudad. Un lugar donde tu familia puede crecer.</p>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-lg font-bold uppercase tracking-wider border-b-2 inline-block pb-1" style={{ borderColor: colors.lightBlue }}>Visítanos y Contáctanos</h4>
              <div className="space-y-6 text-gray-300">
                <a href="https://www.google.com/maps/search/?api=1&query=Cra.+99a+%23135-06,+Suba,+Bogotá,+Colombia" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row items-center md:items-start gap-4 hover:opacity-80 transition-opacity group cursor-pointer" title="Abrir en Google Maps">
                  <div className="mt-1 p-2 bg-white/10 rounded-full shrink-0 group-hover:bg-white/20 transition-colors"><MapPin className="w-5 h-5" style={{ color: colors.lightBlue }} /></div>
                  <div className="text-base md:text-sm text-center md:text-left"><p className="font-semibold text-white group-hover:underline">Dirección</p><p>Cra. 99a #135-06</p><p>Suba, Bogotá, Colombia</p></div>
                </a>
                <a href="mailto:provision@wesleyansuba.org" className="flex flex-col md:flex-row items-center md:items-start gap-4 hover:opacity-80 transition-opacity group cursor-pointer pt-2 border-t border-white/10" title="Enviar correo electrónico">
                  <div className="mt-1 p-2 bg-white/10 rounded-full shrink-0 group-hover:bg-white/20 transition-colors"><Mail className="w-5 h-5" style={{ color: colors.lightBlue }} /></div>
                  <div className="text-base md:text-sm text-center md:text-left"><p className="font-semibold text-white group-hover:underline">Correo Electrónico</p><p className="break-all">provision@wesleyansuba.org</p></div>
                </a>
              </div>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-lg font-bold uppercase tracking-wider border-b-2 inline-block pb-1" style={{ borderColor: colors.lightBlue }}>Síguenos</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.youtube.com/@iglesiaprovisionycrecimiento" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full transition-all hover:-translate-y-1 shadow-lg" style={{ backgroundColor: colors.lightBlue }}><Youtube className="w-6 h-6 text-white" /></a>
                <a href="https://www.instagram.com/iwsuba/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full transition-all hover:-translate-y-1 shadow-lg" style={{ backgroundColor: colors.lightBlue }}><Instagram className="w-6 h-6 text-white" /></a>
                <a href="https://www.facebook.com/IglesiaIWS/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full transition-all hover:-translate-y-1 shadow-lg" style={{ backgroundColor: colors.lightBlue }}><Facebook className="w-6 h-6 text-white" /></a>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Iglesia Wesleyana Suba. Todos los derechos reservados.</p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <button onClick={() => setIsPrivacyModalOpen(true)} className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Políticas de Privacidad</button>
              <p className="text-xs uppercase tracking-widest hidden md:block">|</p>
              <p className="text-xs uppercase tracking-widest text-center md:text-right">Lugar de Provisión y Crecimiento</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Banner Fijo de Cookies */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)] z-[90] p-4 md:p-6 border-t" style={{ borderColor: colors.grayLight }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div className="text-sm md:text-base text-gray-700 text-center md:text-left flex-1">
              <strong>Aviso de Cookies:</strong> Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, consideramos que acepta nuestra <button onClick={() => setIsPrivacyModalOpen(true)} className="font-bold underline hover:opacity-80 transition-opacity" style={{ color: colors.lightBlue }}>Política de Privacidad y Cookies</button>.
            </div>
            <div className="w-full md:w-auto shrink-0">
              <button onClick={acceptCookies} className="w-full md:w-auto px-8 py-3 text-white rounded-full font-bold shadow-md hover:-translate-y-1 transition-all" style={{ backgroundColor: colors.darkBlue }}>Aceptar y Continuar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
