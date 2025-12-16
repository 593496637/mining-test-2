import React from 'react';
import { MineData } from '../types';
import { MapPin } from 'lucide-react';

interface MineCardProps {
  data: MineData;
}

const getElementStyle = (element: string) => {
  const map: Record<string, string> = {
    Cu: 'bg-orange-50 text-orange-700 border-orange-200',
    Au: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    Ag: 'bg-slate-100 text-slate-600 border-slate-200',
    Fe: 'bg-blue-50 text-blue-700 border-blue-200',
    TFe: 'bg-blue-50 text-blue-700 border-blue-200',
    mFe: 'bg-sky-50 text-sky-700 border-sky-200',
    Pb: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Zn: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    Mo: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    Ni: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    S: 'bg-amber-50 text-amber-700 border-amber-200',
    V2O5: 'bg-rose-50 text-rose-700 border-rose-200',
  };
  return map[element] || 'bg-gray-50 text-gray-700 border-gray-200';
};

const MineCard: React.FC<MineCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] border border-slate-200 overflow-hidden flex flex-col h-full w-full">
      
      {/* 极简顶部装饰条 */}
      <div className="h-0.5 w-full bg-indigo-500/80"></div>

      {/* 头部区域 - 极致紧凑 */}
      <div className="px-3 py-2.5 bg-slate-50/50 border-b border-slate-100">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-slate-800 truncate tracking-tight">{data.name}</h3>
            <MapPin className="w-3 h-3 text-slate-300 flex-shrink-0" />
        </div>
        
        {/* 指标胶囊 */}
        <div className="flex flex-wrap gap-1.5">
            {data.stats.slice(0, 2).map((stat, idx) => (
                <div key={idx} className="flex items-center gap-1 px-1.5 py-0.5 bg-white rounded-[4px] border border-slate-200 shadow-sm">
                    <span className="text-[9px] text-slate-400 font-medium">{stat.label.replace('资源量', '')}</span>
                    <div className="flex items-baseline leading-none">
                        <span className="text-[11px] font-bold text-slate-700 font-mono-nums">{stat.value.replace(/万吨|吨|wt/g, '')}</span>
                        <span className="text-[9px] text-slate-400 scale-75 origin-left ml-0.5">{stat.value.match(/万吨|吨|wt/)?.[0] || ''}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* 数据列表区域 */}
      <div className="flex-1 p-2">
          {/* 中文表头 */}
          <div className="grid grid-cols-12 px-2 pb-1.5 pt-0.5 text-[9px] text-slate-400 font-medium">
              <div className="col-span-3 pl-0.5">元素</div>
              <div className="col-span-4 text-center">品位</div>
              <div className="col-span-5 text-right pr-0.5">金属量</div>
          </div>

          <div className="space-y-1">
            {data.details.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center px-2 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                    
                    {/* 元素徽章 */}
                    <div className="col-span-3">
                        <div className={`
                            w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold border shadow-sm
                            ${getElementStyle(row.element)}
                        `}>
                            {row.element}
                        </div>
                    </div>

                    {/* 品位 */}
                    <div className="col-span-4 text-center">
                        <span className="text-[11px] font-bold text-slate-600 font-mono-nums tracking-tight">
                            {row.grade}
                        </span>
                    </div>

                    {/* 金属量 */}
                    <div className="col-span-5 text-right flex items-baseline justify-end">
                         <span className="text-[11px] font-bold text-slate-800 font-mono-nums">
                            {row.metalAmount.replace(/万吨|吨|wt|-/g, '') || '-'}
                        </span>
                        {row.metalAmount !== '-' && (
                            <span className="text-[9px] text-slate-400 scale-75 origin-left ml-0.5">
                                {row.metalAmount.match(/万吨|吨|wt/)?.[0] || ''}
                            </span>
                        )}
                    </div>
                </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default MineCard;