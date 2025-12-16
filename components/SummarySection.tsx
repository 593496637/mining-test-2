import React from 'react';
import { SummaryItem } from '../types';
import { Pickaxe, Droplets } from 'lucide-react';

interface SummarySectionProps {
  title: string;
  items: SummaryItem[];
  type: 'mineral' | 'salt';
}

const SummarySection: React.FC<SummarySectionProps> = ({ title, items, type }) => {
  const isMineral = type === 'mineral';
  
  // Theme configuration to match the "Grand" style of licenses
  const theme = isMineral ? {
      gradient: 'from-indigo-500 to-blue-600',
      icon: <Pickaxe className="w-5 h-5 text-white opacity-90" />,
      subTitle: 'Mineral Overview'
  } : {
      gradient: 'from-violet-600 to-fuchsia-600', // Distinctive purple/pink for Salt
      icon: <Droplets className="w-5 h-5 text-white opacity-90" />,
      subTitle: 'Salt Lake Overview'
  };

  return (
    <section className="mb-8 last:mb-0">
      {/* Grand Header */}
      <div className={`
        relative rounded-t-2xl overflow-hidden shadow-md
        bg-gradient-to-r ${theme.gradient}
        p-4 flex items-center justify-between
      `}>
         {/* Texture overlay */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px'}}></div>
         
         <div className="relative z-10 flex items-center gap-3 overflow-hidden">
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg shadow-inner flex-shrink-0">
                {theme.icon}
            </div>
            <div className="min-w-0">
                <h3 className="text-lg font-black text-white tracking-wide whitespace-nowrap overflow-visible">
                    {title}
                </h3>
                <p className="text-[10px] text-white/80 font-medium uppercase tracking-wider truncate">
                    {theme.subTitle}
                </p>
            </div>
         </div>

         {/* Count Badge (Hidden on very small screens if title is too long, or just kept compact) */}
         <div className="relative z-10 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 flex-shrink-0 ml-2 hidden xs:block">
            <span className="text-xs font-bold text-white font-mono-nums">{items.length} Items</span>
         </div>
      </div>
      
      {/* Content Container */}
      <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 shadow-sm p-3 md:p-4">
        <div className="grid grid-cols-2 gap-3 md:gap-5">
            {items.map((item, index) => {
                const cardBg = isMineral 
                    ? 'bg-slate-50 border-slate-100' 
                    : 'bg-slate-50 border-slate-100';
                
                const iconColor = isMineral ? 'text-blue-100' : 'text-fuchsia-100';
                const valueColor = 'text-slate-800';

                // Corrected Logic: Display Name (Label) at top, Chemical/Unit at bottom
                const primaryText = item.label; // e.g., "柯柯"
                const secondaryText = type === 'salt' ? item.color : ''; // e.g., "NaCl"
                const unitText = item.subValue; // e.g., "万吨"

                return (
                    <div 
                        key={index} 
                        className={`
                            ${cardBg} border rounded-xl p-4 relative overflow-hidden group
                            hover:shadow-md transition-shadow duration-200
                        `}
                    >
                        {/* Background Icon Watermark */}
                        <div className={`absolute -right-3 -bottom-3 transform -rotate-12 scale-150 pointer-events-none ${iconColor}`}>
                            {isMineral ? <Pickaxe size={72} /> : <Droplets size={72} />}
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[4.5rem]">
                            {/* Header: Name */}
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-sm font-bold text-slate-700 tracking-wide z-10">
                                    {primaryText}
                                </span>
                                {/* For salt lakes, show the chemical formula as a badge */}
                                {secondaryText && (
                                    <span className={`
                                        text-[9px] font-extrabold px-1.5 py-0.5 rounded-md
                                        ${isMineral ? 'bg-blue-100 text-blue-600' : 'bg-fuchsia-100 text-fuchsia-600'}
                                    `}>
                                        {secondaryText}
                                    </span>
                                )}
                            </div>

                            {/* Value */}
                            <div className="flex items-baseline gap-1 mt-1">
                                <span className={`text-2xl font-black tracking-tighter font-mono-nums ${valueColor}`}>
                                    {item.value}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400">
                                    {unitText}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default SummarySection;