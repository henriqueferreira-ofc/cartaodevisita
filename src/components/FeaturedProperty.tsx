import React from 'react';
import { PropertyData } from '../types';

const property: PropertyData = {
  title: "Portfólio Web",
  price: "Projetos personalizados",
  location: "Sites, sistemas e integrações",
  imageUrl: "assets/fullstack-developer.png"
};

const portfolioUrl = 'https://www.portfoliohenrique.com.br/';

const FeaturedProperty: React.FC = () => {
  return (
    <div className="px-5 sm:px-6 py-5 sm:py-6 w-full">
      <h3 className="text-white text-[0.7rem] sm:text-xs uppercase tracking-widest font-semibold mb-3 border-l-2 border-gold pl-2">
        Desenvolvedor Full Stack
      </h3>
      
      <div className="bg-black/35 rounded-2xl overflow-hidden border border-white/10 group hover:border-gold/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-300">
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img 
            src={property.imageUrl} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 bg-gold text-black text-[0.68rem] font-bold px-2.5 py-1 rounded-full shadow-lg">
            WEB
          </div>
        </div>
        
        <div className="p-4 sm:p-5">
          <h4 className="text-white font-bold text-lg sm:text-xl leading-tight">{property.title}</h4>
          <p className="text-gray-300 text-xs sm:text-sm mt-1 mb-4 flex items-center gap-2">
             <i className="fa-solid fa-code text-gold text-[11px]"></i> {property.location}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-2">
            <span className="text-gold font-bold text-sm sm:text-base">{property.price}</span>
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:ml-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-black shadow-[0_0_18px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_28px_rgba(212,175,55,0.55)] active:scale-[0.98]"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              Portfólio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
