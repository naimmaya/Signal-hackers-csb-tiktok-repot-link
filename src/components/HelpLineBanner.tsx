import React, { useState } from 'react';
import { MessageSquare, Send, Copy, Check, ExternalLink, Headphones, PhoneCall } from 'lucide-react';

interface HelpLineBannerProps {
  onCopyText: (text: string, title: string) => void;
  onOpenHelplineModal?: () => void;
}

export const HelpLineBanner: React.FC<HelpLineBannerProps> = ({ onCopyText, onOpenHelplineModal }) => {
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);

  const whatsappNumber = '01679164271';
  const whatsappUrl = 'https://wa.me/8801679164271?text=Hello%20Signal%20Hackers%20CSB,%20I%20need%20TikTok%20Report%20Support';
  const telegramUsername = '@Signalhackers';
  const telegramUrl = 'https://t.me/Signalhackers';

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
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-sky-950/40 border border-emerald-500/30 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Left info */}
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Signal Hackers CSB Official Help Line
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  24/7 SUPPORT
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                যেকোনো সমস্যা, কাস্টম টিকটক রিপোর্ট বা জরুরি সহায়তার জন্য সরাসরি যোগাযোগ করুন
              </p>
            </div>
          </div>

          {/* Right Contact Action Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
            
            {/* WhatsApp Pill */}
            <div className="flex items-center bg-slate-950/90 border border-emerald-500/40 rounded-lg overflow-hidden p-1 shadow-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:text-white hover:bg-emerald-500/20 rounded transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {whatsappNumber}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <button
                onClick={handleCopyWhatsapp}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
                title="Copy WhatsApp Number"
              >
                {copiedWhatsapp ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Telegram Pill */}
            <div className="flex items-center bg-slate-950/90 border border-sky-500/40 rounded-lg overflow-hidden p-1 shadow-sm">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-300 hover:text-white hover:bg-sky-500/20 rounded transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram: {telegramUsername}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <button
                onClick={handleCopyTelegram}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
                title="Copy Telegram Username"
              >
                {copiedTelegram ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
