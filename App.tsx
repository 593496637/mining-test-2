import React from 'react';
import { mineData, mineralSummary, saltLakeSummary, miningLicenses, explorationLicenses } from './data';
import MineCard from './components/MineCard';
import SummarySection from './components/SummarySection';
import LicenseSection from './components/LicenseSection';
import { Sparkles, Layers } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-12 bg-[#f8fafc] selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Immersive Header - Simplified as requested */}
      <div className="pt-8 pb-4 text-center relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-blue-100/50 blur-[60px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
             <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                矿产资源
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ml-2">
                    数据概览
                </span>
             </h1>
             <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-3 shadow-sm"></div>
             <p className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-2">2025 Q3 Report</p>
         </div>
      </div>

      <div className="px-3 space-y-6 max-w-3xl mx-auto">
        
        {/* 1. Main Resource Grid */}
        <section className="transform transition-all">
             {/* Header - Updated to Deep Indigo/Blue Gradient (No longer black) */}
            <div className={`
                relative rounded-t-2xl overflow-hidden shadow-lg z-10
                bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 border-b border-indigo-500/30
                p-4 flex items-center justify-between
            `}>
                 {/* Pattern Overlay */}
                 <div className="absolute inset-0 opacity-20" 
                      style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)`,
                          backgroundSize: '20px 20px'
                      }} 
                 ></div>

                <div className="relative z-10 flex items-center gap-4">
                    <div className="p-2 rounded-xl backdrop-blur-md border shadow-inner bg-indigo-500/20 text-indigo-200 border-indigo-400/20">
                        <Layers className="w-5 h-5 text-indigo-100" />
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-white tracking-wide drop-shadow-md">25年第三季度末保有资源量</h3>
                    </div>
                </div>
            </div>

            {/* Body Container */}
            <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 sm:p-5 relative overflow-hidden">
                {/* Subtle grid background */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                     style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
                </div>

                <div className="grid grid-cols-2 gap-3 relative z-10">
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
        <section className="space-y-6">
            <LicenseSection group={miningLicenses} />
            <LicenseSection group={explorationLicenses} />
        </section>

        <footer className="pt-6 pb-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-400 text-[10px] font-bold tracking-widest uppercase opacity-70">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>Resource Intelligence</span>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default App;