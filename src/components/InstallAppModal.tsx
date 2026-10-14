import React from 'react';
import { X, Download, Smartphone, CheckCircle, Apple, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-emerald-500/40 rounded-xl shadow-2xl p-5 sm:p-6 my-8 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                ফোনে অ্যাপ হিসেবে ইনস্টল করুন
              </h3>
              <p className="text-xs text-emerald-400">
                Signal Hackers CSB Official Web App (PWA)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Close install modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="space-y-4 py-4 text-xs text-slate-300">
          
          {/* App Preview Card */}
          <div className="flex items-center gap-3.5 p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg shrink-0 overflow-hidden shadow">
              <img src="/pwa-192x192.png" alt="Signal CSB" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-white truncate">Signal Hackers CSB</h4>
              <p className="text-[11px] text-emerald-400 font-medium">TikTok Report Link &amp; Additional Hub</p>
              <div className="flex items-center gap-2 text-[10.5px] text-slate-400 mt-0.5">
                <span>Android &amp; iOS</span>
                <span>·</span>
                <span className="text-emerald-400">Fast &amp; Offline Ready</span>
              </div>
            </div>
          </div>

          {/* If already installed */}
          {isInstalled ? (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-lg flex items-center gap-2.5 text-emerald-300">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>আপনার ফোনে এই অ্যাপটি ইতিমধ্যে ইনস্টল করা আছে!</span>
            </div>
          ) : isInstallable ? (
            /* Direct Install Button for Android/Chrome */
            <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-3">
              <p className="text-slate-200 leading-relaxed">
                আপনার ব্রাউজার থেকে সরাসরি ১-ক্লিকে অ্যাপটি ফোনে ডাউনলোড করে ইনস্টল করতে নিচের বাটনে চাপ দিন:
              </p>
              <button
                onClick={handleInstallClick}
                className="w-full py-2.5 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>সরাসরি অ্যাপ ডাউনলোড / ইনস্টল করুন</span>
              </button>
            </div>
          ) : null}

          {/* Android Manual Install Steps */}
          <div className="space-y-2">
            <h5 className="font-semibold text-slate-200 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>অ্যান্ড্রয়েড ফোন (Android / Chrome) এ ইনস্টল করার নিয়ম:</span>
            </h5>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1.5 text-slate-300 text-[11.5px] leading-relaxed">
              <p>১. আপনার ক্রোম (Chrome) ব্রাউজারের একদম উপরে ডানপাশে থাকা <strong>থ্রি ডট (⋮)</strong> মেন্যুতে ক্লিক করুন।</p>
              <p>২. মেন্যু থেকে <strong>"Install app"</strong> অথবা <strong>"Add to Home screen"</strong> (হোম স্ক্রিনে যোগ করুন) অপশনে চাপ দিন।</p>
              <p>৩. এরপর <strong>Install</strong> কনফার্ম করলেই অ্যাপটি সরাসরি আপনার ফোনের অ্যাপ ড্রয়ার ও হোমস্ক্রিনে ডাউনলোড হয়ে যাবে।</p>
            </div>
          </div>

          {/* iPhone / iOS Safari Steps */}
          <div className="space-y-2">
            <h5 className="font-semibold text-slate-200 flex items-center gap-2">
              <Apple className="w-4 h-4 text-slate-200" />
              <span>আইফোন (iPhone / Safari) এ ইনস্টল করার নিয়ম:</span>
            </h5>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1.5 text-slate-300 text-[11.5px] leading-relaxed">
              <p>১. সাফারি (Safari) ব্রাউজারের নিচে থাকা <strong>Share (শেয়ার)</strong> বাটনে চাপ দিন।</p>
              <p>২. কিছুটা নিচে স্ক্রোল করে <strong>"Add to Home Screen"</strong> নির্বাচন করুন।</p>
              <p>৩. উপরে ডানপাশে <strong>Add</strong> বাটনে ট্যাপ করলেই অ্যাপটি সরাসরি হোমস্ক্রিনে চলে আসবে।</p>
            </div>
          </div>

          {/* App Advantages */}
          <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-lg text-[11px] text-slate-400 space-y-1">
            <span className="text-emerald-400 font-semibold block">অ্যাপের বিশেষ সুবিধাসমূহ:</span>
            <ul className="list-disc list-inside space-y-0.5">
              <li>ফোনে কোনো র‍্যাম বা অতিরিক্ত স্টোরেজ দখল করবে না (খুবই হালকা সাইজ)।</li>
              <li>ব্রাউজার অ্যাড্রেস বার ছাড়াই ফুল-স্ক্রিন অ্যাপ হিসেবে চলবে।</li>
              <li>ইন্টারনেট স্লো থাকলেও অফলাইন ক্যাশ দিয়ে সব রিপোর্ট স্ক্রিপ্ট দ্রুত কপি করা যাবে।</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
          <span className="text-[11px] text-slate-400 font-mono">
            SignalCSB PWA
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            বুঝেছি (Close)
          </button>
        </div>

      </div>
    </div>
  );
};
