import React from 'react';
import { MineData } from '../types';

interface MineCardProps {
  data: MineData;
}

// Vibrant Modern Palette
const getElementStyle = (element: string) => {
  const map: Record<string, string> = {
    Cu: 'bg-orange-500 text-white shadow-orange-200',
    Au: 'bg-yellow-400 text-yellow-900 shadow-yellow-200',
    Ag: 'bg-slate-400 text-white shadow-slate-200',
    Fe: 'bg-blue-500 text-white shadow-blue-200',
    TFe: 'bg-blue-600 text-white shadow-blue-200',
    mFe: 'bg-blue-400 text-white shadow-blue-200',
    Pb: 'bg-indigo-500 text-white shadow-indigo-200',
    Zn: 'bg-cyan-500 text-white shadow-cyan-200',
    Mo: 'bg-purple-500 text-white shadow-purple-200',
    Ni: 'bg-emerald-500 text-white shadow-emerald-200',
    S: 'bg-amber-500 text-white shadow-amber-200',
    V2O5: 'bg-rose-500 text-white shadow-rose-200',
  };
  return map[element] || 'bg-slate-500 text-white shadow-slate-200';
};

const MineCard: React.FC<MineCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] p-3 flex flex-col h-full border border-slate-50 hover:border-blue-100 transition-colors relative overflow-hidden group">
      
      {/* Subtle top decoration line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* Header */}
      <div className="mb-3">
        <h3 className="text-[13px] font-extrabold text-slate-800 leading-tight mb-1 line-clamp-1">
          {data.name}
        </h3>
        
        {/* Key Stats as tiny pills */}
        <div className="flex flex-wrap gap-1">
          {data.stats.slice(0, 2).map((stat, idx) => (
            <div key={idx} className="inline-flex items-baseline gap-1">
               <span className="text-[10px] text-slate-400 scale-90 origin-left hidden">Res.</span>
               <span className="text-[11px] font-bold text-slate-600 font-mono-nums tracking-tight">
                {stat.value.replace(/万吨|吨|wt/g, '')}
                <span className="text-[9px] text-slate-400 ml-0.5 font-normal scale-90">
                    {stat.value.match(/万吨|吨|wt/)?.[0] || ''}
                </span>
               </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Grid List */}
      <div className="space-y-2 mt-auto">
        {data.details.map((row, idx) => (
            <div key={idx} className="flex items-center justify-between group/row">
                <div className="flex items-center gap-2 min-w-0">
                    {/* Element Badge */}
                    <div className={`
                        w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold shadow-sm tracking-tighter
                        ${getElementStyle(row.element)}
                    `}>
                        {row.element}
                    </div>
                    
                    {/* Grade (secondary info) */}
                    <div className="text-[10px] text-slate-400 truncate max-w-[3rem]">
                        {row.grade}
                    </div>
                </div>

                {/* Amount (Primary info) */}
                <div className="text-[11px] font-bold text-slate-700 font-mono-nums">
                    {row.metalAmount.replace(/万吨|吨|wt/g, '')}
                    {/* Unit indicator dot if needed, or just keep clean numbers */}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MineCard;