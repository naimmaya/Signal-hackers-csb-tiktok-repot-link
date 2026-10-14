import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  FolderPlus, 
  BookOpen, 
  Star, 
  Maximize2, 
  Minimize2, 
  ShieldCheck, 
  Terminal, 
  ExternalLink, 
  AlertCircle,
  Copy,
  Check,
  Filter,
  RefreshCw,
  Share2,
  Download,
  Smartphone
} from 'lucide-react';
import { INITIAL_FOLDERS } from './data/reportData';
import { ReportFolder, ReportItem } from './types/report';
import { Header } from './components/Header';
import { FolderCard } from './components/FolderCard';
import { CustomBuilderModal } from './components/CustomBuilderModal';
import { CreateTemplateModal } from './components/CreateTemplateModal';
import { ReportingGuideModal } from './components/ReportingGuideModal';
import { HelpLineModal } from './components/HelpLineModal';
import { HelpLineBanner } from './components/HelpLineBanner';
import { ShareAppModal } from './components/ShareAppModal';
import { InstallAppModal } from './components/InstallAppModal';
import { Toast, ToastMessage } from './components/Toast';
import { playCopySuccessSound } from './utils/audio';

const STORAGE_KEY_FAVORITES = 'signal_hackers_favorites_v1';
const STORAGE_KEY_CUSTOM = 'signal_hackers_custom_templates_v1';

