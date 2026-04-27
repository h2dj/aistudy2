import { motion } from 'motion/react';
import { Terminal, Users, Cpu, Rocket, Plus } from 'lucide-react';

export default function CollaborationLab() {
  const projects = [
    {
      title: "환경 보호 데이터 오픈 대시보드",
      team: "그린이노베이터 X 테크포임팩트",
      status: "매칭완료",
      desc: "기부 데이터와 탄소 배출량을 분석하여 투명하게 공개하는 인터랙티브 웹 개발.",
      tags: ["D3.js", "React", "Social Data"]
    },
    {
      title: "활동가 전용 AI 비서 봇",
      team: "자유모집중",
      status: "기획완료",
      desc: "LLM을 활용하여 공익 법인 가이드라인과 정관을 실시간으로 상담해주는 챗봇.",
      tags: ["GPT-4", "DX", "Open Source"]
    }
  ];

  return (
    <section id="lab" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100/50 rounded-full blur-3xl -z-10" />
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-8">
              Collaboration <br />
              <span className="text-teal-600 italic">Labs</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              IT 전문가와 사회 혁신가가 팀을 이뤄 기술 솔루션을 개발합니다. 
              6개월간의 집중 프로젝트 랩을 통해 기술의 사회적 임팩트를 실험하고 공유합니다.
            </p>
            
            <div className="space-y-6">
              <FeatureItem 
                icon={<Terminal className="w-5 h-5 text-teal-600" />}
                title="생산자 조합원 네트워크"
                desc="공동체IT 사회적협동조합 등 전문가 그룹과 직접 연결을 지원합니다."
              />
              <FeatureItem 
                icon={<Users className="w-5 h-5 text-blue-600" />}
                title="사이드 프로젝트 매칭"
                desc="기술로 사회 공헌을 하고 싶은 개발자들과 프로젝트를 팀빌딩합니다."
              />
            </div>

            <button className="mt-12 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all">
              <Plus className="w-5 h-5" /> 프로젝트 제안하기
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-slate-50 rounded-[3rem] -rotate-2 -z-10" />
            <div className="space-y-6">
              {projects.map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      proj.status === '매칭완료' ? 'bg-teal-50 text-teal-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {proj.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{proj.title}</h3>
                  <p className="text-sm font-bold text-teal-600 mb-4">{proj.team}</p>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {proj.desc}
                  </p>
                  <div className="flex gap-2">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-display font-bold text-slate-800 mb-1">{title}</h4>
        <p className="text-slate-500 text-sm">{desc}</p>
      </div>
    </div>
  );
}
