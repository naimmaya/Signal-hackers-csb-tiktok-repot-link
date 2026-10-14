import React, { useState } from 'react';
import { X, CheckSquare, Square, ShieldCheck, AlertCircle } from 'lucide-react';

interface EvidenceChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EvidenceChecklistModal: React.FC<EvidenceChecklistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  if (!isOpen) return null;

  const toggleCheck = (idx: number) => {
    setChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const items = [
    {
      title: 'সঠিক টার্গেট ইউজারনেম (@Handle) ও প্রোফাইল লিংক',
      desc: 'টার্গেট আইডির স্পেলিং ও বায়ো চেক করে প্রোফাইল লিংক বা ভিডিও লিংক কপি করে রাখুন।'
    },
    {
      title: 'ভিডিওর সুনির্দিষ্ট অংশ বা টাইমস্ট্যাম্প চিহ্নিতকরণ',
      desc: 'ভিডিওর কত মিনিটে বা সেকেন্ডে পলিসি লঙ্ঘন করা হয়েছে (যেমন: 0:15) তা অতিরিক্ত বিবরণে উল্লেখ করুন।'
    },
    {
      title: 'স্ক্রিনশট বা প্রামাণ্য ছবি সংগ্রহ',
      desc: 'যদি ডক্সিং, ফেক আইডি বা প্রাইভেসি লঙ্ঘন হয়, তবে প্রমাণের স্ক্রিনশট আগেই মোবাইলের গ্যালারিতে সেভ রাখুন।'
    },
    {
      title: 'সঠিক পলিসি ক্যাটাগরি নির্বাচন (Accurate Category)',
      desc: 'ভুল ক্যাটাগরি দিলে বট স্বয়ংক্রিয়ভাবে নো-ভায়োলেশন দেয়। উপযুক্ত ফোল্ডার থেকে সঠিক কারণটি বেছে নিন।'
    },
    {
      title: 'অ্যাডিশনাল টেক্সট কপি ও পেস্ট (Additional Details)',
      desc: 'আমাদের সাইট থেকে সংশ্লিষ্ট ফোল্ডারের অতিরিক্ত বিবরণী কপি করে টিকটকের ডেসক্রিপশন বক্সে পেস্ট করুন।'
    },
    {
      title: 'কেস লগ ও ট্র্যাক করুন (Incident Tracker)',
      desc: 'রিপোর্ট দেওয়ার পর আমাদের সাইটের Incident Tracker-এ আইডিটি যুক্ত করে রাখুন যাতে ফলাফল ট্র্যাক করা যায়।'
    }
  ];

  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-emerald-500/40 rounded-xl shadow-2xl p-5 sm:p-6 my-8 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Pre-Report Evidence Checklist
              </h3>
              <p className="text-xs text-emerald-400">
                রিপোর্ট সাবমিট করার আগে প্রস্তুতির চেকলিস্ট
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="pt-3 pb-2 text-xs">
          <div className="flex justify-between items-center mb-1 text-slate-300 font-medium">
            <span>প্রস্তুতি সম্পন্ন:</span>
            <span className="font-mono text-emerald-400 font-bold">{completedCount} / {items.length}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-400 transition-all duration-300" 
              style={{ width: `${(completedCount / items.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-2.5 py-3 text-xs">
          {items.map((it, idx) => (
            <div
              key={idx}
              onClick={() => toggleCheck(idx)}
              className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                checked[idx]
                  ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200'
                  : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="mt-0.5 text-emerald-400 shrink-0">
                {checked[idx] ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-600" />}
              </div>
              <div className="min-w-0">
                <h5 className={`font-semibold text-xs ${checked[idx] ? 'text-emerald-300 line-through opacity-80' : 'text-slate-100'}`}>
                  {it.title}
                </h5>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
          <button
            onClick={() => setChecked({})}
            className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
          >
            Reset Checklist
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
