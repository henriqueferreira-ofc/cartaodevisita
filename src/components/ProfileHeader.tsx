import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center px-5 pt-6 pb-2 sm:px-6 sm:pt-7">
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-1 bg-gold rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
        <img 
          src="assets/fotoperfil.png" 
          alt="Foto do perfil" 
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-gold object-cover shadow-lg transform transition duration-500 group-hover:scale-105"
        />
      </div>
      
      <h1 className="mt-4 text-[1.55rem] leading-tight sm:text-2xl font-bold text-white tracking-wide uppercase">
        HENRIQUE FERREIRA
      </h1>
      <h2 className="mt-1 max-w-[20rem] text-[0.78rem] leading-snug sm:text-sm text-gold font-semibold tracking-wider uppercase mb-3">
        Desenvolvedor Full Stack e Logístico Empresarial
      </h2>
      
      <p className="text-gray-200 text-sm max-w-xs leading-relaxed italic">
        "Transformando ideias em soluções digitais eficientes."
      </p>
    </div>
  );
};

export default ProfileHeader;
