import React from 'react';
import { mineData, mineralSummary, saltLakeSummary, miningLicenses, explorationLicenses } from './data';
import MineCard from './components/MineCard';
import SummarySection from './components/SummarySection';
import LicenseSection from './components/LicenseSection';
import { Sparkles, Layers, Activity } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-12 bg-slate-50">
      {/* Immersive Header Background Area - Simplified & Compact */}
      <div className="relative pt-6 pb-8 px-5 bg-white rounded-b-3xl shadow-lg shadow-slate-200/40 mb-6 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl -ml-8 -mb-8 pointer-events-none"></div>

        <div className="relative z-10 flex items-end justify-between">
            <div>
                <div className="flex items-center gap-2 mb-1.5 opacity-60">
                     <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">2025 Q3 Report</span>
                </div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                    矿产资源 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">驾驶舱</span>
                </h1>
            </div>
            <div className="bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-1.5 shadow-sm">
                <Activity className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-xs font-bold text-slate-700 font-mono-nums">09.30</span>
            </div>
        </div>
      </div>

      <div className="px-4 space-y-8">
        
        {/* 1. Main Resource Grid with Grand Header Style */}
        <section>
             {/* Header - Badge removed as requested */}
            <div className="relative rounded-t-2xl overflow-hidden shadow-md bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center justify-between">
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px'}}></div>
                <div className="relative z-10 flex items-center gap-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg shadow-inner">
                        <Layers className="w-5 h-5 text-white opacity-90" />
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-white tracking-wide">25年第三季度末保有资源量</h3>
                        <p className="text-[10px] text-white/80 font-medium uppercase tracking-wider">Core Assets</p>
                    </div>
                </div>
            </div>

            {/* Body Container */}
            <div className="bg-slate-50/50 rounded-b-2xl border-x border-b border-slate-200 shadow-sm p-3 md:p-4">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {mineData.map((mine) => (
                        <MineCard key={mine.id} data={mine} />
                    ))}
                </div>
            </div>
        </section>

        {/* 2. Mineral Summary */}
        <SummarySection 
            title="25年第三季度末保有资源量汇总" 
            items={mineralSummary} 
            type="mineral"
        />

        {/* 3. Salt Lake Summary */}
        <SummarySection 
            title="25年第三季度末盐湖保有资源量汇总" 
            items={saltLakeSummary} 
            type="salt"
        />

        {/* 4. Licenses */}
        <section className="space-y-8">
            <LicenseSection group={miningLicenses} />
            <LicenseSection group={explorationLicenses} />
        </section>

        <footer className="pt-4 pb-8 text-center">
            <div className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-bold tracking-widest uppercase opacity-50">
                <Sparkles className="w-3 h-3" />
                <span>Resource Intelligence</span>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default App;