export default function App() {
  const [folders, setFolders] = useState<ReportFolder[]>(() => {
    try {
      const savedCustom = localStorage.getItem(STORAGE_KEY_CUSTOM);
      if (savedCustom) {
        const customItems: { folderId: string; item: ReportItem }[] = JSON.parse(savedCustom);
        return INITIAL_FOLDERS.map((folder) => {
          const matching = customItems.filter((c) => c.folderId === folder.id).map((c) => c.item);
          if (matching.length > 0) {
            return {
              ...folder,
              items: [...folder.items, ...matching],
            };
          }
          return folder;
        });
      }
    } catch {
      // fallback
    }
    return INITIAL_FOLDERS;
  });

  const [openFolderIds, setOpenFolderIds] = useState<Record<string, boolean>>({
    'tiktok-underage-report': true,
    'tiktok-privacy-violation': true,
    'tiktok-facebook-copyright': true,
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITES);
      return saved ? JSON.parse(saved) : ['underage-coppa-ban', 'privacy-personal-media-removal', 'copyright-fb-to-tiktok'];
    } catch {
      return ['underage-coppa-ban', 'privacy-personal-media-removal', 'copyright-fb-to-tiktok'];
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Modals state
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isNewTemplateOpen, setIsNewTemplateOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isInstallOpen, setIsInstallOpen] = useState(false);
  const [selectedTemplateForBuilder, setSelectedTemplateForBuilder] = useState<ReportItem | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const addToast = (title: string, description: string, type: 'link' | 'text' | 'success') => {
    const newToast: ToastMessage = {
      id: `${Date.now()}-${Math.random()}`,
      title,
      description,
      type,
    };
    setToasts((prev) => [...prev, newToast]);
    playCopySuccessSound();
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCopyText = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    addToast('Additional Text Copied!', title, 'text');
  };

  const handleCopyLink = (link: string, title: string) => {
    navigator.clipboard.writeText(link);
    addToast('Report Link Copied!', link, 'link');
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        return prev.filter((favId) => favId !== id);
      } else {
        addToast('Saved to Favorites', 'Item added to your quick access list', 'success');
        return [...prev, id];
      }
    });
  };

  const handleToggleFolder = (folderId: string) => {
    setOpenFolderIds((prev) => ({
      ...prev,
      [folderId]: !prev[folderId],
    }));
  };

  const handleExpandAll = () => {
    const allOpen: Record<string, boolean> = {};
    folders.forEach((f) => {
      allOpen[f.id] = true;
    });
    setOpenFolderIds(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenFolderIds({});
  };

  const handleAddTemplate = (folderId: string, item: ReportItem) => {
    setFolders((prev) =>
      prev.map((f) => {
        if (f.id === folderId) {
          return {
            ...f,
            items: [item, ...f.items],
          };
        }
        return f;
      })
    );

    // Save custom item
    try {
      const existing = localStorage.getItem(STORAGE_KEY_CUSTOM);
      const list = existing ? JSON.parse(existing) : [];
      list.push({ folderId, item });
      localStorage.setItem(STORAGE_KEY_CUSTOM, JSON.stringify(list));
    } catch {
      // ignore
    }

    // auto open that folder
    setOpenFolderIds((prev) => ({ ...prev, [folderId]: true }));
    addToast('Custom Template Saved!', item.title, 'success');
  };

  const handleCustomize = (item: ReportItem) => {
    setSelectedTemplateForBuilder(item);
    setIsBuilderOpen(true);
  };

  // Filtered folders and items
  const filteredFolders = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return folders
      .map((folder) => {
        // filter category
        if (activeCategoryFilter !== 'all' && folder.id !== activeCategoryFilter) {
          return null;
        }

        // filter items
        const matchingItems = folder.items.filter((item) => {
          if (onlyFavorites && !favorites.includes(item.id)) {
            return false;
          }

          if (!q) return true;

          const matchTitle = item.title.toLowerCase().includes(q);
          const matchBangla = item.banglaTitle.toLowerCase().includes(q);
          const matchText = item.additionalText.toLowerCase().includes(q);
          const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
          const matchFolder = folder.name.toLowerCase().includes(q) || folder.banglaName.toLowerCase().includes(q);

          return matchTitle || matchBangla || matchText || matchTags || matchFolder;
        });

        if (matchingItems.length === 0) {
          return null;
        }

        return {
          ...folder,
          items: matchingItems,
        };
      })
      .filter((f): f is ReportFolder => f !== null);
  }, [folders, searchQuery, activeCategoryFilter, onlyFavorites, favorites]);

  // When searching, auto-expand matching folders
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const openMatches: Record<string, boolean> = {};
      filteredFolders.forEach((f) => {
        openMatches[f.id] = true;
      });
      setOpenFolderIds(openMatches);
    }
  }, [searchQuery, filteredFolders]);

  const totalReportsCount = useMemo(() => {
    return folders.reduce((sum, f) => sum + f.items.length, 0);
  }, [folders]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Top Bar Navigation */}
      <Header
        onOpenBuilder={() => {
          setSelectedTemplateForBuilder(null);
          setIsBuilderOpen(true);
        }}
        onOpenNewTemplate={() => setIsNewTemplateOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenHelpline={() => setIsHelplineOpen(true)}
        onOpenShare={() => setIsShareOpen(true)}
        onOpenInstall={() => setIsInstallOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Hero Header Section */}
      <section className="relative border-b border-slate-800 bg-gradient-to-b from-[#0e1626] to-[#090d16] px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>SIGNAL HACKERS CSB · OFFICIAL TIKTOK REPORT TOOLKIT</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Signal Hackers CSB <br />
            <span className="text-emerald-400">TikTok Report Links &amp; Additional</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            টিকটকের সব ধরণের ভায়োলেশন রিপোর্ট লিংক, অফিশিয়াল ফর্ম এবং মানব মডারেশন টিমের কাছে পাঠানোর জন্য তৈরি করা কার্যকরী অ্যাডিশনাল টেক্সট। প্রতিটি ফোল্ডারে চাপ দিয়ে সরাসরি লিংক ও স্ক্রিপ্ট কপি করুন।
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 pt-2 text-xs font-mono text-slate-400">
            <div>
              <span className="text-emerald-400 font-bold text-sm sm:text-base mr-1.5">{folders.length}</span>
              <span>Report Folders</span>
            </div>
            <span className="text-slate-700">·</span>
            <div>
              <span className="text-emerald-400 font-bold text-sm sm:text-base mr-1.5">{totalReportsCount}</span>
              <span>Total Scripts</span>
            </div>
            <span className="text-slate-700">·</span>
            <div>
              <span className="text-emerald-400 font-bold text-sm sm:text-base mr-1.5">{favorites.length}</span>
              <span>Saved Starred</span>
            </div>
          </div>

          {/* Primary Quick Actions */}
          <div className="flex items-center justify-center gap-2.5 pt-3 flex-wrap">
            <button
              onClick={() => setIsInstallOpen(true)}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer border border-emerald-300/40"
            >
              <Download className="w-4 h-4" />
              <span>Install Phone App (অ্যাপ হিসেবে নামান)</span>
            </button>

            <button
              onClick={() => {
                setSelectedTemplateForBuilder(null);
                setIsBuilderOpen(true);
              }}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Generate Text (@Username)</span>
            </button>

            <button
              onClick={() => setIsShareOpen(true)}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-cyan-300 bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-500/50 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span>Share Link</span>
            </button>

            <button
              onClick={() => setIsHelplineOpen(true)}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/50 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>হেল্পলাইন</span>
            </button>

            <button
              onClick={() => setIsGuideOpen(true)}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Guide</span>
            </button>
          </div>

          {/* Official Helpline Banner */}
          <HelpLineBanner
            onCopyText={handleCopyText}
            onOpenHelplineModal={() => setIsHelplineOpen(true)}
          />

        </div>
      </section>

      {/* Search, Filter & Controls Toolbar */}
      <section className="sticky top-16 z-30 bg-[#090d16]/95 backdrop-blur border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Live Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search folders, report reasons or keywords (e.g. ban, minor, fake, scam)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Controls: Favorites Toggle, Open/Close All */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
            
            {/* Category Filter Select */}
            <select
              value={activeCategoryFilter}
              onChange={(e) => setActiveCategoryFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-md text-xs text-slate-300 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="all">All Categories (সব ক্যাটাগরি)</option>
              {folders.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>

            {/* Favorite Filter Toggle */}
            <button
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md border flex items-center gap-1.5 transition-colors cursor-pointer ${
                onlyFavorites
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
              title="Show only starred templates"
            >
              <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="hidden sm:inline">Favorites</span>
            </button>

            {/* Expand / Collapse All */}
            <div className="flex items-center border border-slate-800 rounded-md bg-slate-900 p-0.5">
              <button
                onClick={handleExpandAll}
                className="p-1.5 text-slate-400 hover:text-emerald-400 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                title="Expand all folders"
                aria-label="Expand all folders"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleCollapseAll}
                className="p-1.5 text-slate-400 hover:text-emerald-400 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                title="Collapse all folders"
                aria-label="Collapse all folders"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Main Folders Content Area */}
      <main id="folders-section" className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        
        {/* Results Header */}
        <div className="flex items-center justify-between text-xs text-slate-400 pb-2">
          <span>
            {searchQuery ? `Search Results for "${searchQuery}"` : 'TikTok Violation & Reporting Folders:'}
          </span>
          <span className="font-mono text-emerald-400">
            Showing {filteredFolders.length} Folders
          </span>
        </div>

        {/* Empty state when no folders match */}
        {filteredFolders.length === 0 ? (
          <div className="p-12 text-center border border-slate-800 rounded-xl bg-slate-900/30 space-y-3">
            <AlertCircle className="w-8 h-8 text-slate-500 mx-auto" />
            <h4 className="text-base font-semibold text-slate-200">কোনো রিপোর্ট ফোল্ডার পাওয়া যায়নি</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              আপনার সার্চ কিওয়ার্ডের সাথে মিলছে না। অনুগ্রহ করে বানান চেক করুন অথবা ফিল্টার রিসেট করুন।
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryFilter('all');
                setOnlyFavorites(false);
              }}
              className="px-4 py-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-md hover:bg-emerald-500/20 transition-colors cursor-pointer"
            >
              Reset Filters (ফিল্টার রিসেট)
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFolders.map((folder) => (
              <FolderCard
                key={folder.id}
                folder={folder}
                isOpen={Boolean(openFolderIds[folder.id])}
                onToggle={handleToggleFolder}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onCopyText={handleCopyText}
                onCopyLink={handleCopyLink}
                onCustomize={handleCustomize}
              />
            ))}
          </div>
        )}

      </main>

      {/* Educational Information & Helpline Footer */}
      <footer className="border-t border-slate-800 bg-[#060911] text-xs text-slate-400 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Official Helpline Box inside Footer */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold block">
                SIGNAL HACKERS CSB OFFICIAL HELPLINE
              </span>
              <p className="text-slate-200 font-semibold text-xs mt-0.5">
                সরাসরি যোগাযোগ করুন: WhatsApp: 01679164271 · Telegram: @Signalhackers
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://wa.me/8801679164271?text=Hello%20Signal%20Hackers%20CSB"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp: 01679164271</span>
              </a>

              <a
                href="https://t.me/Signalhackers"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-colors flex items-center gap-1.5"
              >
                <span>Telegram: @Signalhackers</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-emerald-400 font-bold">
                <Terminal className="w-4 h-4" />
                <span>SIGNAL HACKERS CSB</span>
              </div>
              <p className="text-slate-400 text-[11.5px]">
                TikTok Community Safety, Report Links &amp; Additional Descriptions Portal.
              </p>
              <p className="text-slate-500 text-[10.5px]">
                কমিউনিটি সুরক্ষার জন্য তৈরি। নিরপরাধ ব্যবহারকারীর বিরুদ্ধে অপব্যবহার নিষিদ্ধ।
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <a
                href="https://www.tiktok.com/community-guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <span>Community Guidelines</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setIsGuideOpen(true)}
                className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Report Guide
              </button>

              <button
                onClick={() => setIsHelplineOpen(true)}
                className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-semibold"
              >
                Help Line
              </button>

              <button
                onClick={() => {
                  setSelectedTemplateForBuilder(null);
                  setIsBuilderOpen(true);
                }}
                className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Text Generator
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Help Line Pill Button (Bottom Left) */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setIsHelplineOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/95 hover:bg-slate-800 border border-emerald-500/50 text-emerald-300 hover:text-white shadow-xl shadow-black/80 backdrop-blur-md transition-all group cursor-pointer"
          title="WhatsApp: 01679164271 | Telegram: @Signalhackers"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold font-mono">HELP LINE</span>
          <span className="hidden sm:inline text-xs text-slate-300">01679164271</span>
        </button>

        <button
          onClick={() => setIsInstallOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-xl shadow-emerald-500/30 transition-all cursor-pointer"
          title="Install Signal Hackers CSB on your Phone"
        >
          <Download className="w-3.5 h-3.5" />
          <span>App Download</span>
        </button>
      </div>

      {/* Modals */}
      <CustomBuilderModal
        isOpen={isBuilderOpen}
        onClose={() => setIsBuilderOpen(false)}
        initialTemplate={selectedTemplateForBuilder}
        onCopyText={handleCopyText}
      />

      <CreateTemplateModal
        isOpen={isNewTemplateOpen}
        onClose={() => setIsNewTemplateOpen(false)}
        folders={folders}
        onAddTemplate={handleAddTemplate}
      />

      <ReportingGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      <HelpLineModal
        isOpen={isHelplineOpen}
        onClose={() => setIsHelplineOpen(false)}
        onCopyText={handleCopyText}
      />

      <ShareAppModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onCopyText={handleCopyText}
      />

      <InstallAppModal
        isOpen={isInstallOpen}
        onClose={() => setIsInstallOpen(false)}
      />

      {/* Floating Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

    </div>
  );
}
