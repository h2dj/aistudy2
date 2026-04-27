import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Database, Users, GraduationCap, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden dsi-grid">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-teal-100">
              <Sparkles className="w-3 h-3" />
              <span>Digital Social Innovation Hub</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-8">
              공익 가치 실현과 <br />
              <span className="text-teal-600 italic">시스템 전환</span>을 위한 <br />
              디지털 혁신 허브
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              기술과 사회 혁신가가 만나 실질적인 변화를 만드는 니치(Niche) 공간.
              활동가의 DX 역량을 높이고, IT 전문가의 기술로 지속 가능한 생태계를 구축합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20">
                플랫폼 살펴보기 <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                파트너 참여 안내
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats / Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          <StatCard
            icon={<Zap className="w-6 h-6 text-amber-500" />}
            title="DX 인프라 지원"
            description="아름다운재단, 비영리IT지원센터 등과 연계한 SW/HW 기부 및 자원 매칭."
            delay={0.2}
          />
          <StatCard
            icon={<Users className="w-6 h-6 text-blue-500" />}
            title="테크포임팩트 LAB"
            description="사이드 프로젝트 및 프로보노 활동을 통한 사회 문제 해결 팀빌딩."
            delay={0.3}
          />
          <StatCard
            icon={<Database className="w-6 h-6 text-purple-500" />}
            title="임팩트 시각화"
            description="오픈 데이터와 시각화를 통한 투명한 성과 공유 및 사회적 영향력 측정."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-8 rounded-3xl glass-card hover:border-teal-500/30 transition-all group"
    >
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
