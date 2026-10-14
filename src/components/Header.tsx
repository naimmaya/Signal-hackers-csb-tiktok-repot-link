import React from 'react';
import { Terminal, Shield, Plus, Sparkles, BookOpen, ExternalLink, Menu, X, Share2 } from 'lucide-react';

interface HeaderProps {
  onOpenBuilder: () => void;
  onOpenNewTemplate: () => void;
  onOpenGuide: () => void;
  onOpenHelpline: () => void;
  onOpenShare: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBuilder,
  onOpenNewTemplate,
  onOpenGuide,
  onOpenHelpline,
  onOpenShare,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-emerald-400 font-extrabold tracking-wider">SIGNAL HACKERS CSB</span>
        </a>

        {/* Zone 2: 4 clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button 
            onClick={() => onNavigateSection('folders-section')} 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Report Folders</span>
          </button>
          
          <button 
            onClick={onOpenBuilder} 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Custom Generator</span>
          </button>

          <button 
            onClick={() => onNavigateSection('folder-official-forms')} 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span>Official Forms</span>
          </button>

          <button 
            onClick={onOpenGuide} 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>Report Guide</span>
          </button>

          <button 
            onClick={onOpenShare} 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            title="Share Website Link"
          >
            <Share2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Share Link</span>
          </button>

          <button 
            onClick={onOpenHelpline} 
            className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Help Line</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenShare}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Share Website Link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>

          <button
            onClick={onOpenBuilder}
            className="px-3.5 py-1.5 text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-md shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Auto Generator</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-md border border-slate-800"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#090d16] px-4 py-3 space-y-2">
          <button 
            onClick={() => { onOpenShare(); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 text-sm font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded flex items-center justify-between"
          >
            <span>Share Website Link (ওয়েবসাইটের লিংক শেয়ার)</span>
            <Share2 className="w-4 h-4 text-cyan-400" />
          </button>
          <button 
            onClick={() => { onOpenHelpline(); setMobileMenuOpen(false); }}
            className="w-full text-left py-2.5 px-3 text-sm font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded flex items-center justify-between"
          >
            <span>Official Help Line (01679164271 / @Signalhackers)</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </button>
          <button 
            onClick={() => { onNavigateSection('folders-section'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 text-sm text-slate-300 hover:bg-slate-800/60 rounded flex items-center justify-between"
          >
            <span>Report Folders (সব ফোল্ডার)</span>
          </button>
          <button 
            onClick={() => { onOpenBuilder(); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 text-sm text-cyan-300 hover:bg-slate-800/60 rounded flex items-center justify-between"
          >
            <span>Auto Generator (অটো রিপোর্ট বিল্ডার)</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </button>
          <button 
            onClick={() => { onNavigateSection('folder-official-forms'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 text-sm text-slate-300 hover:bg-slate-800/60 rounded flex items-center justify-between"
          >
            <span>Official Forms (অফিসিয়াল ফর্ম)</span>
            <ExternalLink className="w-4 h-4 text-emerald-400" />
          </button>
          <button 
            onClick={() => { onOpenGuide(); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 text-sm text-slate-300 hover:bg-slate-800/60 rounded flex items-center justify-between"
          >
            <span>Report Guide (রিপোর্টের নিয়মাবলী)</span>
            <BookOpen className="w-4 h-4 text-slate-400" />
          </button>
          <button 
            onClick={() => { onOpenNewTemplate(); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 text-sm text-emerald-300 hover:bg-slate-800/60 rounded flex items-center justify-between"
          >
            <span>Add Custom Template (নিজস্ব টেমপ্লেট যোগ করুন)</span>
            <Plus className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      )}
    </header>
  );
};
