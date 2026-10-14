import React from 'react';
import { Download, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  onOpenModal: () => void;
  variant?: 'header' | 'hero' | 'floating';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ onOpenModal, variant = 'header' }) => {
  const { isInstalled } = usePWAInstall();

  if (isInstalled) {
    return null;
  }

  if (variant === 'hero') {
    return (
      <button
        onClick={onOpenModal}
        className="px-4 py-2 text-xs sm:text-sm font-bold text-emerald-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer border border-emerald-300/40"
      >
        <Download className="w-4 h-4" />
        <span>Install Phone App (অ্যাপ ডাউনলোড করুন)</span>
      </button>
    );
  }

  if (variant === 'floating') {
    return (
      <button
        onClick={onOpenModal}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-md transition-colors cursor-pointer"
        title="Install as Android / iOS App"
      >
        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
        <span>Install App</span>
      </button>
    );
  }

  // Header default variant
  return (
    <button
      onClick={onOpenModal}
      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all shadow cursor-pointer"
      title="Install as Phone App"
    >
      <Download className="w-3.5 h-3.5" />
      <span>Install App</span>
    </button>
  );
};
