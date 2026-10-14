import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Sparkles, Star, ChevronDown, ChevronUp, ShieldAlert, Info, Mail, Clock, FileText } from 'lucide-react';
import { ReportItem } from '../types/report';

interface ReportCardProps {
  item: ReportItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onCopyText: (text: string, title: string) => void;
  onCopyLink: (link: string, title: string) => void;
  onCustomize: (item: ReportItem) => void;
  onOpenEmail?: (item: ReportItem) => void;
  onTrackCase?: (item: ReportItem) => void;
}

export const ReportCard: React.FC<ReportCardProps> = ({
  item,
  isFavorite,
  onToggleFavorite,
  onCopyText,
  onCopyLink,
  onCustomize,
  onOpenEmail,
  onTrackCase,
}) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedBoth, setCopiedBoth] = useState(false);
  const [showBengaliGuide, setShowBengaliGuide] = useState(false);

  const handleCopyText = () => {
    onCopyText(item.additionalText, item.title);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleCopyLink = () => {
    onCopyLink(item.officialLink, item.title);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyBoth = () => {
    const combined = `[TIKTOK REPORT LINK]\n${item.officialLink}\n\n[ADDITIONAL REASON & LEGAL BASIS]\n${item.additionalText}`;
    onCopyText(combined, `${item.title} (Both Link + Text Copied)`);
    setCopiedBoth(true);
    setTimeout(() => setCopiedBoth(false), 2000);
  };

  const getSeverityColor = (sev: 'Critical' | 'High' | 'Medium') => {
    switch (sev) {
      case 'Critical':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      case 'High':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Medium':
      default:
        return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 sm:p-5 hover:border-slate-700 transition-colors">
      {/* Top Header of Card */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-base font-semibold text-slate-100">{item.title}</h4>
            <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${getSeverityColor(item.severity)}`}>
              {item.severity} Priority
            </span>
            {item.estimatedReviewTime && (
              <span className="text-[10.5px] font-mono text-emerald-400/80 bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>{item.estimatedReviewTime}</span>
              </span>
            )}
          </div>
          <p className="text-xs text-emerald-400/90 font-medium">{item.banglaTitle}</p>
        </div>

        {/* Action icons bar */}
        <div className="flex items-center gap-1.5 self-start shrink-0">
          {onOpenEmail && (
            <button
              onClick={() => onOpenEmail(item)}
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2.5 py-1 rounded transition-colors cursor-pointer"
              title="Open Official TikTok Email Composer"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span className="hidden sm:inline">Email Desk</span>
            </button>
          )}

          {onTrackCase && (
            <button
              onClick={() => onTrackCase(item)}
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2.5 py-1 rounded transition-colors cursor-pointer"
              title="Track this report case in dossier"
            >
              <FileText className="w-3 h-3 text-cyan-400" />
              <span className="hidden sm:inline">Track</span>
            </button>
          )}

          <button
            onClick={() => onCustomize(item)}
            className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 px-2.5 py-1 rounded transition-colors cursor-pointer"
            title="Add target handle (@username) to this template"
          >
            <Sparkles className="w-3 h-3" />
            <span className="hidden sm:inline">Customize</span>
          </button>

          <button
            onClick={() => onToggleFavorite(item.id)}
            className={`p-1.5 rounded border transition-colors cursor-pointer ${
              isFavorite 
                ? 'text-amber-400 border-amber-500/40 bg-amber-500/10' 
                : 'text-slate-500 border-slate-800 hover:text-slate-300 hover:border-slate-700'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            aria-label="Save to favorites"
          >
            <Star className={`w-3.5 h-3.5 ${isFavorite ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Official Link Action Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-2.5 bg-slate-950/70 border border-slate-800/80 rounded-md mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs font-mono text-slate-400 shrink-0">Report Link:</span>
          <a
            href={item.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-sky-400 hover:underline truncate"
            title={item.officialLink}
          >
            {item.officialLink}
          </a>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyLink}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-all cursor-pointer ${
              copiedLink
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
          </button>

          <a
            href={item.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
            title="Open official link in new tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Additional Text Container */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Additional Text / Description:
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              ({item.additionalText.length} characters)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyBoth}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded border transition-all cursor-pointer ${
                copiedBoth
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title="Copy both Report Link and Additional Text together"
            >
              {copiedBoth ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copiedBoth ? 'Copied Both!' : 'Copy Both (Link+Text)'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className={`flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold rounded shadow-sm transition-all cursor-pointer ${
                copiedText
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-slate-950'
              }`}
            >
              {copiedText ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied Additional Text!' : 'Copy Additional Text'}</span>
            </button>
          </div>
        </div>

        <div className="relative group">
          <pre className="p-3 bg-[#060911] border border-slate-800/90 rounded-md text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto selection:bg-emerald-500/30 selection:text-white">
            {item.additionalText}
          </pre>
        </div>
      </div>

      {/* Bangla instruction toggle */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/60">
        <button
          onClick={() => setShowBengaliGuide(!showBengaliGuide)}
          className="flex items-center justify-between w-full text-left text-xs text-slate-400 hover:text-emerald-400 transition-colors py-0.5 cursor-pointer"
        >
          <span className="flex items-center gap-1.5 font-medium">
            <Info className="w-3 h-3 text-emerald-400" />
            <span>কীভাবে রিপোর্ট করবেন এবং টেক্সট ব্যবহার করবেন (বাংলা নিয়ম)</span>
          </span>
          {showBengaliGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showBengaliGuide && (
          <div className="mt-2 p-2.5 bg-emerald-950/20 border border-emerald-900/30 rounded text-xs text-slate-300 leading-normal">
            <p className="text-emerald-300 font-medium mb-1">নির্দেশনা:</p>
            <p>{item.banglaInstruction}</p>
            <p className="mt-1.5 text-[11px] text-slate-400">
              * পরামর্শ: টিকটকে রিপোর্ট করার সময় Additional details বক্সে এই ইংরেজি টেক্সটটি কপি করে পেস্ট করলে টিকটক মডারেশন টিম অগ্রাধিকার ভিত্তিতে অ্যাকশন নেয়।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
