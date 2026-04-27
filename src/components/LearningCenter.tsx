import { Play, Clock, Star, Trophy, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function LearningCenter() {
  const courses = [
    {
      title: "활동가를 위한 기초 IT 상식",
      category: "기초역량",
      duration: "4시간",
      rating: 4.8,
      students: 1200,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "협업 도구 마스킹 (Notion & Slack)",
      category: "업무도구",
      duration: "6시간",
      rating: 4.9,
      students: 850,
      image: "https://images.unsplash.com/photo-1542641728-6ca359b085f4?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "데이터 기반 홍보 성과 분석",
      category: "마케팅",
      duration: "5시간",
      rating: 4.7,
      students: 620,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="learning" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Learning Center</h2>
            <p className="text-slate-500 text-lg italic">아니 이렇게 쉬운 IT가? 기초부터 실무까지 상시 온라인 교육 플랫폼</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200">
             <div className="flex items-center gap-2 px-4 py-2 border-r border-slate-100">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-sm">Best Platform 2024</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-sm">3,500+ Learners</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-6 shadow-md shadow-slate-200/50">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-6 h-6 text-slate-900 fill-slate-900 translate-x-0.5" />
                   </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-bold tracking-widest uppercase">
                    {course.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                {course.title}
              </h3>
              <div className="flex items-center gap-6 text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {course.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> {course.rating}
                </div>
                <div className="flex items-center gap-1.5">
                   <Users className="w-4 h-4" /> {course.students}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
