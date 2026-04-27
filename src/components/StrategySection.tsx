import { motion } from 'motion/react';
import { Target, Users, Globe, ExternalLink } from 'lucide-react';

export default function StrategySection() {
  const strategies = [
    {
      title: "협력적 경제 실현",
      description: "비영리 단체 간의 자원 공유와 IT 자산의 순환을 통해 공동체 기반의 경제 모델을 강화합니다.",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "개방형 민주주의",
      description: "시민참여형 디지털 플랫폼을 통해 의사결정 과정을 투명하게 공개하고 활발한 참여를 유도합니다.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "시스템 전환의 니치",
      description: "기존의 틀을 벗어나 사회혁신 실험이 가능하도록 기술적 인프라와 안전망을 제공하는 거점 역할을 수행합니다.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              시스템 전환을 위한<br />
              <span className="text-teal-400 font-mono tracking-widest text-2xl lg:text-3xl block mt-2">DSI STRATEGY 2030</span>
            </h2>
            <p className="text-slate-400 text-lg">
              단순한 기술 도입을 넘어, 디지털 사회 혁신 사례처럼 새로운 사회 모델을 창출하는 기반을 구축합니다.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="flex flex-col items-center">
                <span className="text-4xl font-display font-bold text-teal-400">120+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Active Partners</span>
             </div>
             <div className="w-px h-12 bg-slate-800" />
             <div className="flex flex-col items-center">
                <span className="text-4xl font-display font-bold text-teal-400">45k+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Citizens Engaged</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all flex flex-col items-start gap-8"
            >
              <div className={`p-4 rounded-2xl ${strategy.color}`}>
                {strategy.icon}
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">{strategy.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg italic">
                  "{strategy.description}"
                </p>
              </div>
              <button className="flex items-center gap-2 text-teal-400 font-bold group">
                자세히 보기 <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
