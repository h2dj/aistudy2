import { motion } from 'motion/react';
import { BarChart3, PieChart, Activity, Globe2, TrendingUp } from 'lucide-react';

export default function ImpactBoard() {
  return (
    <section id="impact" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:sticky lg:top-32 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs font-bold uppercase mb-6 border border-teal-500/20">
              <Activity className="w-3 h-3" />
              <span>DSI Impact Analysis 2024</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
              데이터로 증명하는 <br />
              <span className="text-teal-400">사회적 가치</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              오픈 스펜딩(Open Spending) 원칙에 따라 공익 활동의 성과와 예산 집행을 
              투명하게 공개합니다. IA4SI 방법론을 적용하여 플랫폼의 영향력을 지수화합니다.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
               <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest block mb-2">Impact Index</span>
                  <span className="text-3xl font-display font-bold text-white tracking-tighter">84.5 <span className="text-sm text-teal-400">pts</span></span>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full mt-4 overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '84.5%' }}
                        className="h-full bg-teal-500" 
                     />
                  </div>
               </div>
               <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest block mb-2">Transparency</span>
                  <span className="text-3xl font-display font-bold text-white tracking-tighter">99.2 <span className="text-sm text-blue-400">%</span></span>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full mt-4 overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '99.2%' }}
                        className="h-full bg-blue-500" 
                     />
                  </div>
               </div>
            </div>
          </div>

          <div className="w-full space-y-8">
            {/* Visual Board Mockup */}
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-[2.5rem] p-10 shadow-2xl">
              <div className="flex items-center justify-between mb-12">
                 <h3 className="text-xl font-display font-bold text-white flex items-center gap-3">
                   <BarChart3 className="w-5 h-5 text-teal-400" />
                   실시간 리소스 투입 현황
                 </h3>
                 <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                 </div>
              </div>

              <div className="flex items-end gap-4 h-64 mb-10">
                {[40, 65, 45, 90, 75, 85, 100, 60, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05 }}
                    className="flex-grow bg-gradient-to-t from-teal-600/40 to-teal-400 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}%
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-6 bg-white/5 rounded-2xl flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border-4 border-teal-500 border-r-transparent animate-spin-slow flex items-center justify-center">
                       <TrendingUp className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                       <span className="text-slate-400 text-xs font-bold uppercase tracking-widest block mb-1">성장지수</span>
                       <span className="text-xl font-bold text-white">+24.5% YoY</span>
                    </div>
                 </div>
                 <div className="p-6 bg-white/5 rounded-2xl flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-b-transparent animate-pulse-slow flex items-center justify-center">
                       <Globe2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                       <span className="text-slate-400 text-xs font-bold uppercase tracking-widest block mb-1">오픈액세스</span>
                       <span className="text-xl font-bold text-white">Full Access</span>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="flex justify-center">
               <button className="text-slate-500 text-sm font-bold flex items-center gap-2 hover:text-white transition-colors">
                 IA4SI 측정 방법론 및 소스 데이터 확인하기 <TrendingUp className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
