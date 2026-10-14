import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageSquare, Send, Globe, Smartphone } from 'lucide-react';

interface ShareAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, title: string) => void;
}

export const ShareAppModal: React.FC<ShareAppModalProps> = ({
  isOpen,
  onClose,
  onCopyText,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-pre-iebeilt4rx7isj2pi7hfzi-933770610562.europe-west2.run.app';
  const shareTitle = 'Signal Hackers CSB - TikTok Report Links & Additional Texts';
  const shareText = `Signal Hackers CSB - TikTok All Report Links & Additional Text Portal:\n${currentUrl}\nWhatsApp Support: 01679164271 | Telegram: @Signalhackers`;

  const handleCopyLink = () => {
    onCopyText(currentUrl, 'Website Link Copied');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: 'TikTok Report Links & Additional Text Portal',
          url: currentUrl,
        });
      } catch {
        // ignore share cancellation
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-md bg-slate-900 border border-emerald-500/40 rounded-xl shadow-2xl p-5 sm:p-6 my-8 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Share Website Link
              </h3>
              <p className="text-xs text-emerald-400">
                এই ওয়েবসাইটের লিংক সবার সাথে শেয়ার করুন
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

        {/* Content */}
        <div className="space-y-4 py-4 text-xs">
          
          <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg">
            <span className="text-[11px] font-mono text-slate-400 block mb-1">
              Live Website URL (পাবলিক ওয়েব লিংক):
            </span>
            <div className="p-2 bg-black/60 rounded border border-slate-800 text-emerald-400 font-mono text-xs break-all select-all">
              {currentUrl}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={handleCopyLink}
              className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow ${
                copied
                  ? 'bg-emerald-400 text-slate-950'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Link Copied!' : 'Copy Web Link'}</span>
            </button>

            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button
                onClick={handleNativeShare}
                className="py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Share from Phone</span>
              </button>
            )}
          </div>

          {/* Share on Social Platforms */}
          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <span className="text-[11px] text-slate-400 font-medium block">
              Direct Share on Messaging Apps:
            </span>

            <div className="flex items-center gap-2">
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-md bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Share on WhatsApp</span>
              </a>

              <a
                href={telegramShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-md bg-sky-950/50 hover:bg-sky-900/60 border border-sky-500/40 text-sky-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Share on Telegram</span>
              </a>
            </div>
          </div>

          <div className="p-2.5 rounded bg-slate-950/50 border border-slate-800 text-[11px] text-slate-400 leading-normal">
            💡 যে কেউ যেকোনো ব্রাউজার (Chrome, Safari, Firefox) বা মোবাইল ও কম্পিউটার থেকে এই লিংকে ক্লিক করে সরাসরি সাইটটি ব্যবহার করতে পারবে।
          </div>

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
