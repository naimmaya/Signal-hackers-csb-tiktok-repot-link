import React, { useState } from 'react';
import { X, Phone, MessageSquare, Send, Copy, Check, ExternalLink, ShieldCheck, Headphones } from 'lucide-react';

interface HelpLineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, title: string) => void;
}

export const HelpLineModal: React.FC<HelpLineModalProps> = ({
  isOpen,
  onClose,
  onCopyText,
}) => {
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);

  if (!isOpen) return null;

  const whatsappNumber = '01679164271';
  const whatsappInternational = '+8801679164271';
  const whatsappUrl = `https://wa.me/8801679164271?text=${encodeURIComponent('Hello Signal Hackers CSB, I need help with TikTok report and additional text.')}`;
  
  const telegramUsername = '@Signalhackers';
  const telegramClean = 'Signalhackers';
  const telegramUrl = `https://t.me/${telegramClean}`;

  const handleCopyWhatsapp = () => {
    onCopyText(whatsappNumber, 'WhatsApp Number Copied');
    setCopiedWhatsapp(true);
    setTimeout(() => setCopiedWhatsapp(false), 2000);
  };

  const handleCopyTelegram = () => {
    onCopyText(telegramUsername, 'Telegram Username Copied');
    setCopiedTelegram(true);
    setTimeout(() => setCopiedTelegram(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-emerald-500/40 rounded-xl shadow-2xl p-5 sm:p-6 my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Signal Hackers CSB Help Line
              </h3>
              <p className="text-xs text-emerald-400">
                সরাসরি আমাদের সাথে যোগাযোগ ও সাপোর্ট হেল্পলাইন
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Close helpline modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto space-y-4 py-4 text-xs">
          
          <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-900/40 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-slate-300 leading-relaxed text-[11.5px]">
              টিকটক আইডি ব্যান, আনব্যান আপিল, কপিরাইট স্ট্রাইক বা অ্যাডিশনাল টেক্সট তৈরিতে যেকোনো জরুরি সহায়তার জন্য সরাসরি হোয়াটসঅ্যাপ অথবা টেলিগ্রামে মেসেজ দিন।
            </p>
          </div>

          {/* WhatsApp Channel Card */}
          <div className="p-4 bg-slate-950/80 border border-emerald-500/30 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>WhatsApp Help Line</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                      Active
                    </span>
                  </h4>
                  <p className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                    {whatsappNumber} <span className="text-slate-500">({whatsappInternational})</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <button
                onClick={handleCopyWhatsapp}
                className="py-2 px-3 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy WhatsApp Number"
              >
                {copiedWhatsapp ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedWhatsapp ? 'Copied!' : 'Copy Number'}</span>
              </button>
            </div>
          </div>

          {/* Telegram Channel Card */}
          <div className="p-4 bg-slate-950/80 border border-sky-500/30 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Telegram Support</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 bg-sky-500/20 text-sky-300 rounded border border-sky-500/30">
                      Online
                    </span>
                  </h4>
                  <p className="text-xs font-mono text-sky-400 font-semibold mt-0.5">
                    {telegramUsername}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open in Telegram</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <button
                onClick={handleCopyTelegram}
                className="py-2 px-3 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy Telegram Username"
              >
                {copiedTelegram ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTelegram ? 'Copied!' : 'Copy Username'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-between items-center shrink-0">
          <span className="text-[11px] text-slate-400 font-mono">
            Signal Hackers CSB Official Team
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
