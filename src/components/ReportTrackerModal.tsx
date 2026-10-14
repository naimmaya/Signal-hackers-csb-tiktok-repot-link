import React, { useState, useEffect } from 'react';
import { X, Shield, Plus, Trash2, CheckCircle2, Clock, AlertCircle, FileText, Download, Check } from 'lucide-react';
import { ReportItem, TrackedReport } from '../types/report';

interface ReportTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackedReports: TrackedReport[];
  onUpdateReports: (reports: TrackedReport[]) => void;
  initialTemplate?: ReportItem | null;
}

export const ReportTrackerModal: React.FC<ReportTrackerModalProps> = ({
  isOpen,
  onClose,
  trackedReports,
  onUpdateReports,
  initialTemplate,
}) => {
  const [targetHandle, setTargetHandle] = useState('');
  const [reportTitle, setReportTitle] = useState('');
  const [category, setCategory] = useState('Account Ban');
  const [notes, setNotes] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  useEffect(() => {
    if (initialTemplate) {
      setReportTitle(initialTemplate.title);
      if (initialTemplate.category) {
        setCategory(initialTemplate.category);
      }
      setNotes(`Official form: ${initialTemplate.officialLink}`);
    }
  }, [initialTemplate, isOpen]);

  if (!isOpen) return null;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetHandle.trim() || !reportTitle.trim()) return;

    const newReport: TrackedReport = {
      id: `ticket-${Date.now()}`,
      targetHandle: targetHandle.trim().startsWith('@') ? targetHandle.trim() : `@${targetHandle.trim()}`,
      category,
      reportTitle: reportTitle.trim(),
      submittedAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'Pending',
      notes: notes.trim(),
    };

    onUpdateReports([newReport, ...trackedReports]);
    setTargetHandle('');
    setReportTitle('');
    setNotes('');
  };

  const handleStatusChange = (id: string, newStatus: TrackedReport['status']) => {
    onUpdateReports(
      trackedReports.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const handleDelete = (id: string) => {
    onUpdateReports(trackedReports.filter((r) => r.id !== id));
  };

  const filteredReports = trackedReports.filter((r) => {
    if (statusFilter === 'All') return true;
    return r.status === statusFilter;
  });

  const getStatusBadge = (status: TrackedReport['status']) => {
    switch (status) {
      case 'Banned / Action Taken':
        return 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40';
      case 'Under Review':
        return 'text-cyan-400 bg-cyan-950/60 border-cyan-500/40';
      case 'Closed':
        return 'text-slate-400 bg-slate-900 border-slate-700';
      case 'Pending':
      default:
        return 'text-amber-400 bg-amber-950/60 border-amber-500/40';
    }
  };

  const exportAsJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(trackedReports, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `Signal_Hackers_Reports_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-emerald-500/40 rounded-xl shadow-2xl p-5 sm:p-6 my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Report Incident Tracker &amp; Dossier
              </h3>
              <p className="text-xs text-emerald-400">
                সাবমিট করা টিকটক রিপোর্টগুলোর ট্র্যাকিং ও অ্যাকশন মনিটরিং
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {trackedReports.length > 0 && (
              <button
                onClick={exportAsJSON}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
                title="Export report history as JSON backup"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Log</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form to log a report */}
        <div className="py-3 border-b border-slate-800 shrink-0">
          <form onSubmit={handleAdd} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Target Account</label>
                <input
                  type="text"
                  required
                  placeholder="@violator_handle"
                  value={targetHandle}
                  onChange={(e) => setTargetHandle(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Report Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="Account Ban">Account Ban</option>
                  <option value="Underage / Child Safety">Underage / Child Safety</option>
                  <option value="Privacy / Doxxing">Privacy / Doxxing</option>
                  <option value="Copyright DMCA">Copyright DMCA</option>
                  <option value="Impersonation">Impersonation</option>
                  <option value="Scams & Fraud">Scams &amp; Fraud</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Reason / Offense</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Under 13 COPPA violation"
                  value={reportTitle}
                  onChange={(e) => setReportTitle(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Optional notes or evidence URL..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="flex-1 px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Log Case</span>
              </button>
            </div>
          </form>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between py-2.5 border-b border-slate-800/80 text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {['All', 'Pending', 'Under Review', 'Banned / Action Taken', 'Closed'].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  statusFilter === s
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-white bg-slate-800/50'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <span className="font-mono text-emerald-400 text-xs hidden sm:inline">
            Total: {trackedReports.length} Cases
          </span>
        </div>

        {/* Tracked reports list */}
        <div className="overflow-y-auto space-y-2.5 py-3 pr-1 flex-1 text-xs">
          {filteredReports.length === 0 ? (
            <div className="text-center py-8 text-slate-500 space-y-2">
              <Clock className="w-8 h-8 mx-auto text-slate-600" />
              <p>কোনো ট্র্যাকিং কেস পাওয়া যায়নি। উপরের ফর্মটি দিয়ে নতুন কেস লগ করুন।</p>
            </div>
          ) : (
            filteredReports.map((report) => (
              <div
                key={report.id}
                className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-emerald-400 font-bold">{report.targetHandle}</span>
                    <span className="text-[11px] text-slate-400">· {report.category}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{report.submittedAt}</span>
                  </div>
                  <p className="text-xs text-slate-200">{report.reportTitle}</p>
                  {report.notes && (
                    <p className="text-[11px] text-slate-400 italic">Notes: {report.notes}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                  <select
                    value={report.status}
                    onChange={(e) => handleStatusChange(report.id, e.target.value as TrackedReport['status'])}
                    className={`px-2 py-1 rounded text-xs font-mono font-semibold border cursor-pointer ${getStatusBadge(
                      report.status
                    )}`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Banned / Action Taken">Banned / Action Taken</option>
                    <option value="Closed">Closed</option>
                  </select>

                  <button
                    onClick={() => handleDelete(report.id)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors rounded"
                    title="Delete log entry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end shrink-0">
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
