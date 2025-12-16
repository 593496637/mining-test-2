import React from 'react';
import { SummaryItem } from '../types';
import { Layers, Droplets } from 'lucide-react';

interface SummarySectionProps {
  title: string;
  items: SummaryItem[];
  type: 'mineral' | 'salt';
}

// 样式映射系统：根据元素生成配色方案和化学符号水印
const getCardStyle = (label: string, explicitCode?: string) => {
  // 默认样式
  let style = {
    bg: 'bg-slate-50',
    border: 'border-slate-100',
    text: 'text-slate-500',
    value: 'text-slate-800',
    symbolColor: 'text-slate-200',
    symbol: label.charAt(0)
  };

  const is = (key: string) => label.includes(key);

  // 矿物匹配逻辑
  if (is('铜')) {
    style = {
      bg: 'bg-orange-50',
      border: 'border-orange-100',
      text: 'text-orange-600',
      value: 'text-orange-900',
      symbolColor: 'text-orange-200',
      symbol: 'Cu'
    };
  } else if (is('金')) {
    style = {
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      text: 'text-amber-600',
      value: 'text-amber-900',
      symbolColor: 'text-amber-200',
      symbol: 'Au'
    };
  } else if (is('银')) {
    style = {
      bg: 'bg-slate-100',
      border: 'border-slate-200',
      text: 'text-slate-500',
      value: 'text-slate-700',
      symbolColor: 'text-slate-300',
      symbol: 'Ag'
    };
  } else if (is('铁')) {
    style = {
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-600',
      value: 'text-blue-900',
      symbolColor: 'text-blue-200',
      symbol: 'Fe'
    };
  } else if (is('铅')) {
    style = {
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      text: 'text-indigo-600',
      value: 'text-indigo-900',
      symbolColor: 'text-indigo-200',
      symbol: 'Pb'
    };
  } else if (is('锌')) {
    style = {
      bg: 'bg-cyan-50',
      border: 'border-cyan-100',
      text: 'text-cyan-600',
      value: 'text-cyan-900',
      symbolColor: 'text-cyan-200',
      symbol: 'Zn'
    };
  } else if (is('钼')) {
    style = {
      bg: 'bg-fuchsia-50',
      border: 'border-fuchsia-100',
      text: 'text-fuchsia-600',
      value: 'text-fuchsia-900',
      symbolColor: 'text-fuchsia-200',
      symbol: 'Mo'
    };
  } else if (is('镍')) {
    style = {
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      text: 'text-emerald-600',
      value: 'text-emerald-900',
      symbolColor: 'text-emerald-200',
      symbol: 'Ni'
    };
  } else if (is('钒')) {
    style = {
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      text: 'text-rose-600',
      value: 'text-rose-900',
      symbolColor: 'text-rose-200',
      symbol: 'V'
    };
  } 
  
  // 盐湖及特殊代码匹配
  if (explicitCode === 'NaCl' || is('柯柯') || is('茶卡')) {
    style = {
      bg: 'bg-sky-50',
      border: 'border-sky-100',
      text: 'text-sky-600',
      value: 'text-sky-900',
      symbolColor: 'text-sky-200',
      symbol: 'NaCl'
    };
  } else if (explicitCode === 'Li' || is('锂') || is('东台')) {
    style = {
      bg: 'bg-lime-50',
      border: 'border-lime-100',
      text: 'text-lime-600',
      value: 'text-lime-900',
      symbolColor: 'text-lime-200',
      symbol: 'Li'
    };
  } else if (explicitCode === 'MgCl2' || is('镁')) {
    style = {
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      text: 'text-purple-600',
      value: 'text-purple-900',
      symbolColor: 'text-purple-200',
      symbol: 'Mg'
    };
  }

  return style;
};

const SummarySection: React.FC<SummarySectionProps> = ({ title, items, type }) => {
  const isMineral = type === 'mineral';

  const theme = isMineral ? {
    headerGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    icon: <Layers className="w-5 h-5 text-blue-100" />,
  } : {
    headerGradient: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    icon: <Droplets className="w-5 h-5 text-cyan-100" />,
  };

  return (
    <section className="mb-8">
      {/* Header Container (保持不变) */}
      <div className={`
        relative rounded-t-xl overflow-hidden shadow-sm
        ${theme.headerGradient}
        p-4 flex items-center justify-between
      `}>
         <div className="relative z-10 flex items-center gap-3">
            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/20 shadow-inner">
                {theme.icon}
            </div>
            <div>
                <h3 className="text-lg font-bold text-white tracking-wide leading-none drop-shadow-sm">
                    {title}
                </h3>
            </div>
         </div>
      </div>

      {/* Body Container */}
      <div className="bg-white rounded-b-xl border-x border-b border-slate-200 shadow-sm p-4">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {items.map((item, index) => {
            const style = getCardStyle(item.label, item.color);
            
            return (
                <div 
                key={index}
                className={`
                    relative group flex flex-col justify-between overflow-hidden
                    rounded-xl p-3 sm:p-4
                    border ${style.border} ${style.bg}
                    hover:shadow-md transition-all duration-300
                `}
                >
                {/* 装饰性巨型水印符号 */}
                <div className={`
                    absolute -right-2 -bottom-5 text-[4.5rem] font-black leading-none opacity-25 
                    select-none pointer-events-none transform -rotate-6 
                    ${style.symbolColor}
                `} style={{fontFamily: 'Arial, sans-serif'}}>
                    {style.symbol}
                </div>
                
                {/* 内容区域 */}
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                        <span className={`text-sm font-bold tracking-tight ${style.text}`}>
                            {item.label}
                        </span>
                        {item.color && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm ${style.text} font-bold`}>
                                {item.color}
                            </span>
                        )}
                    </div>

                    <div className="flex items-baseline gap-1 mt-1">
                        <span className={`text-2xl sm:text-3xl font-black tracking-tighter ${style.value} font-mono-nums`}>
                            {item.value}
                        </span>
                        <span className={`text-xs font-semibold opacity-70 ${style.text} transform translate-y-[-2px]`}>
                            {item.subValue}
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