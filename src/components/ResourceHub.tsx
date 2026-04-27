import { BookOpen, Download, FileText, Share2, Hammer } from 'lucide-react';
import { motion } from 'motion/react';

export default function ResourceHub() {
  const resources = [
    {
      type: "Guidebook",
      title: "비영리 단체를 위한 디지털 전환 가이드 2024",
      author: "비영리IT지원센터",
      tags: ["DX", "Strategy"],
      icon: <FileText className="text-teal-600" />
    },
    {
      type: "Manual",
      title: "M365 도입 및 운영 실무 매뉴얼",
      author: "테크숩코리아",
      tags: ["Infrastructure", "SaaS"],
      icon: <Hammer className="text-blue-600" />
    },
    {
      type: "Archive",
      title: "공익활동 IT 인프라 지원사업 결과 공유회 자료",
      author: "아름다운재단",
      tags: ["Case Study", "Impact"],
      icon: <BookOpen className="text-purple-600" />
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 italic underline decoration-teal-500/30 underline-offset-8">
            Resource Hub
          </h2>
          <p className="text-slate-500 text-lg">
            활동가와 조직의 성장을 돕는 검증된 IT 가이드북과 아카이브 자료를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col h-full items-start"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                {res.icon}
              </div>
              <div className="flex gap-2 mb-4">
                {res.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-slate-200 rounded-md text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-display font-bold text-slate-800 mb-4 flex-grow tracking-tight leading-tight">
                {res.title}
              </h3>
              <div className="flex items-center justify-between w-full pt-6 border-t border-slate-200">
                <span className="text-sm font-medium text-slate-400">{res.author}</span>
                <div className="flex gap-3">
                  <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 text-slate-400" />
                  </button>
                  <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all">
                    <Download className="w-3 h-3" /> PDF 가이드
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="bg-white border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all">
                모든 자원 보기
            </button>
        </div>
      </div>
    </section>
  );
}
