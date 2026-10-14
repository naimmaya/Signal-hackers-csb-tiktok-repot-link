import React, { useState, useEffect } from 'react';
import { X, Sparkles, Copy, Check, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import { ReportItem } from '../types/report';

interface CustomBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTemplate?: ReportItem | null;
  onCopyText: (text: string, title: string) => void;
}

export const CustomBuilderModal: React.FC<CustomBuilderModalProps> = ({
  isOpen,
  onClose,
  initialTemplate,
  onCopyText,
}) => {
  const [targetUsername, setTargetUsername] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [myUsername, setMyUsername] = useState('');
  const [category, setCategory] = useState('account-ban');
  const [specificDetails, setSpecificDetails] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialTemplate) {
      setCategory(initialTemplate.category);
      if (initialTemplate.category === 'impersonation') {
        setSpecificDetails('This profile is using my photo and name to deceive users.');
      }
    }
  }, [initialTemplate]);

  if (!isOpen) return null;

  const cleanHandle = targetUsername.trim().startsWith('@') 
    ? targetUsername.trim() 
    : targetUsername.trim() ? `@${targetUsername.trim()}` : '@[TARGET_USERNAME]';

  const cleanMyHandle = myUsername.trim().startsWith('@')
    ? myUsername.trim()
    : myUsername.trim() ? `@${myUsername.trim()}` : '@[MY_REAL_USERNAME]';

  const cleanTargetUrl = targetUrl.trim() || 'https://www.tiktok.com/@' + cleanHandle.replace('@', '');

  // Generate dynamic professional additional text
  const generateAdditionalText = () => {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

    switch (category) {
      case 'account-ban':
        return `URGENT COMPLIANCE REPORT - SEVERE VIOLATION OF COMMUNITY GUIDELINES

Target Account: ${cleanHandle}
Target Profile URL: ${cleanTargetUrl}
Submission Timestamp: ${timestamp}

To TikTok Trust & Safety Escalation Team:

I am formally requesting the urgent review and permanent termination of the account ${cleanHandle}. This profile is systematically engaged in egregious violations of TikTok Community Guidelines, including distribution of prohibited materials, harassment, and severe platform manipulation.

Specific Infraction Summary:
${specificDetails ? specificDetails : 'Deliberate and repeated distribution of harmful, abusive, or illicit content across video feeds.'}

In accordance with TikTok's Terms of Service and Safety Enforcement Standards, accounts causing risk to user safety are subject to immediate suspension. Please execute a full manual audit and deactivate this profile permanently.`;

      case 'tiktok-underage-report':
      case 'underage-safety':
        return `CRITICAL YOUTH SAFETY REPORT - UNDERAGE COPPA VIOLATION

Subject Handle: ${cleanHandle}
Subject Profile Link: ${cleanTargetUrl}

Attention Child Safety Specialist:

This account is actively operated by or showcases an individual who is demonstrably below the statutory platform minimum age requirement of 13 years old. 

${specificDetails ? `Report Details: ${specificDetails}` : 'The individual discloses age indications in videos and comment interactions confirming they are a minor under 13.'}

This presents severe child privacy liabilities under COPPA and regional child protection legislation. Please immediately apply an account lock and request verifiable government age proof.`;

      case 'tiktok-privacy-violation':
        return `FORMAL PRIVACY COMPLAINT - UNAUTHORIZED MEDIA & DOXXING VIOLATION

Offending Profile: ${cleanHandle}
Violating Video / Post Link: ${cleanTargetUrl}

To TikTok Legal & Privacy Enforcement:

I am formally reporting this user for distributing personal, non-consensual media, personal contact details (doxxing), or unauthorized surveillance footage violating fundamental privacy rights under TikTok Community Standards.

Specific Infraction Details:
${specificDetails ? specificDetails : 'Publishing private identifiable records, personal image/video without consent, or sensitive contact info.'}

This publication is inflicting distress and privacy harm. Please immediately remove the infringing media and penalize the account holder.`;

      case 'tiktok-facebook-copyright':
        return `DMCA NOTICE OF COPYRIGHT INFRINGEMENT (17 U.S.C. § 512) - TIKTOK ↔ FACEBOOK

Infringing TikTok Handle: ${cleanHandle}
Infringing Material URL: ${cleanTargetUrl}

I am the verified copyright author (or authorized legal representative) of the original audiovisual work published on Facebook / Meta.

Original Facebook Source / Proof:
${specificDetails ? specificDetails : 'Original creative video published on my official Facebook Page/Profile, ripped and re-uploaded without consent.'}

Good Faith Statement:
I have a good faith belief that the use of the copyrighted material identified above is not authorized by the copyright owner, its agent, or the law. Under penalty of perjury, I confirm this notice is accurate. Please expedite the takedown of this infringing post.`;

      case 'impersonation':
        return `OFFICIAL IMPERSONATION & FALSE IDENTITY COMPLAINT

Impersonator Account: ${cleanHandle}
Target URL: ${cleanTargetUrl}
Authentic / Original Owner: ${cleanMyHandle}

The flagged account ${cleanHandle} is deliberately impersonating the legitimate identity of ${cleanMyHandle} without authorization. They have duplicated display iconography, biographical details, and original content to deceive followers.

${specificDetails ? `Specific Impersonation Details: ${specificDetails}` : 'The fake profile is directly deceiving members of the community by posing as the authentic individual.'}

Please terminate this impersonating profile in accordance with TikTok Integrity & Authenticity policies.`;

      case 'harassment-doxxing':
        return `EMERGENCY REPORT - DOXXING & CYBERBULLYING ATTACK

Offending Profile: ${cleanHandle}
Offending Content Link: ${cleanTargetUrl}

TikTok Trust & Safety Desk:

The user ${cleanHandle} has posted non-consensual private information (doxxing), targeted disparagement, and cyberbullying content.

Incident Context:
${specificDetails ? specificDetails : 'Publishing private records, malicious accusations, and inciting targeted harassment against individuals.'}

This creates serious risks of offline harm and psychological distress. Please execute an immediate takedown of the infringing media and enact punitive sanctions against this account.`;

      case 'scams-fraud':
        return `CRIMINAL FRAUD & MALICIOUS PHISHING ALERT

Fraudulent Account: ${cleanHandle}
Deceptive Link / Post: ${cleanTargetUrl}

Subject: Urgent Removal of Financial Scam & Phishing Schemes.

This profile is actively propagating fraudulent investment schemes, unauthorized account selling, or hosting malicious phishing URLs designed to compromise user credentials and financial assets.

Scheme Breakdown:
${specificDetails ? specificDetails : 'Deceptive promises of financial doubling, external fraudulent links in bio, and unauthorized commercial operations.'}

Please disable this account immediately under TikTok's Frauds & Scams Policy.`;

      case 'copyright-dmca':
        return `DMCA NOTICE OF COPYRIGHT INFRINGEMENT (17 U.S.C. § 512)

Infringing Handle: ${cleanHandle}
Infringing Material URL: ${cleanTargetUrl}

I am the verified copyright owner (or authorized legal representative) of the original audiovisual work published without license at the URL cited above.

${specificDetails ? `Original Work Reference: ${specificDetails}` : 'Original content created by myself has been re-uploaded without authorization.'}

I have a good faith belief that this use is not authorized by the copyright owner, agent, or law. Under penalty of perjury, I confirm this notice is accurate. Please expedite the removal of the infringing work.`;

      default:
        return `TIKTOK SAFETY ENFORCEMENT ESCALATION

Account: ${cleanHandle}
URL: ${cleanTargetUrl}
Date: ${timestamp}

This report addresses serious non-compliance with platform community standards.
Details: ${specificDetails || 'Severe violation of safety guidelines requiring moderation intervention.'}

Please inspect the activity logs and apply standard platform disciplinary measures.`;
    }
  };

  const generatedText = generateAdditionalText();

  const handleCopy = () => {
    onCopyText(generatedText, `Generated Report for ${cleanHandle}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-emerald-500/40 rounded-xl shadow-2xl p-5 sm:p-6 my-8 max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Custom Report Additional Text Generator
              </h3>
              <p className="text-xs text-emerald-400">
                স্বয়ংক্রিয় টিকটক অ্যাডিশনাল রিপোর্ট বিল্ডার (সিগন্যাল হ্যাকার্স সিএসবি)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md border border-slate-800 hover:border-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto space-y-4 py-4 pr-1 text-xs">
          
          {/* Bengali tip banner */}
          <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-900/40 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-slate-300 leading-relaxed text-[11.5px]">
              <strong className="text-emerald-300">টিপস:</strong> এখানে টার্গেট টিকটক আইডি এবং অভিযোগের ধরন সিলেক্ট করলে স্বয়ংক্রিয়ভাবে আন্তর্জাতিক আইনি ফরম্যাটে অ্যাডিশনাল টেক্সট তৈরি হবে। বাটন চেপে কপি করে সরাসরি টিকটক ফর্মে পেস্ট করে দিন।
            </p>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Target TikTok Username <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. @violator_username"
                value={targetUsername}
                onChange={(e) => setTargetUsername(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
              />
              <span className="text-[10.5px] text-slate-400">টার্গেট ইউজারের ইউজারনেম</span>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Violation Category <span className="text-rose-400">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white font-sans focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="tiktok-underage-report">TikTok Underage Report (Under 13 / Minor Safety)</option>
                <option value="tiktok-privacy-violation">TikTok Privacy Violation (Image/Video/Doxxing)</option>
                <option value="tiktok-facebook-copyright">TikTok → Facebook Copyright (Cross-Platform IP)</option>
                <option value="account-ban">Account Ban &amp; Severe Violations</option>
                <option value="impersonation">Impersonation &amp; Fake Profile</option>
                <option value="harassment-doxxing">Harassment, Doxxing &amp; Hate Speech</option>
                <option value="scams-fraud">Scams, Phishing &amp; Financial Fraud</option>
                <option value="copyright-dmca">Copyright &amp; DMCA Violation</option>
              </select>
              <span className="text-[10.5px] text-slate-400">রিপোর্টের মূল ক্যাটাগরি</span>
            </div>
          </div>

          {/* Target Video or Profile Link */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Target Video / Profile Link (Optional)
            </label>
            <input
              type="url"
              placeholder="https://www.tiktok.com/@username/video/..."
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* If impersonation, show legitimate username field */}
          {category === 'impersonation' && (
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Your Real Username (Original Account)
              </label>
              <input
                type="text"
                placeholder="e.g. @your_real_username"
                value={myUsername}
                onChange={(e) => setMyUsername(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
              />
            </div>
          )}

          {/* Specific details / evidence notes */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Specific Infraction Details (প্রমাণের বিবরণ)
            </label>
            <input
              type="text"
              placeholder="e.g. Leaking phone numbers, uploading non-consensual media, promoting phishing site"
              value={specificDetails}
              onChange={(e) => setSpecificDetails(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Generated Live Preview Box */}
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Generated Additional Text (লাইভ প্রিভিউ):
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {generatedText.length} Chars
              </span>
            </div>

            <pre className="p-3 bg-black/70 border border-emerald-500/30 rounded-lg text-slate-200 font-mono text-[11px] leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto select-all">
              {generatedText}
            </pre>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href="https://www.tiktok.com/legal/report/feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Open TikTok Feedback Form</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleCopy}
              className={`w-full sm:w-auto px-5 py-2 text-xs font-bold rounded-md shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                copied
                  ? 'bg-emerald-400 text-slate-950'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
