import React, { useState } from 'react';
import { X, Plus, FolderPlus, Check } from 'lucide-react';
import { ReportFolder, ReportItem } from '../types/report';

interface CreateTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  folders: ReportFolder[];
  onAddTemplate: (folderId: string, item: ReportItem) => void;
}

export const CreateTemplateModal: React.FC<CreateTemplateModalProps> = ({
  isOpen,
  onClose,
  folders,
  onAddTemplate,
}) => {
  const [selectedFolder, setSelectedFolder] = useState(folders[0]?.id || 'account-ban');
  const [title, setTitle] = useState('');
  const [banglaTitle, setBanglaTitle] = useState('');
  const [officialLink, setOfficialLink] = useState('https://www.tiktok.com/legal/report/feedback');
  const [additionalText, setAdditionalText] = useState('');
  const [banglaInstruction, setBanglaInstruction] = useState('');
  const [severity, setSeverity] = useState<'Critical' | 'High' | 'Medium'>('High');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !additionalText.trim()) return;

    const newItem: ReportItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      banglaTitle: banglaTitle.trim() || title.trim(),
      category: selectedFolder,
      officialLink: officialLink.trim() || 'https://www.tiktok.com/legal/report/feedback',
      additionalText: additionalText.trim(),
      banglaInstruction: banglaInstruction.trim() || 'কপি করে টিকটকের রিপোর্ট বক্সে পেস্ট করুন।',
      severity,
      tags: ['Custom', 'User Created'],
    };

    onAddTemplate(selectedFolder, newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-5 sm:p-6 my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <FolderPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Add Custom Report &amp; Additional Text
              </h3>
              <p className="text-xs text-slate-400">
                নতুন টিকটক রিপোর্ট লিংক ও অতিরিক্ত টেক্সট যুক্ত করুন
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto space-y-3.5 py-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Select Folder (ফোল্ডার নির্বাচন) <span className="text-rose-400">*</span>
            </label>
            <select
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              {folders.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} ({f.banglaName})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Report Title (রিপোর্টের নাম) <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mass Bot Spam Account Termination"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Bangla Title (বাংলা নাম)
            </label>
            <input
              type="text"
              placeholder="যেমন: বট স্প্যাম অ্যাকাউন্ট ব্যান রিপোর্ট"
              value={banglaTitle}
              onChange={(e) => setBanglaTitle(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              TikTok Official Link (রিপোর্ট লিংক)
            </label>
            <input
              type="url"
              required
              value={officialLink}
              onChange={(e) => setOfficialLink(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white font-mono focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Additional Text / Script (অতিরিক্ত বর্ণনা ও বিবরণ) <span className="text-rose-400">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Enter the full text to copy and paste into TikTok's additional details box..."
              value={additionalText}
              onChange={(e) => setAdditionalText(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white font-mono text-[11.5px] leading-relaxed focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Instruction (নির্দেশনা)
            </label>
            <input
              type="text"
              placeholder="যেমন: টার্গেট ইউজারনেম পরিবর্তন করে রিপোর্ট দিন।"
              value={banglaInstruction}
              onChange={(e) => setBanglaInstruction(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="pt-2 border-t border-slate-800 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md shadow transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Save Template</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
