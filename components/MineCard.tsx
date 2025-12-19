import React from 'react';
import { MineData } from '../types';
import { MapPin } from 'lucide-react';

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

const MineCard: React.FC<{ data: MineData }> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden flex flex-col h-full w-full transition-all hover:shadow-xl hover:border-slate-300">
      
      {/* 顶部装饰条 */}
      <div className="h-1.5 w-full bg-indigo-600"></div>

      {/* 头部区域 - 颜色加深，标题加大 */}
      <div className="px-3 py-3.5 bg-slate-100 border-b border-slate-200">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-base font-black text-slate-900 truncate tracking-tight leading-tight">
                {data.name}
            </h3>
            <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
        </div>
        
        {/* 指标胶囊 - 颜色加深 */}
        <div className="flex flex-wrap gap-2">
            {data.stats.slice(0, 2).map((stat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">
                    {/* 矿种名称 - 加深 */}
                    <span className="text-[10px] text-slate-700 font-black uppercase tracking-wider">
                      {stat.label.replace('资源量', '')}
                    </span>
                    <div className="flex items-baseline leading-none">
                        {/* 数值 - 加深 */}
                        <span className="text-[13px] font-black text-slate-950 font-mono-nums">
                          {stat.value.replace(/万吨|吨|wt/g, '')}
                        </span>
                        {/* 单位 - 加深 */}
                        <span className="text-[10px] text-slate-600 font-bold ml-0.5">
                          {stat.value.match(/万吨|吨|wt/)?.[0] || ''}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* 数据列表区域 */}
      <div className="flex-1 p-3">
          {/* 表头 - 颜色显著加深 */}
          <div className="grid grid-cols-12 px-2 pb-2.5 text-[11px] text-slate-700 font-black uppercase tracking-widest border-b border-slate-100 mb-2">
              <div className="col-span-3">元素</div>
              <div className="col-span-4 text-center">品位</div>
              <div className="col-span-5 text-right">金属量</div>
          </div>

          <div className="space-y-1.5">
            {data.details.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center px-2 py-2 rounded-lg bg-slate-50 border border-slate-200/50 hover:bg-slate-100 transition-colors shadow-sm">
                    
                    {/* 元素徽章 */}
                    <div className="col-span-3">
                        <div className={`
                            w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-black border shadow-sm
                            ${getElementStyle(row.element)}
                        `}>
                            {row.element}
                        </div>
                    </div>

                    {/* 品位 - 加深 */}
                    <div className="col-span-4 text-center">
                        <span className="text-[10px] font-black text-slate-700 font-mono-nums">
                            {row.grade}
                        </span>
                    </div>

                    {/* 金属量 - 加深 */}
                    <div className="col-span-5 text-right flex items-baseline justify-end">
                         <span className="text-[10px] font-black text-slate-950 font-mono-nums">
                            {row.metalAmount.replace(/万吨|吨|wt|-/g, '') || '-'}
                        </span>
                        {row.metalAmount !== '-' && (
                            <span className="text-[10px] text-slate-600 font-bold ml-0.5">
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