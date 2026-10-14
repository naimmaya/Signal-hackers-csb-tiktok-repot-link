import React from 'react';
import { 
  Folder, 
  FolderOpen, 
  ChevronDown, 
  ChevronRight, 
  ShieldAlert, 
  Baby, 
  UserX, 
  Flame, 
  AlertTriangle, 
  HeartHandshake, 
  FileCheck, 
  Radio, 
  ExternalLink, 
  KeySquare,
  Sparkles
} from 'lucide-react';
import { ReportFolder, ReportItem } from '../types/report';
import { ReportCard } from './ReportCard';

interface FolderCardProps {
  folder: ReportFolder;
  isOpen: boolean;
  onToggle: (id: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onCopyText: (text: string, title: string) => void;
  onCopyLink: (link: string, title: string) => void;
  onCustomize: (item: ReportItem) => void;
  onOpenEmail?: (item: ReportItem) => void;
  onTrackCase?: (item: ReportItem) => void;
}

const getFolderIcon = (iconName: string, isOpen: boolean) => {
  const iconProps = { className: `w-5 h-5 transition-colors ${isOpen ? 'text-emerald-400' : 'text-slate-400 group-hover:text-emerald-400'}` };
  
  switch (iconName) {
    case 'ShieldAlert': return <ShieldAlert {...iconProps} />;
    case 'Baby': return <Baby {...iconProps} />;
    case 'UserX': return <UserX {...iconProps} />;
    case 'Flame': return <Flame {...iconProps} />;
    case 'AlertTriangle': return <AlertTriangle {...iconProps} />;
    case 'HeartHandshake': return <HeartHandshake {...iconProps} />;
    case 'FileCheck': return <FileCheck {...iconProps} />;
    case 'Radio': return <Radio {...iconProps} />;
    case 'KeySquare': return <KeySquare {...iconProps} />;
    case 'ExternalLink': return <ExternalLink {...iconProps} />;
    default: return isOpen ? <FolderOpen {...iconProps} /> : <Folder {...iconProps} />;
  }
};

export const FolderCard: React.FC<FolderCardProps> = ({
  folder,
  isOpen,
  onToggle,
  favorites,
  onToggleFavorite,
  onCopyText,
  onCopyLink,
  onCustomize,
  onOpenEmail,
  onTrackCase,
}) => {
  return (
    <div 
      id={`folder-${folder.id}`} 
      className={`border rounded-xl transition-all duration-200 overflow-hidden ${
        isOpen 
          ? 'bg-slate-900/60 border-emerald-500/40 shadow-lg shadow-emerald-950/20' 
          : 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700/90 hover:bg-slate-900/50'
      }`}
    >
      {/* Folder Header - Click to open/close */}
      <button
        onClick={() => onToggle(folder.id)}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
        aria-expanded={isOpen}
      >
        <div className="flex items-start sm:items-center gap-3.5 min-w-0">
          <div className={`p-2.5 rounded-lg border transition-all ${
            isOpen 
              ? 'bg-emerald-500/10 border-emerald-500/30' 
              : 'bg-slate-800/60 border-slate-700/60 group-hover:border-slate-600'
          }`}>
            {getFolderIcon(folder.iconName, isOpen)}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                {folder.name}
              </h3>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                {folder.items.length} {folder.items.length === 1 ? 'Report' : 'Reports'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-400/90 font-medium mt-0.5">
              {folder.banglaName}
            </p>

            <p className="text-xs text-slate-400 mt-1 line-clamp-1 sm:line-clamp-none">
              {folder.description}
            </p>
          </div>
        </div>

        {/* Right chevron and indicator */}
        <div className="flex items-center gap-2 shrink-0 self-center">
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            {isOpen ? 'Close Folder' : 'Open Folder'}
          </span>
          <div className={`p-1.5 rounded-md border transition-colors ${
            isOpen 
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
              : 'bg-slate-800/50 text-slate-400 border-slate-700/60 group-hover:text-white'
          }`}>
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Expanded Folder Content - Reports & Additionals */}
      {isOpen && (
        <div className="border-t border-slate-800/80 p-4 sm:p-5 bg-black/30 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              ফোল্ডারের ভেতর টিকটক রিপোর্ট লিংক ও অতিরিক্ত টেক্সটগুলো নিচে দেওয়া হলো:
            </span>
            <span className="font-mono text-emerald-400 hidden sm:inline">
              Signal Hackers CSB Verified
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {folder.items.map((item) => (
              <ReportCard
                key={item.id}
                item={item}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={onToggleFavorite}
                onCopyText={onCopyText}
                onCopyLink={onCopyLink}
                onCustomize={onCustomize}
                onOpenEmail={onOpenEmail}
                onTrackCase={onTrackCase}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
