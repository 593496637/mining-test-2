import React from 'react';
import { LicenseGroup } from '../types';
import { Calendar, Scale, Ruler, Map, Stamp, ShieldCheck } from 'lucide-react';

interface LicenseSectionProps {
  group: LicenseGroup;
}

const LicenseSection: React.FC<LicenseSectionProps> = ({ group }) => {
  const isMining = group.title.includes('采矿');
  
  // Theme Configurations for "Grand" look
  const theme = isMining ? {
      gradient: 'from-emerald-600 to-teal-700',
      lightBg: 'bg-emerald-50/50',
      border: 'border-emerald-100',
      icon: <ShieldCheck className="w-6 h-6 text-white opacity-90" />, // Larger icon
      text: 'text-emerald-800'
  } : {
      gradient: 'from-amber-500 to-orange-600',
      lightBg: 'bg-amber-50/50',
      border: 'border-amber-100',
      icon: <Map className="w-6 h-6 text-white opacity-90" />, // Larger icon
      text: 'text-amber-800'
  };

  return (
    <div className="mb-8 last:mb-0">
      {/* 1. Grand Header Banner - Taller and larger text */}
      <div className={`
        relative rounded-t-2xl overflow-hidden shadow-md
        bg-gradient-to-r ${theme.gradient}
        p-5 flex items-center justify-between
      `}>
         {/* Texture overlay */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px'}}></div>
         
         <div className="relative z-10 flex items-center gap-4">
            <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl shadow-inner">
                {theme.icon}
            </div>
            <div>
                <h3 className="text-xl font-black text-white tracking-wide">{group.title}</h3>
                <p className="text-xs text-white/80 font-medium uppercase tracking-wider mt-0.5">Legal Documents</p>
            </div>
         </div>

         <div className="relative z-10 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30">
            <span className="text-sm font-bold text-white font-mono-nums">{group.count} Items</span>
         </div>
      </div>

      {/* 2. Content Container with "Folder" look */}
      <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 shadow-sm p-4 md:p-5 space-y-4">
        {group.items.map((item, idx) => (
          <div 
            key={idx} 
            className={`
                group relative rounded-xl p-4 md:p-5
                border ${theme.border} bg-white
                shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]
                hover:shadow-md transition-shadow duration-200
            `}
          >
            {/* Subtle left accent bar */}
            <div className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-full bg-gradient-to-b ${theme.gradient} opacity-70`}></div>

            <div className="pl-4">
                {/* Header: Company Name - Larger Text */}
                <div className="flex justify-between items-start mb-4 gap-3">
                    <h4 className="text-base md:text-lg font-bold text-slate-800 leading-snug">
                        {item.company}
                    </h4>
                    {/* Certified Stamp Icon effect */}
                    <div className="opacity-10 group-hover:opacity-20 transition-opacity">
                         <Stamp className="w-10 h-10 -rotate-12" />
                    </div>
                </div>
                
                {/* Metadata Grid - Larger Text */}
                <div className="bg-slate-50/80 rounded-xl p-3.5 grid grid-cols-2 gap-y-3 gap-x-4 border border-slate-100">
                    {/* Validity (Full Width) */}
                    <div className="col-span-2 flex items-start gap-2.5">
                         <Calendar className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                         <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase leading-none mb-1">有效期 Period</span>
                            <span className="text-sm font-bold text-slate-700 font-mono-nums leading-tight">
                                {item.validity.replace('至', ' → ')}
                            </span>
                         </div>
                    </div>

                    {/* Stats Rows */}
                    {item.scale && (
                        <div className="flex items-center gap-2.5">
                            <Scale className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">{item.scale}</span>
                        </div>
                    )}
                    {item.area && (
                        <div className="flex items-center gap-2.5">
                            <Map className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">{item.area}</span>
                        </div>
                    )}
                     {item.depth && (
                        <div className="flex items-center gap-2.5">
                            <Ruler className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">{item.depth}</span>
                        </div>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseSection;