import React, { useState } from 'react';
import { X, Mail, Send, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

import { ReportItem } from '../types/report';

interface EmailDispatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, title: string) => void;
  initialItem?: ReportItem | null;
}

export const EmailDispatcherModal: React.FC<EmailDispatcherModalProps> = ({
  isOpen,
  onClose,
  onCopyText,
  initialItem,
}) => {
  const [targetEmail, setTargetEmail] = useState('feedback@tiktok.com');
  const [targetHandle, setTargetHandle] = useState('');
  const [subject, setSubject] = useState('Urgent Community Violation Report - Serious Safety Non-Compliance');
  const [bodyText, setBodyText] = useState(`Dear TikTok Trust & Safety and Legal Review Team,

I am writing to formally submit an urgent escalation regarding a severe violation of TikTok Community Guidelines.

Target Account: @[TARGET_USERNAME]
Profile URL: https://www.tiktok.com/@[TARGET_USERNAME]
Timestamp: ${new Date().toISOString().substring(0, 10)}

This profile is actively propagating prohibited media, harassment, or unlawful content posing immediate risks to platform users. We demand an expedited manual audit by human safety reviewers and appropriate permanent enforcement action.

Evidence and documentation have been cataloged and can be provided upon request.

Respectfully,
Concerned Community Member / Safety Reporter`);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);

  React.useEffect(() => {
    if (initialItem) {
      if (initialItem.id.includes('privacy')) {
        setTargetEmail('privacy@tiktok.com');
      } else if (initialItem.id.includes('copyright')) {
        setTargetEmail('legal@tiktok.com');
      } else {
        setTargetEmail('feedback@tiktok.com');
      }
      setSubject(`Official Escalation: ${initialItem.title} - TikTok Legal Review`);
      setBodyText(initialItem.additionalText);
    }
  }, [initialItem, isOpen]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    onCopyText(targetEmail, 'TikTok Email Copied');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyBody = () => {
    onCopyText(bodyText, 'Email Body Copied');
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };

  const formattedBody = targetHandle.trim()
    ? bodyText.replaceAll('@[TARGET_USERNAME]', targetHandle.trim().startsWith('@') ? targetHandle.trim() : `@${targetHandle.trim()}`)
    : bodyText;

  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-emerald-500/40 rounded-xl shadow-2xl p-5 sm:p-6 my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Official TikTok Email Dispatcher
              </h3>
              <p className="text-xs text-emerald-400">
                টিকটকের অফিশিয়াল ইমেইলে সরাসরি অভিযোগ পাঠানোর টুল
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
        <div className="overflow-y-auto space-y-3.5 py-4 text-xs">
          
          <div className="p-3 bg-emerald-950/20 border border-emerald-900/30 rounded-lg flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-slate-300 leading-relaxed text-[11.5px]">
              টিকটকের অফিসিয়াল ইমেইল ডেস্কে ইমেইল পাঠালে সরাসরি টিকেট তৈরি হয়। নিচের ফিল্ডগুলো চেক করে ১-ক্লিকে আপনার ইমেইল অ্যাপ (Gmail / Outlook) থেকে সেন্ড করতে পারেন।
            </p>
          </div>

          {/* Department Selection */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Select Official TikTok Department Email:
            </label>
            <div className="flex items-center gap-2">
              <select
                value={targetEmail}
                onChange={(e) => setTargetEmail(e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-950 border border-slate-700 rounded text-white font-mono focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="feedback@tiktok.com">feedback@tiktok.com (General Safety & Violations)</option>
                <option value="privacy@tiktok.com">privacy@tiktok.com (Privacy & Doxxing Removal)</option>
                <option value="legal@tiktok.com">legal@tiktok.com (Copyright & DMCA Notices)</option>
                <option value="reports@tiktok.com">reports@tiktok.com (Escalated Safety Takedowns)</option>
              </select>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-slate-200 transition-colors flex items-center gap-1.5 shrink-0"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Target Handle */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Target TikTok Handle:
            </label>
            <input
              type="text"
              placeholder="@username"
              value={targetHandle}
              onChange={(e) => setTargetHandle(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Email Subject Line:
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Body */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-slate-300 font-semibold">
                Email Body Text:
              </label>
              <button
                type="button"
                onClick={handleCopyBody}
                className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
              >
                {copiedBody ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedBody ? 'Copied Body' : 'Copy Body Text'}</span>
              </button>
            </div>
            <textarea
              rows={6}
              value={formattedBody}
              onChange={(e) => setBodyText(e.target.value)}
              className="w-full p-2.5 bg-black/80 border border-slate-800 rounded font-mono text-[11px] text-slate-200 leading-relaxed focus:outline-none focus:border-emerald-500"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
          <span className="text-[11px] font-mono text-slate-400">
            Recipient: {targetEmail}
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
            <a
              href={mailtoUrl}
              className="w-full sm:w-auto px-5 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded shadow transition-colors flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open in Email App</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
