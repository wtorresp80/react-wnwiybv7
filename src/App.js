import React, { useState } from 'react';

// Íconos integrados directamente
const Menu = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>;
const X = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const Clock = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const MapPin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const Heart = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const Users = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const BookOpen = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Instagram = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Youtube = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

const colors = {
  lightBlue: '#3ba4d8', 
  darkBlue: '#13436b',  
  white: '#ffffff',
  grayLight: '#f8fafc',
  grayDark: '#4b5563'
};

const LogoCompleto = ({ className }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <svg className="w-10 h-10 md:w-12 md:h-12 mb-1" viewBox="0 0 100 100" fill="none">
          <path d="M48,5 c-12,16-24.5,33-18.5,56 c-11-13-11-34,3.5-49 C37,8,42,6,48,5z" fill={colors.lightBlue} />
          <path d="M45,52 c16-9,23.5,6.5,32,6.5 c12,0,21.5-11,21.5-11 c-6.5,18.5-24.5,31-43,34 c-21.5,3.5-43-2.5-55.5-17.5 C10,59,26,48,45,52z" fill={colors.darkBlue} />
        </svg>
        <div className="flex flex-col items-center text-center">
          <span className="font-medium text-[9px] sm:text-[10px] md:text-[13px] lg:text-sm leading-none tracking-wide" style={{ color: colors.lightBlue }}>
            LUGAR DE <span className="font-black" style={{ color: colors.darkBlue }}>PROVISIÓN</span> Y CRECIMIENTO
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src="logo iglesia en azules.png"
      alt="Logo Iglesia Wesleyana Suba"
      className={className}
      onError={() => setError(true)}
    />
  );
};

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
      alt="Icono Iglesia Wesleyana"
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Horarios', href: '#horarios' },
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
    <div className="min-h-screen font-sans selection:bg-blue-100" style={{ backgroundColor: colors.white }}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b transition-all duration-300" style={{ borderColor: `${colors.grayLight}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            
            {/* Logo Area */}
            <div className="flex items-center">
              <a href="#inicio">
                <LogoCompleto className="h-20 sm:h-24 object-contain" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold hover:opacity-70 transition-opacity uppercase tracking-wider"
                  style={{ color: colors.darkBlue }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} style={{ color: colors.darkBlue }} className="p-2">
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg" style={{ borderColor: colors.grayLight }}>
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-lg text-base font-semibold uppercase tracking-wider bg-gray-50 active:bg-gray-100"
                  style={{ color: colors.darkBlue }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-32 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Fondo de la iglesia"
            className="w-full h-full object-cover opacity-[0.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center w-full">
          <div className="lg:w-3/5 space-y-8 text-center lg:text-left mt-8 lg:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-sm font-semibold mb-2" style={{ color: colors.darkBlue }}>
              <Heart className="w-4 h-4" style={{ color: colors.lightBlue }} />
              Bienvenido a casa
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block" style={{ color: colors.darkBlue }}>Tu Lugar de</span>
              <span className="block mt-2" style={{ color: colors.lightBlue }}>Provisión</span>
              <span className="block mt-2" style={{ color: colors.darkBlue }}>y Crecimiento</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Somos una comunidad de fe ubicada en Suba, apasionada por la presencia de Dios y dedicada a crecer juntos en amor, gracia y conocimiento biblico.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#horarios"
                className="px-8 py-4 text-base font-bold rounded-full text-white hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
                style={{ backgroundColor: colors.lightBlue }}
              >
                Nuestros Horarios
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 border-2 text-base font-bold rounded-full hover:bg-gray-50 transition-all flex justify-center items-center"
                style={{ borderColor: colors.darkBlue, color: colors.darkBlue }}
              >
                Ubicación
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 mt-16 lg:mt-0 flex justify-center lg:justify-end hidden sm:flex">
             <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-full shadow-2xl flex items-center justify-center p-12 border-8" style={{ borderColor: colors.grayLight }}>
               <LogoSoloIcono className="w-full h-full object-contain" />
             </div>
          </div>
        </div>
      </section>

      {/* Schedules Section */}
      <section id="horarios" className="py-24" style={{ backgroundColor: colors.grayLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide" style={{ color: colors.darkBlue }}>
              Nuestros Horarios
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.lightBlue }}></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Te esperamos en nuestras reuniones. Hay un lugar especial para ti y tu familia en cada uno de nuestros servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {schedules.map((schedule, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 border-b-4 flex flex-col h-full"
                style={{ borderBottomColor: colors.lightBlue }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-5 rounded-2xl" style={{ backgroundColor: `${colors.lightBlue}15` }}>
                    {schedule.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black text-center mb-3 uppercase tracking-wider" style={{ color: colors.darkBlue }}>
                  {schedule.day}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-6 py-2 px-4 rounded-full bg-gray-50 text-base font-bold" style={{ color: colors.lightBlue }}>
                  <Clock className="w-5 h-5" />
                  <span>{schedule.time}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-center mb-3 text-gray-800">
                    {schedule.title}
                  </h4>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {schedule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Comunidad" 
                  className="relative rounded-3xl shadow-xl w-full object-cover h-[400px] lg:h-[500px]"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-4" style={{ color: colors.darkBlue }}>
                  ¿Quiénes Somos?
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: colors.lightBlue }}></div>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  La <strong>Iglesia Wesleyana Suba</strong> es una comunidad cristiana comprometida con el mensaje transformador del Evangelio. Nuestro nombre, <em>"Lugar de Provisión y Crecimiento"</em>, refleja nuestra visión: ser una casa donde encuentres el alimento espiritual necesario para tu vida y el ambiente ideal para desarrollar tu potencial en Cristo.
                </p>
                <p>
                  Creemos firmemente en el discipulado, la adoración genuina, la oración constante y el servicio a nuestra comunidad local. ¡Nuestra familia está incompleta sin ti!
                </p>
              </div>
              <ul className="space-y-4 mt-8 bg-gray-50 p-6 rounded-2xl">
                {['Amor a Dios y al prójimo', 'Crecimiento espiritual constante', 'Comunidad y compañerismo', 'Servicio con excelencia'].map((value, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <Heart className="w-5 h-5" style={{ color: colors.lightBlue }} />
                    </div>
                    <span className="font-semibold text-gray-800">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" className="text-white pt-20 pb-8" style={{ backgroundColor: colors.darkBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            
            {/* Brand */}
            <div className="space-y-6">
              {/* Recuadro con fondo azul claro para que el logo resalte */}
              <div className="flex flex-col gap-2 bg-blue-50 p-6 rounded-2xl border border-blue-100 w-max">
                <LogoSoloIcono className="w-16 h-16 object-contain" />
                <h3 className="text-xl font-black mt-2 leading-tight uppercase" style={{ color: colors.lightBlue }}>
                  Lugar de Provisión<br/>
                  <span className="text-base font-semibold" style={{ color: colors.darkBlue }}>Y Crecimiento</span>
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Transformando vidas a través del amor de Jesús en nuestra ciudad. Un lugar donde tu familia puede crecer.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold uppercase tracking-wider border-b-2 inline-block pb-1" style={{ borderColor: colors.lightBlue }}>
                Visítanos
              </h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/10 rounded-full">
                    <MapPin className="w-5 h-5" style={{ color: colors.lightBlue }} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Dirección</p>
                    <p>Cra. 99a #135-06</p>
                    <p>Suba, Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold uppercase tracking-wider border-b-2 inline-block pb-1" style={{ borderColor: colors.lightBlue }}>
                Síguenos
              </h4>
              <p className="text-gray-300 mb-4 text-sm">
                Mantente conectado con nuestras actividades, prédicas y mensajes semanales.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.youtube.com/@iglesiaprovisionycrecimiento" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all hover:-translate-y-1 shadow-lg" 
                  style={{ backgroundColor: colors.lightBlue }}
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/iwsuba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all hover:-translate-y-1 shadow-lg" 
                  style={{ backgroundColor: colors.lightBlue }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/IglesiaIWS/?locale=es_LA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all hover:-translate-y-1 shadow-lg" 
                  style={{ backgroundColor: colors.lightBlue }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t pt-8 mt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p>&copy; {new Date().getFullYear()} Iglesia Wesleyana Suba. Todos los derechos reservados.</p>
            <p className="text-xs uppercase tracking-widest">Lugar de Provisión y Crecimiento</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
