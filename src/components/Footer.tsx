import { Github, Twitter, Mail, ExternalLink, Cpu } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-800">
                DSI <span className="text-teal-600">HUB</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              공익 가치 실현과 시스템 전환을 위한 디지털 사회혁신 허브. 
              기술의 힘으로 비영리 단체의 가능성을 확장합니다.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Github className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">플랫폼</h4>
            <ul className="space-y-4">
              <FooterLink href="#resources">자원 센터</FooterLink>
              <FooterLink href="#learning">학습 플랫폼</FooterLink>
              <FooterLink href="#lab">협업 랩</FooterLink>
              <FooterLink href="#impact">임팩트 데이터</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">파트너</h4>
            <ul className="space-y-4">
              <FooterLink href="#">아름다운재단</FooterLink>
              <FooterLink href="#">비영리IT지원센터</FooterLink>
              <FooterLink href="#">테크숩코리아</FooterLink>
              <FooterLink href="#">공동체IT 협동조합</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">지원사업 안내</h4>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
               <p className="text-xs font-bold text-teal-600 mb-2 uppercase tracking-widest">NOW OPEN</p>
               <h5 className="text-sm font-bold text-slate-800 mb-3 leading-tight">2024 공익활동 IT 인프라 지원사업</h5>
               <button className="text-xs font-bold flex items-center gap-2 text-slate-900 group">
                 신청하러 가기 <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 gap-6">
          <p className="text-xs text-slate-400 font-medium">
            © 2024 DSI HUB. 혁신을 통한 시스템 전환의 니치를 구축합니다.
          </p>
          <div className="flex gap-8 text-xs text-slate-400 font-medium font-mono">
            <span>PRIVACY POLICY</span>
            <span>TERMS OF SERVICE</span>
            <span>LOC: SEOUL, KR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-slate-500 text-sm hover:text-teal-600 transition-colors font-medium">
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all shadow-sm">
      {icon}
    </a>
  );
}
