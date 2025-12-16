import React from 'react';
import { LicenseGroup } from '../types';
import { Calendar, Scale, Ruler, Map, Stamp, ShieldCheck, FileText } from 'lucide-react';

interface LicenseSectionProps {
  group: LicenseGroup;
}

const LicenseSection: React.FC<LicenseSectionProps> = ({ group }) => {
  const isMining = group.title.includes('采矿');
  
  // Theme Configurations
  const theme = isMining ? {
      headerGradient: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      accentBorder: 'border-emerald-100/50',
      highlight: 'text-emerald-100',
      stampColor: 'text-emerald-600'
  } : {
      headerGradient: 'bg-gradient-to-r from-amber-500 to-orange-500',
      icon: <Map className="w-5 h-5 text-white" />,
      accentBorder: 'border-amber-100/50',
      highlight: 'text-amber-100',
      stampColor: 'text-amber-600'
  };

  return (
    <div className="mb-8 last:mb-0">
      {/* Header */}
      <div className={`
        relative rounded-t-xl overflow-hidden shadow-sm
        ${theme.headerGradient}
        p-4 flex items-center justify-between
      `}>
         <div className="relative z-10 flex items-center gap-3">
            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/20">
                {theme.icon}
            </div>
            <div>
                <h3 className="text-lg font-bold text-white tracking-wide leading-none">{group.title}</h3>
            </div>
         </div>

         <div className="relative z-10 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20">
            <span className="text-sm font-bold text-white font-mono-nums flex items-center gap-1.5">
                {group.count}
                <span className="opacity-80 text-[11px] uppercase font-normal">Items</span>
            </span>
         </div>
      </div>

      {/* Content Container */}
      <div className="bg-white rounded-b-xl border-x border-b border-slate-200 shadow-sm p-4 space-y-4">
        {group.items.map((item, idx) => (
          <div 
            key={idx} 
            className={`
                group relative rounded-lg p-4 sm:p-5 overflow-hidden
                border border-slate-100 bg-slate-50/30
                hover:bg-white hover:shadow-md hover:border-slate-200
                transition-all duration-300
            `}
          >
            {/* Left accent bar */}
            <div className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-full ${theme.headerGradient} opacity-60`}></div>

            <div className="pl-4 relative z-10">
                {/* Header: Company Name */}
                <div className="flex justify-between items-start gap-4 mb-4">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-snug tracking-tight">
                        {item.company}
                    </h4>
                    {/* Certified Stamp Icon effect */}
                    <div className="absolute right-[-10px] top-[-10px] opacity-10 group-hover:opacity-20 transition-opacity">
                         <Stamp className={`w-20 h-20 -rotate-12 ${theme.stampColor}`} />
                    </div>
                </div>
                
                {/* Metadata Grid - Increased text size to text-sm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                    {/* Validity */}
                    <div className="col-span-1 sm:col-span-2 flex items-center gap-2.5 text-slate-600">
                         <Calendar className="w-4 h-4 flex-shrink-0 text-slate-400" />
                         <span className="font-mono-nums font-semibold text-slate-700">{item.validity.replace(/\s/g, ' ')}</span>
                    </div>

                    {/* Stats Rows */}
                    {item.scale && (
                        <div className="flex items-center gap-2.5 text-slate-600">
                            <Scale className="w-4 h-4 flex-shrink-0 text-slate-400" />
                            <span className="font-semibold">{item.scale}</span>
                        </div>
                    )}
                    {item.area && (
                        <div className="flex items-center gap-2.5 text-slate-600">
                            <Map className="w-4 h-4 flex-shrink-0 text-slate-400" />
                            <span className="font-semibold">{item.area}</span>
                        </div>
                    )}
                     {item.depth && (
                        <div className="flex items-center gap-2.5 text-slate-600">
                            <Ruler className="w-4 h-4 flex-shrink-0 text-slate-400" />
                            <span className="font-semibold">{item.depth}</span>
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