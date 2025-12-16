import React from 'react';
import { SummaryItem } from '../types';
import { Layers, Droplets } from 'lucide-react';

interface SummarySectionProps {
  title: string;
  items: SummaryItem[];
  type: 'mineral' | 'salt';
}

// 增强的样式映射系统：定义背景、边框、文字、高亮色及化学符号
const getCardStyle = (label: string, explicitCode?: string) => {
  // 默认样式 (Slate)
  let style = {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    label: 'text-slate-500',
    value: 'text-slate-800',
    badge: 'bg-slate-200 text-slate-600',
    watermark: 'text-slate-200',
    symbol: label.charAt(0) // 默认取首字
  };

  const is = (key: string) => label.includes(key);

  // 1. 贵金属 & 有色金属
  if (is('铜')) {
    style = {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      label: 'text-orange-600/80',
      value: 'text-orange-900',
      badge: 'bg-orange-100 text-orange-700',
      watermark: 'text-orange-200/50',
      symbol: 'Cu'
    };
  } else if (is('金')) {
    style = {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      label: 'text-amber-600/80',
      value: 'text-amber-900',
      badge: 'bg-amber-100 text-amber-700',
      watermark: 'text-amber-200/50',
      symbol: 'Au'
    };
  } else if (is('银')) {
    style = {
      bg: 'bg-slate-100',
      border: 'border-slate-300',
      label: 'text-slate-500',
      value: 'text-slate-700',
      badge: 'bg-slate-200 text-slate-600',
      watermark: 'text-slate-300/50',
      symbol: 'Ag'
    };
  } else if (is('铁')) {
    style = {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      label: 'text-blue-600/80',
      value: 'text-blue-900',
      badge: 'bg-blue-100 text-blue-700',
      watermark: 'text-blue-200/50',
      symbol: 'Fe'
    };
  } else if (is('铅')) {
    style = {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      label: 'text-indigo-600/80',
      value: 'text-indigo-900',
      badge: 'bg-indigo-100 text-indigo-700',
      watermark: 'text-indigo-200/50',
      symbol: 'Pb'
    };
  } else if (is('锌')) {
    style = {
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      label: 'text-cyan-600/80',
      value: 'text-cyan-900',
      badge: 'bg-cyan-100 text-cyan-700',
      watermark: 'text-cyan-200/50',
      symbol: 'Zn'
    };
  } else if (is('钼')) {
    style = {
      bg: 'bg-fuchsia-50',
      border: 'border-fuchsia-200',
      label: 'text-fuchsia-600/80',
      value: 'text-fuchsia-900',
      badge: 'bg-fuchsia-100 text-fuchsia-700',
      watermark: 'text-fuchsia-200/50',
      symbol: 'Mo'
    };
  } else if (is('镍')) {
    style = {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      label: 'text-emerald-600/80',
      value: 'text-emerald-900',
      badge: 'bg-emerald-100 text-emerald-700',
      watermark: 'text-emerald-200/50',
      symbol: 'Ni'
    };
  } else if (is('钒')) {
    style = {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      label: 'text-rose-600/80',
      value: 'text-rose-900',
      badge: 'bg-rose-100 text-rose-700',
      watermark: 'text-rose-200/50',
      symbol: 'V'
    };
  } 
  
  // 2. 盐湖 & 特殊代码覆盖
  if (explicitCode === 'NaCl' || is('柯柯') || is('茶卡')) {
    style = {
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      label: 'text-sky-600/80',
      value: 'text-sky-900',
      badge: 'bg-sky-100 text-sky-700',
      watermark: 'text-sky-200/50',
      symbol: 'NaCl'
    };
  } else if (explicitCode === 'Li' || is('锂') || is('东台')) {
    style = {
      bg: 'bg-lime-50',
      border: 'border-lime-200',
      label: 'text-lime-600/80',
      value: 'text-lime-900',
      badge: 'bg-lime-100 text-lime-700',
      watermark: 'text-lime-200/50',
      symbol: 'Li'
    };
  } else if (explicitCode === 'MgCl2' || is('镁')) {
    style = {
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      label: 'text-violet-600/80',
      value: 'text-violet-900',
      badge: 'bg-violet-100 text-violet-700',
      watermark: 'text-violet-200/50',
      symbol: 'Mg'
    };
  }

  return style;
};

const SummarySection: React.FC<SummarySectionProps> = ({ title, items, type }) => {
  const isMineral = type === 'mineral';

  // 保持 Header 不变
  const theme = isMineral ? {
    headerGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    icon: <Layers className="w-5 h-5 text-blue-100" />,
  } : {
    headerGradient: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    icon: <Droplets className="w-5 h-5 text-cyan-100" />,
  };

  return (
    <section className="mb-8">
      {/* 1. Header Container (保持原有样式) */}
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

      {/* 2. Body Container */}
      <div className="bg-white rounded-b-xl border-x border-b border-slate-200 shadow-sm p-4">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {items.map((item, index) => {
            const style = getCardStyle(item.label, item.color);
            
            return (
                <div 
                key={index}
                className={`
                    relative group overflow-hidden
                    rounded-xl p-4
                    border ${style.border} ${style.bg}
                    transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
                `}
                >
                {/* 巨型水印 - 右下角 */}
                <div className={`
                    absolute -right-1 -bottom-5 text-[5rem] font-black leading-none 
                    select-none pointer-events-none transform -rotate-12
                    ${style.watermark} transition-transform group-hover:scale-110 duration-500
                `} style={{fontFamily: 'Arial, sans-serif'}}>
                    {style.symbol}
                </div>
                
                {/* 内容区域 (相对定位，浮在水印之上) */}
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[80px]">
                    <div className="flex justify-between items-start">
                        <span className={`text-sm font-bold tracking-tight ${style.label}`}>
                            {item.label}
                        </span>
                        {item.color && (
                             <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${style.badge} bg-opacity-80 backdrop-blur-sm`}>
                                {item.color}
                            </span>
                        )}
                    </div>

                    <div className="flex items-baseline gap-1 mt-3">
                        <span className={`text-2xl sm:text-3xl font-black tracking-tighter ${style.value} font-mono-nums drop-shadow-sm`}>
                            {item.value}
                        </span>
                        <span className={`text-xs font-bold ${style.label} opacity-80 transform translate-y-[-2px]`}>
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