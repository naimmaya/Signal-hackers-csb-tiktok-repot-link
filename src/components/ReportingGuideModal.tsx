import React from 'react';
import { X, BookOpen, CheckCircle, AlertTriangle, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';

interface ReportingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportingGuideModal: React.FC<ReportingGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-5 sm:p-6 my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                TikTok Report &amp; Additional Text Guide
              </h3>
              <p className="text-xs text-emerald-400">
                টিকটকে সঠিক নিয়মে রিপোর্ট করার ও অ্যাডিশনাল টেক্সট ব্যবহারের নির্দেশিকা
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto space-y-5 py-4 text-xs text-slate-300">
          
          {/* Why Additional Text Matters */}
          <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
            <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>কেন অ্যাডিশনাল টেক্সট (Additional Text) এত গুরুত্বপূর্ণ?</span>
            </h4>
            <p className="leading-relaxed text-slate-300">
              টিকটকে সাধারণ রিপোর্ট দিলে এআই (AI বট) স্বয়ংক্রিয়ভাবে বেশিরভাগ সময় "No Violation Found" দেখায়। কিন্তু যখন আপনি আমাদের প্রস্তুত করা <strong>প্রফেশনাল আইনি ও পলিসি ভিত্তিক অতিরিক্ত টেক্সট (Additional Details)</strong> যুক্ত করেন, তখন রিপোর্টটি স্বয়ংক্রিয় বট এড়িয়ে টিকটকের <strong>হিউম্যান মডারেশন ও ট্রাস্ট অ্যান্ড সেফটি টিমে</strong> চলে যায় এবং তারা দ্রুত অ্যাকাউন্ট ব্যান বা ভিডিও নামিয়ে দেয়।
            </p>
          </div>

          {/* Method 1: In App */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center font-mono text-[11px]">
                1
              </span>
              <span>পদ্ধতি ১: টিকটক অ্যাপের মাধ্যমে রিপোর্ট (In-App Report)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans">
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg">
                <span className="font-mono text-emerald-400 font-bold block mb-1">ধাপ ১:</span>
                টার্গেট টিকটক আইডির প্রোফাইলে যান এবং উপরের ডানপাশে থাকা <strong>থ্রি ডট (...) অথবা শেয়ার</strong> বাটনে চাপ দিন।
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg">
                <span className="font-mono text-emerald-400 font-bold block mb-1">ধাপ ২:</span>
                <strong>Report (রিপোর্ট)</strong> অপশনে ক্লিক করে উপযুক্ত কারণ (যেমন: Impersonation, Minor Safety, Harassment) নির্বাচন করুন।
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg">
                <span className="font-mono text-emerald-400 font-bold block mb-1">ধাপ ৩:</span>
                নিচে <strong>"Describe the issue" বা "Additional details"</strong> বক্স পাবেন। আমাদের সাইট থেকে কপি করা টেক্সট সেখানে পেস্ট করুন।
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg">
                <span className="font-mono text-emerald-400 font-bold block mb-1">ধাপ ৪:</span>
                যদি স্ক্রিনশট বা প্রমাণ থাকে তা আপলোড করে <strong>Submit</strong> চাপুন। ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ফলাফল পাবেন।
              </div>
            </div>
          </div>

          {/* Method 2: Web Feedback Form */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 flex items-center justify-center font-mono text-[11px]">
                2
              </span>
              <span>পদ্ধতি ২: টিকটক অফিশিয়াল ওয়েব ফর্মের মাধ্যমে (Web Ticket)</span>
            </h4>

            <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-lg space-y-2">
              <p>
                টিকটকের সরাসরি ওয়েব ফর্মের মাধ্যমে অভিযোগ জানালে সবচেয়ে দ্রুত অ্যাকশন পাওয়া যায়:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-1">
                <li>আমাদের সাইটের <strong>"Official Forms"</strong> ফোল্ডার থেকে <em>Global Feedback Form</em> ওপেন করুন।</li>
                <li>আপনার ইমেইল ও টার্গেট ইউজারের ইউজারনেম বসান।</li>
                <li>আমাদের সাইটের <strong>"Copy Additional Text"</strong> দিয়ে পুরো বিবরণটি পেস্ট করুন।</li>
                <li>সাবমিট করলে টিকটক সরাসরি আপনার ইমেইলে টিকেট নাম্বার সহ কনফার্মেশন পাঠাবে।</li>
              </ul>
            </div>
          </div>

          {/* Rules & Warning */}
          <div className="p-3.5 bg-amber-950/20 border border-amber-500/30 rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>সতর্কতা ও নীতিগত ব্যবহারের নিয়মাবলী:</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              এই টুলকিটটি টিকটকে সাইবার নিরাপত্তা, অপ্রাপ্তবয়স্কদের সুরক্ষা, ভুয়া আইডি ও হ্যারাসমেন্ট প্রতিরোধে সহায়তা করার উদ্দেশ্যে নির্মিত (Signal Hackers CSB)। কোনো নিরপরাধ বা সঠিক ব্যবহারকারীর ক্ষতিসাধন করার জন্য ফেক রিপোর্ট দেওয়া টিকটকের টার্মস অব সার্ভিস পরিপন্থী।
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors cursor-pointer"
          >
            বুঝেছি (Got It)
          </button>
        </div>

      </div>
    </div>
  );
};
