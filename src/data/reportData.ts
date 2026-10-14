import { ReportFolder } from '../types/report';

export const INITIAL_FOLDERS: ReportFolder[] = [
  // --- USER REQUESTED 3 PRIORITY FOLDERS ---
  {
    id: 'tiktok-underage-report',
    name: 'TikTok Underage Report',
    banglaName: 'টিকটক আন্ডার এজ / অপ্রাপ্তবয়স্ক অ্যাকাউন্ট রিপোর্ট',
    description: 'Statutory COPPA underage reporting links and additional legal scripts to ban accounts operated by children under 13 or underage LIVE hosts.',
    banglaDescription: '১৩ বছরের কম বয়সী শিশু ব্যবহারকারী এবং ১৮ বছরের নিচের লাইভ হোস্ট ব্যান করার সব অফিসিয়াল লিংক ও অতিরিক্ত টেক্সট।',
    iconName: 'Baby',
    items: [
      {
        id: 'underage-coppa-ban',
        title: 'TikTok Official Underage Removal (Under 13 Years - COPPA)',
        banglaTitle: '১৩ বছরের কম বয়সী শিশু অ্যাকাউন্ট (তাৎক্ষণিক ব্যান রিকুয়েস্ট)',
        category: 'tiktok-underage-report',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `URGENT CHILD SAFETY ALERT - MINOR UNDER 13 YEARS OLD (COPPA VIOLATION):

Target Account Handle: @[TARGET_USERNAME]
Target Profile URL: [PROFILE_URL]

Attention TikTok Youth Safety & Compliance Board:

I am formally reporting the account @[TARGET_USERNAME] for operating on TikTok in direct violation of the Children's Online Privacy Protection Act (COPPA) and TikTok's statutory minimum age requirement (13 years of age).

The operator appearing in and managing this profile is demonstrably a minor under the age of 13. Furthermore, public video disclosures and biographical comments explicitly confirm their underage status.

Under TikTok Community Guidelines on Minor Safety and Federal COPPA legislation, operating an account under 13 poses severe child privacy hazards. I request that your emergency child protection team immediately terminate this profile or place a permanent restriction until verified government photo identification is provided.

Priority: CRITICAL CHILD SAFETY
Action Required: Immediate Account Suspension`,
        banglaInstruction: 'প্রোফাইলে গিয়ে ৩ ডটে ট্যাপ করে Report > Minor Safety / Under 13 নির্বাচন করুন। তারপর এই টেক্সটটি কপি করে বসিয়ে দিন।',
        severity: 'Critical',
        tags: ['Underage Report', 'Under 13', 'COPPA', 'Child Safety', 'Instant Ban']
      },
      {
        id: 'underage-live-stream-ban',
        title: 'Underage TikTok LIVE Host (Under 18 Live Stream Ban)',
        banglaTitle: '১৮ বছরের কম বয়সীর লাইভ হোস্ট করা (লাইভ ব্যান রিকুয়েস্ট)',
        category: 'tiktok-underage-report',
        officialLink: 'https://support.tiktok.com/en/live-gifts-wallet/tiktok-live/report-a-live-video',
        additionalText: `UNDERAGE LIVE STREAMING VIOLATION REPORT (AGE REQUIREMENT: 18+):

Host Account: @[TARGET_USERNAME]
Session Reference: Currently Active / Recent TikTok LIVE Broadcast

I am submitting this urgent report regarding an ongoing/recent TikTok LIVE broadcast hosted by @[TARGET_USERNAME]. TikTok platform policy strictly dictates that LIVE creators and broadcasters must be at least 18 years old to host sessions and receive virtual gifts.

The broadcaster in this session is demonstrably below 18 years of age. Allowing minors to host live broadcasts exposes them to grooming, cyber abuse, and financial exploitation.

Please immediately terminate this live transmission, revoke the user's LIVE streaming privileges, and enforce age restriction protocols on this profile.`,
        banglaInstruction: '১৮ বছরের নিচে কেউ লাইভ করলে এই টেক্সট ও লিংক দিয়ে সরাসরি লাইভ পারমিশন বাতিল করান।',
        severity: 'High',
        tags: ['Underage LIVE', 'Under 18', 'Live Stream Ban', 'Minor Broadcaster']
      },
      {
        id: 'underage-child-exploitation',
        title: 'Minor Exploitation, Endangerment & Child Safety Alert',
        banglaTitle: 'শিশু শোষণ, অপব্যবহার ও অপ্রাপ্তবয়স্কদের বিপদাপন্ন করা',
        category: 'tiktok-underage-report',
        officialLink: 'https://support.tiktok.com/en/safety-hc/account-and-user-safety/child-safety',
        additionalText: `CRITICAL EMERGENCY: MINOR ENDANGERMENT & CHILD EXPLOITATION:

Reported Account / Content: @[TARGET_USERNAME]
Infringing Video URL: [VIDEO_URL]

This profile is actively propagating, soliciting, or exposing minors to hazardous situations, inappropriate interaction, or child exploitation. Such conduct is strictly forbidden under TikTok Zero-Tolerance Child Sexual Abuse and Exploitation (CSAE) policies.

Please execute an immediate takedown of all associated media, suspend this profile permanently, and forward transmission logs to relevant child safety clearinghouses (NCMEC referral where applicable).

Priority Level: MAXIMUM EMERGENCY`,
        banglaInstruction: 'শিশুদের কোনো অনুপযুক্ত কন্টেন্ট বা বিপদের মুখোমুখি হতে দেখলে অবিলম্বে এই স্ক্রিপ্ট দিয়ে রিপোর্ট করুন।',
        severity: 'Critical',
        tags: ['Child Exploitation', 'CSAM', 'Emergency Child Safety']
      },
      {
        id: 'underage-fake-birthday',
        title: 'Age Misrepresentation & Fake Birth Date Deception',
        banglaTitle: 'ভুয়া জন্মতারিখ দিয়ে বয়স লুকানো আইডি রিপোর্ট',
        category: 'tiktok-underage-report',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `INVESTIGATION REQUEST: FALSIFIED AGE PROFILE REGISTRATION:

Account Under Report: @[TARGET_USERNAME]

This user intentionally misrepresented their birth date upon account registration to circumvent TikTok's youth protection filters and age-gated restrictions. Direct visual evidence and vocal characteristics across recent videos confirm the operator is a child under the legal age threshold.

Please mandate immediate age verification via formal government ID authentication or permanently deactivate this account to maintain platform safety.`,
        banglaInstruction: 'ভুয়া জন্মতারিখ দিয়ে অ্যাকাউন্ট খুলে চালানো শিশুদের বিরুদ্ধে এই রিপোর্টটি দিন।',
        severity: 'High',
        tags: ['Falsified Age', 'Minor Protection', 'ID Verification']
      }
    ]
  },
  {
    id: 'tiktok-privacy-violation',
    name: 'TikTok Privacy Violation Report',
    banglaName: 'টিকটক প্রাইভেসি লঙ্ঘন ও গোপন তথ্য ফাঁস রিপোর্ট',
    description: 'Official TikTok privacy complaint portal links and high-impact legal scripts to remove unauthorized photos, videos, phone numbers, and leaked personal data.',
    banglaDescription: 'অনুমতি ছাড়া ছবি/ভিডিও আপলোড, ফোন নম্বর ও গোপন তথ্য ফাঁস (Doxxing) ঠেকানোর সরাসরি অফিসিয়াল প্রাইভেসি লিংক ও টেক্সট।',
    iconName: 'ShieldAlert',
    items: [
      {
        id: 'privacy-personal-media-removal',
        title: 'TikTok Privacy Form - Personal Image / Video Removal Without Consent',
        banglaTitle: 'অনুমতি ছাড়া ব্যক্তিগত ছবি বা ভিডিও আপলোড (রিমুভাল রিকুয়েস্ট)',
        category: 'tiktok-privacy-violation',
        officialLink: 'https://www.tiktok.com/legal/report/privacy',
        additionalText: `FORMAL PRIVACY COMPLAINT - UNAUTHORIZED PERSONAL MEDIA DISTRIBUTION:

Target Video URL: [VIDEO_URL]
Offending Account Handle: @[TARGET_USERNAME]
Subject of Media: Myself / My Family Member

To the TikTok Legal & Global Privacy Enforcement Team:

I am formally filing a Privacy Infringement Notice pursuant to TikTok Privacy Guidelines and applicable data protection legislation (including GDPR, CCPA, and statutory privacy laws).

The video cited above contains my recognizable image, likeness, or voice, published without my knowledge, explicit permission, or prior written consent. The unauthorized publication of this media violates my fundamental right to personal privacy and has inflicted unwarranted distress and harassment.

I demand the immediate deletion of this video across all TikTok servers and caching systems.

Full Legal Name: [MY_FULL_NAME]
Contact Email: [MY_CONTACT_EMAIL]
Statement: I confirm under penalty of perjury that I am the individual depicted and have not consented to this publication.`,
        banglaInstruction: 'আপনার অনুমতি ছাড়া আপনার ছবি বা ভিডিও টিকটকে আপলোড করা হলে এই টেক্সট দিয়ে সরাসরি প্রাইভেসি ফর্মে রিপোর্ট করুন।',
        severity: 'Critical',
        tags: ['Privacy Violation', 'Consent Breach', 'Video Removal', 'GDPR']
      },
      {
        id: 'privacy-doxxing-phone-leak',
        title: 'Doxxing & Leaked Private Phone Number, Address or WhatsApp Chat',
        banglaTitle: 'ফোন নাম্বার, ঠিকানা বা গোপন চ্যাট ফাঁস (ডক্সিং জরুরি রিপোর্ট)',
        category: 'tiktok-privacy-violation',
        officialLink: 'https://www.tiktok.com/legal/report/privacy',
        additionalText: `EMERGENCY ESCALATION: MALICIOUS DOXXING & PRIVATE DATA LEAK (PII):

Target Profile: @[TARGET_USERNAME]
Violating Post URL: [POST_OR_VIDEO_URL]

URGENT NOTICE:
The reported TikTok user has published personally identifiable information (PII) including my private telephone number, residential address, personal WhatsApp chat transcripts, or national identification credentials without my consent.

This malicious doxxing campaign is inciting targeted threats, cyberstalking, and immediate risk to my physical and digital safety. TikTok's Community Guidelines strictly prohibit doxxing and the distribution of private personal documents.

Please immediately take down this violating content and issue a permanent community strike to @[TARGET_USERNAME].`,
        banglaInstruction: 'কারো ফোন নাম্বার, ঠিকানা বা পার্সোনাল চ্যাট ভিডিওতে ফাঁস করলে সাথে সাথে এটি ব্যবহার করুন।',
        severity: 'Critical',
        tags: ['Doxxing', 'PII Leak', 'Phone Number Leak', 'Emergency Takedown']
      },
      {
        id: 'privacy-nonconsensual-recording',
        title: 'Unauthorized Recording in Private Space / Hidden Camera',
        banglaTitle: 'অনুমতি ছাড়া গোপন ক্যামেরা বা ব্যক্তিগত জায়গায় ভিডিও ধারণ',
        category: 'tiktok-privacy-violation',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `UNAUTHORIZED PRIVATE PREMISES RECORDING COMPLAINT:

Account: @[TARGET_USERNAME]
Video Link: [VIDEO_URL]

The video hosted at the specified URL captures recordings made secretly or without consent inside a private residential property / private restricted zone where there is a reasonable expectation of privacy.

Publishing surreptitious recordings without explicit consent violates TikTok Privacy Standards and statutory surveillance laws. Please expedite the removal of this footage.`,
        banglaInstruction: 'গোপন ক্যামেরা বা অনুমতি ছাড়া কারো ব্যক্তিগত জায়গায় ভিডিও করে পোস্ট করলে তা রিমুভ করার আবেদন।',
        severity: 'High',
        tags: ['Hidden Camera', 'Surreptitious Recording', 'Private Property']
      },
      {
        id: 'privacy-slander-campaign',
        title: 'Defamatory Private Life Slander & Leaked Photos Campaign',
        banglaTitle: 'ব্যক্তিগত চরিত্র হনন ও ছবি নিয়ে কুরুচিপূর্ণ অপপ্রচার',
        category: 'tiktok-privacy-violation',
        officialLink: 'https://www.tiktok.com/legal/report/privacy',
        additionalText: `MALICIOUS DEFAMATION & PRIVATE INTRUSION REPORT:

Target Account: @[TARGET_USERNAME]

This profile is waging a systematic smear campaign disseminating altered personal photos, private audio recordings, and malicious defamatory falsehoods regarding private family life. 

This violates platform policies against privacy invasion and harmful defamation. Please purge the defamatory media and suspend this profile.`,
        banglaInstruction: 'ব্যক্তিগত চরিত্র হনন বা গোপন ছবি নিয়ে অপপ্রচারের বিরুদ্ধে রিপোর্ট।',
        severity: 'High',
        tags: ['Defamation', 'Private Intrusion', 'Smear Campaign']
      }
    ]
  },
  {
    id: 'tiktok-facebook-copyright',
    name: 'TikTok → Facebook Copyright Report',
    banglaName: 'টিকটক ও ফেসবুক কপিরাইট লঙ্ঘন রিপোর্ট (Cross-Platform IP)',
    description: 'Direct DMCA and intellectual property takedown links and legal scripts for stolen Facebook videos uploaded to TikTok or TikTok content stolen to Facebook.',
    banglaDescription: 'ফেসবুকের ভিডিও চুরি করে টিকটকে দিলে অথবা টিকটকের ভিডিও ফেসবুকে চুরি করে আপলোড করলে কপিরাইট স্ট্রাইক দেওয়ার সম্পূর্ণ রিপোর্ট ও টেক্সট।',
    iconName: 'FileCheck',
    items: [
      {
        id: 'copyright-fb-to-tiktok',
        title: 'Facebook Original Video Stolen & Uploaded to TikTok (TikTok DMCA Form)',
        banglaTitle: 'ফেসবুক থেকে ভিডিও চুরি করে টিকটকে আপলোড (কপিরাইট স্ট্রাইক)',
        category: 'tiktok-facebook-copyright',
        officialLink: 'https://www.tiktok.com/legal/report/Copyright',
        additionalText: `DMCA COPYRIGHT TAKEDOWN NOTICE (17 U.S.C. § 512(c)) - FACEBOOK TO TIKTOK THEFT:

To TikTok Copyright & IP Legal Operations:

I am the copyright owner (or authorized intellectual property agent) of original video content originally published on Facebook.

1. Original Facebook Work URL: [ORIGINAL_FACEBOOK_POST_OR_REEL_URL]
Original Publication Date/Timestamp on Facebook: [ORIGINAL_DATE]
Copyright Owner Facebook Page / Profile: [FACEBOOK_PAGE_NAME_OR_URL]

2. Infringing TikTok Video URL: [INFRINGING_TIKTOK_VIDEO_URL]
Infringing TikTok Handle: @[TARGET_USERNAME]

Description of Infringement:
The user @[TARGET_USERNAME] has downloaded my original creative video from Facebook without license, consent, or attribution, and re-uploaded it in its entirety to TikTok. 

Good Faith Statement:
I have a good faith belief that the use of the copyrighted material identified above is not authorized by the copyright owner, its agent, or the law. The information in this notification is accurate, and under penalty of perjury, I confirm that I am authorized to act on behalf of the owner of an exclusive right allegedly infringed.

Please take down the infringing TikTok video immediately.

Signed: [MY_FULL_LEGAL_NAME]
Owner Title / Role: Content Creator & Original Rights Holder
Contact Email: [MY_CONTACT_EMAIL]
Date: [CURRENT_DATE]`,
        banglaInstruction: 'ফেসবুকের মূল ভিডিও বা রিলস কেউ চুরি করে টিকটকে আপলোড করলে টিকটক কপিরাইট ফর্মে এই সম্পূর্ণ নোটিশটি সাবমিট করুন।',
        severity: 'High',
        tags: ['Facebook to TikTok', 'DMCA Notice', 'Video Theft', 'Copyright Takedown']
      },
      {
        id: 'copyright-tiktok-to-fb',
        title: 'TikTok Video Stolen & Uploaded to Facebook / Reels (Meta Copyright Form)',
        banglaTitle: 'টিকটকের ভিডিও চুরি করে ফেসবুকে আপলোড (মেটা কপিরাইট ক্লেইম)',
        category: 'tiktok-facebook-copyright',
        officialLink: 'https://www.facebook.com/help/contact/1758255661104383',
        additionalText: `META / FACEBOOK DMCA INFRINGEMENT CLAIM - TIKTOK TO FACEBOOK THEFT:

To Meta Rights Enforcement & Facebook Copyright Operations:

I am filing a formal Notice of Copyright Infringement for unauthorized re-distribution of my original TikTok creative video on Facebook / Meta platforms.

1. Original TikTok Source URL: [MY_ORIGINAL_TIKTOK_VIDEO_URL]
Original TikTok Creator Profile: @[MY_TIKTOK_USERNAME]
Original Upload Date: [ORIGINAL_UPLOAD_DATE]

2. Infringing Facebook Post / Reel URL: [INFRINGING_FACEBOOK_POST_OR_REEL_URL]
Infringing Facebook Page / User: [INFRINGING_FACEBOOK_PAGE_OR_PROFILE]

Details of Piracy:
My original audiovisual production was ripped directly from TikTok (retaining my original likeness and audio) and published to Facebook Reels without authorization or licensing, in violation of Meta Terms of Service and Copyright Law.

I hereby affirm under penalty of perjury that I am the rightful author and owner of this material. Please remove the infringing Facebook post / Reel immediately.

Authorized Signature: [MY_FULL_NAME]
Email: [MY_EMAIL]`,
        banglaInstruction: 'আপনার টিকটক ভিডিও কেউ ফেসবুকে চুরি করে রিল বা ভিডিও হিসেবে আপলোড করলে মেটার অফিশিয়াল কপিরাইট ফর্মে এটি পেস্ট করুন।',
        severity: 'High',
        tags: ['TikTok to Facebook', 'Meta DMCA', 'Facebook Reels Theft', 'Meta Rights Manager']
      },
      {
        id: 'copyright-cross-audio-theft',
        title: 'Cross-Platform Audio & Music Copyright Claim (TikTok ↔ Facebook Audio Theft)',
        banglaTitle: 'ফেসবুক ও টিকটকের মিউজিক / ভয়েস অডিও চুরি কপিরাইট ক্লেইম',
        category: 'tiktok-facebook-copyright',
        officialLink: 'https://www.tiktok.com/legal/report/Copyright',
        additionalText: `CROSS-PLATFORM AUDIO & SOUND RECORDING INFRINGEMENT NOTICE:

Original Audio Source (Facebook / Sound Library): [ORIGINAL_AUDIO_LINK_OR_POST]
Original Track Title / Artist: [TRACK_TITLE] by [ARTIST_NAME]

Infringing TikTok Post using Unlicensed Audio: [TIKTOK_VIDEO_URL]
Infringing User: @[TARGET_USERNAME]

The audio track incorporated in this TikTok video is an unauthorized extraction of my master audio recording first published on Facebook. No synchronization license or commercial usage permission was granted.

Please mute or remove the soundtrack from this video immediately to prevent further copyright infringement.`,
        banglaInstruction: 'ফেসবুকের কোনো অরিজিনাল অডিও বা গান অনুমতি ছাড়া টিকটকে ব্যবহার করলে অডিও মিউট বা রিমুভ করার নোটিশ।',
        severity: 'Medium',
        tags: ['Audio Theft', 'Music Copyright', 'Voice Theft', 'Sound Takedown']
      },
      {
        id: 'copyright-fb-page-impostor',
        title: 'Facebook Business Brand & Trademark Stolen by TikTok Impostor',
        banglaTitle: 'ফেসবুক পেজ ও ব্র্যান্ডের কনটেন্ট চুরি করে টিকটকে ফেক পেজ তৈরি',
        category: 'tiktok-facebook-copyright',
        officialLink: 'https://www.tiktok.com/legal/report/Copyright',
        additionalText: `COMMERCIAL TRADEMARK & BRAND ASSET PIRACY COMPLAINT:

Registered Brand / Business: [BRAND_NAME]
Official Facebook Business Presence: [FACEBOOK_BUSINESS_PAGE_URL]

Deceptive TikTok Copycat Account: @[TARGET_USERNAME]
Infringing TikTok Profile URL: [TIKTOK_PROFILE_URL]

The aforementioned TikTok account has unlawfully scraped media assets, brand watermarks, and product showcase videos directly from our official Facebook Business Page to mislead consumers into fraudulent transactions.

We request swift de-indexing and intellectual property takedown of this infringing copycat entity.`,
        banglaInstruction: 'ফেসবুক পেজ বা ব্যবসার ভিডিও চুরি করে টিকটকে ভুয়া পেজ চালালে এই টেক্সট ব্যবহার করুন।',
        severity: 'High',
        tags: ['Brand Protection', 'Facebook Page Rip', 'Commercial Piracy']
      }
    ]
  },

  // --- ADDITIONAL STANDARD CATEGORIES ---
  {
    id: 'account-ban',
    name: 'Account Ban & Permanent Suspension',
    banglaName: 'অ্যাকাউন্ট ব্যান ও পার্মানেন্ট সাসপেনশন রিপোর্ট',
    description: 'Direct reporting links and heavy violation scripts to report accounts engaging in severe terms of service breaches.',
    banglaDescription: 'টিকটক পলিসির গুরুতর লঙ্ঘনকারী অ্যাকাউন্ট দ্রুত রিপোর্ট ও ব্যান করার জন্য অফিসিয়াল লিংক ও অতিরিক্ত টেক্সট।',
    iconName: 'ShieldAlert',
    items: [
      {
        id: 'ban-tos-violation',
        title: 'Severe Terms of Service & Community Violation',
        banglaTitle: 'মারাত্মক কমিউনিটি গাইডলাইন লঙ্ঘন রিপোর্ট',
        category: 'account-ban',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `Dear TikTok Trust & Safety Team,

I am formally submitting an urgent report against the account @[TARGET_USERNAME] (Profile URL: [PROFILE_URL]). This user has engaged in continuous and intentional violations of TikTok Community Guidelines and Terms of Service.

Specifically, this account is distributing unauthorized prohibited content, promoting harmful activities, and demonstrating non-compliance with platform safety standards. This poses an ongoing risk to our community members.

I request that your senior moderation team conduct an immediate manual audit of this profile, apply appropriate disciplinary sanctions, and issue a permanent suspension under your Zero-Tolerance Enforcement Policy.

Profile Reference: @[TARGET_USERNAME]
Timestamp: [DATE_TIME]
Evidence: Documented across public profile videos and biography.`,
        banglaInstruction: 'প্রোফাইলে ৩ ডটে ট্যাপ করে Report > Terms of Service নির্বাচন করুন। এডিশনাল বক্সে এই লেখাটি কপি করে বসিয়ে [TARGET_USERNAME] পরিবর্তন করুন।',
        severity: 'Critical',
        tags: ['Account Ban', 'Zero Tolerance', 'TOS Violation']
      },
      {
        id: 'ban-dangerous-org',
        title: 'Dangerous Organizations & Terrorist Content',
        banglaTitle: 'বিপজ্জনক ব্যক্তি ও সন্ত্রাসমূলক কার্যকলাপ রিপোর্ট',
        category: 'account-ban',
        officialLink: 'https://www.tiktok.com/community-guidelines/en/violent-extremism/',
        additionalText: `URGENT - TIKTOK TRUST & SAFETY ESCALATION:

This report documents an egregious breach of the Dangerous Individuals and Organizations Policy by @[TARGET_USERNAME].

The profile is publishing, endorsing, or facilitating material associated with violent extremism, hate symbols, or prohibited organizations. Such content is explicitly banned under TikTok Community Guidelines Section 2.

Due to the imminent risk of real-world harm, please initiate priority content removal and permanently deactivate this account immediately to preserve platform safety.

Reported Profile: @[TARGET_USERNAME]
Safety Category: Dangerous Organizations & Violent Extremism`,
        banglaInstruction: 'সন্ত্রাসী বা মারাত্মক বিপজ্জনক কার্যকলাপকারী আইডির ক্ষেত্রে ব্যবহার করুন। অগ্রাধিকারের সাথে সরাসরি রিভিউ করা হয়।',
        severity: 'Critical',
        tags: ['Extremism', 'Terrorism', 'Dangerous Organizations']
      },
      {
        id: 'ban-repeated-strikes',
        title: 'Repeated Policy Violations & Strike Evader',
        banglaTitle: 'বারবার নিয়ম লঙ্ঘন ও সতর্কবার্তা অমান্যকারী আইডি',
        category: 'account-ban',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `Attention TikTok Enforcement Department:

Subject: Request for Permanent Account Deactivation due to Repeat Policy Infringements.
Target Handle: @[TARGET_USERNAME]

This user repeatedly republishes content that has previously been removed by automated and manual filters. By re-uploading violating media and deliberately circumventing moderation systems, this account operates in bad faith.

Under your Repeat Offender Enforcement Framework, accounts accumulating multiple severe guideline violations are subject to automatic terminal bans. Please review their infraction history and terminate access.`,
        banglaInstruction: 'যেসব অ্যাকাউন্ট বারবার সতর্কবার্তা পেয়েও নিয়ম ভাঙছে তাদের সরাসরি পার্মানেন্ট সাসপেনশনের জন্য এই টেক্সট ব্যবহার করুন।',
        severity: 'High',
        tags: ['Repeat Offender', 'Strike Policy', 'Ban Evader']
      }
    ]
  },
  {
    id: 'impersonation',
    name: 'Impersonation & Fake Identity',
    banglaName: 'ভুয়া প্রোফাইল ও ছদ্মবেশ ধারণ (ইমপারসোনেশন)',
    description: 'Forms and official statements to report individuals creating duplicate, fake, or deceiving profiles pretending to be you or a brand.',
    banglaDescription: 'আপনার বা অন্য কারো নাম ও ছবি দিয়ে খোলা ফেক আইডি বন্ধ করার অফিসিয়াল ফরম ও অভিযোগ টেক্সট।',
    iconName: 'UserX',
    items: [
      {
        id: 'impersonate-personal',
        title: 'Fake Account Pretending to Be Me (Identity Theft)',
        banglaTitle: 'আমার নাম ও ছবি ব্যবহার করে খোলা ফেক অ্যাকাউন্ট',
        category: 'impersonation',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `OFFICIAL IMPERSONATION & IDENTITY THEFT NOTICE:

Target Impersonating Account: @[TARGET_USERNAME] (Link: [TARGET_PROFILE_URL])
Legitimate Original Account: @[MY_REAL_USERNAME]

The reported user is willfully impersonating my personal identity without my consent. They have copied my name, display photo, biography, and original content to mislead followers, deceive other users, and damage my reputation.

This is a direct violation of TikTok's Integrity & Authenticity Policy regarding Impersonation. I demand that this fraudulent account be terminated immediately. I am prepared to submit government photo identification upon request to corroborate legal ownership.`,
        banglaInstruction: 'আপনার কোনো নকল আইডি থাকলে [TARGET_USERNAME] এ ফেক আইডির নাম এবং [MY_REAL_USERNAME] এ আপনার আসল নাম বসিয়ে রিপোর্ট করুন।',
        severity: 'Critical',
        tags: ['Identity Theft', 'Fake Account', 'Impersonation']
      },
      {
        id: 'impersonate-public-figure',
        title: 'Impersonating a Celebrity / Public Creator',
        banglaTitle: 'সেলিব্রেটি বা ভেরিফাইড ক্রিয়েটরের ফেক প্রোফাইল',
        category: 'impersonation',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `Impersonation Report - Public Figure & Verified Creator Protection:

Reported Handle: @[TARGET_USERNAME]
Actual Public Entity / Creator: @[REAL_CREATOR_HANDLE]

The flagged account is posing as an authorized official representative or direct account of the referenced public figure without proper disclaimer or parody disclosure. The account actively collects followers and distributes unauthorized announcements under false pretenses.

Please enforce TikTok's Impersonation Guidelines and suspend the impostor profile.`,
        banglaInstruction: 'কোনো জনপ্রিয় ক্রিয়েটরের নামে ফেক আইডি খুলে প্রতারণা করা হলে এই ফরম্যাট ব্যবহার করুন।',
        severity: 'High',
        tags: ['Celebrity Clone', 'Creator Protection', 'False Representation']
      },
      {
        id: 'impersonate-brand',
        title: 'Trademark & Business Brand Impersonation',
        banglaTitle: 'ব্র্যান্ড বা ব্যবসা প্রতিষ্ঠানের ভুয়া অ্যাকাউন্ট',
        category: 'impersonation',
        officialLink: 'https://www.tiktok.com/legal/report/Copyright',
        additionalText: `Trademark & Commercial Impersonation Complaint:

Entity Infringing: @[TARGET_USERNAME]
Registered Brand Name: [BRAND_NAME]

The referenced TikTok profile unauthorizedly utilizes our registered brand name, trademarked logos, and marketing assets to operate a deceptive commercial storefront. Customers are being defrauded under the belief that this is our authorized corporate presence.

We request swift de-indexing and termination of this fraudulent commercial entity.`,
        banglaInstruction: 'কোম্পানি বা ব্র্যান্ডের ভুয়া পেজ সরিয়ে দেওয়ার জন্য এই টেক্সট ব্যবহার করুন।',
        severity: 'High',
        tags: ['Brand Protection', 'Trademark', 'Fake Storefront']
      }
    ]
  },
  {
    id: 'harassment-doxxing',
    name: 'Harassment, Bullying & Hate Speech',
    banglaName: 'হয়রানি, বুলিং ও বিদ্বেষমূলক বক্তব্য',
    description: 'Tools and statements against cyber abuse, hate groups, and defamatory attacks.',
    banglaDescription: 'অনলাইন বুলিং, হ্যারাসমেন্ট এবং তীব্র বিদ্বেষ ছড়ানো বন্ধ করার রিপোর্ট।',
    iconName: 'Flame',
    items: [
      {
        id: 'harass-hate-speech',
        title: 'Severe Hate Speech, Slurs & Dehumanization',
        banglaTitle: 'জাতি, ধর্ম বা বর্ণ নিয়ে বিদ্বেষমূলক বক্তব্য',
        category: 'harassment-doxxing',
        officialLink: 'https://www.tiktok.com/community-guidelines/en/hate-speech/',
        additionalText: `Community Standards Violation: Hate Speech and Discriminatory Harassment.
Target Profile: @[TARGET_USERNAME]

The designated profile and its published broadcasts contain severe hate speech, including derogatory epithets, incitement of hostility against protected groups, and systematic dehumanization.

TikTok's Community Guidelines strictly prohibit attacks based on race, ethnicity, religious beliefs, gender, or national origin. We request complete content removal and account sanctions.`,
        banglaInstruction: 'ধর্মীয় বা জাতিগত বিদ্বেষ ছড়ানো অ্যাকাউন্ট বন্ধের জন্য এই ফরম্যাট উপযোগী।',
        severity: 'High',
        tags: ['Hate Speech', 'Discrimination', 'Protected Group']
      },
      {
        id: 'harass-blackmail',
        title: 'Blackmail, Extortion & Revenge Media',
        banglaTitle: 'ব্ল্যাকমেইলিং ও চরিত্র হননের হুমকি',
        category: 'harassment-doxxing',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `CRITICAL SAFETY COMPLAINT - NON-CONSENSUAL CONTENT & EXTORTION:

Account: @[TARGET_USERNAME]

This user is attempting extortion and blackmail by threatening the distribution of private, non-consensual personal media. The perpetrator is utilizing direct messages and public posts to intimidate and demand financial or personal concessions.

This behavior constitutes unlawful digital extortion and severe harassment. Immediate suspension of this profile and preservation of transmission logs for cybercrime authorities is urgently requested.`,
        banglaInstruction: 'ব্ল্যাকমেইল বা হুমকির বিরুদ্ধে টিকটক সেফটি টিমের কাছে দ্রুত অ্যাকশন পাওয়ার ফরম্যাট।',
        severity: 'Critical',
        tags: ['Blackmail', 'Extortion', 'Revenge Media']
      }
    ]
  },
  {
    id: 'scams-fraud',
    name: 'Scams, Phishing & Financial Fraud',
    banglaName: 'স্ক্যাম, ফিশিং ও আর্থিক প্রতারণা',
    description: 'Report malicious phishing links, fake crypto investment schemes, and paid verification scams.',
    banglaDescription: 'ফিশিং লিংক, ফেক ক্রিপ্টো গিভঅ্যাওয়ে এবং টাকা হাতিয়ে নেওয়া অ্যাকাউন্টের বিরুদ্ধে রিপোর্ট।',
    iconName: 'AlertTriangle',
    items: [
      {
        id: 'scam-phishing-bio',
        title: 'Phishing Links in Bio & Credential Theft',
        banglaTitle: 'বায়োতে ফিশিং / হ্যাকিং লিংক ও পাসওয়ার্ড চুরি',
        category: 'scams-fraud',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `SECURITY WARNING - MALICIOUS PHISHING & CREDENTIAL HARVESTING:

Reported Account: @[TARGET_USERNAME]
Malicious Link in Bio: [BIO_LINK]

The link placed in this user's bio directs unsuspecting users to a fraudulent landing page that mimics TikTok login portals or external banking platforms to harvest credentials and steal sessions.

This is a critical security vulnerability and cyber threat under TikTok's Frauds & Scams Policy. Please disable the URL immediately and terminate the host profile.`,
        banglaInstruction: 'বায়োতে ক্ষতিকর বা ভুয়া ওয়েবসাইট লিংক থাকলে এই অতিরিক্ত টেক্সট সহ রিপোর্ট করুন।',
        severity: 'Critical',
        tags: ['Phishing', 'Credential Harvester', 'Malware']
      },
      {
        id: 'scam-financial-crypto',
        title: 'Fake Investment, Ponzi & Crypto Schemes',
        banglaTitle: 'ভুয়া ইনভেস্টমেন্ট ও ক্রিপ্টো প্রতারণা স্কিম',
        category: 'scams-fraud',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `FRAUD ALERT: Unregulated Financial Scam & High-Yield Fraud.
Account: @[TARGET_USERNAME]

This profile operates a deceptive financial scheme promising impossible investment returns, fake cryptocurrency doubling services, and counterfeit payment confirmations to defraud users.

TikTok explicitly forbids financial exploitation and predatory schemes. Please audit this account and suspend it to prevent further monetary loss to the community.`,
        banglaInstruction: 'অনলাইনে দ্বিগুণ লাভ বা ক্রিপ্টো স্ক্যামের ফাঁদ পাতা অ্যাকাউন্টের বিরুদ্ধে ব্যবহার করুন।',
        severity: 'High',
        tags: ['Crypto Scam', 'Ponzi', 'Financial Fraud']
      }
    ]
  },
  {
    id: 'suicide-harm',
    name: 'Self-Harm & Dangerous Stunts',
    banglaName: 'আত্মঘাতী আচরণ ও বিপজ্জনক স্টান্ট',
    description: 'Immediate intervention links for content showing or encouraging suicide, self-injury, and lethal challenges.',
    banglaDescription: 'আত্মহত্যার প্ররোচনা এবং জীবনের জন্য হুমকিস্বরূপ বিপজ্জনক স্টান্ট অপসারণের লিংক।',
    iconName: 'HeartHandshake',
    items: [
      {
        id: 'harm-suicide-crisis',
        title: 'Suicide Promotion & Self-Injury Encouragement',
        banglaTitle: 'আত্মঘাতী চিন্তা বা আত্মহত্যার প্ররোচনামূলক ভিডিও',
        category: 'suicide-harm',
        officialLink: 'https://support.tiktok.com/en/safety-hc/account-and-user-safety/suicide-and-self-harm',
        additionalText: `URGENT LIFE-SAFETY INTERVENTION REQUIRED:

Target User: @[TARGET_USERNAME]
Video Link: [VIDEO_URL]

The published content displays, encourages, or instructs methods of suicide or self-inflicted harm. This constitutes an immediate danger to human life.

Please immediately deploy crisis support interventions, take down the broadcast, and apply emergency welfare checks in accordance with TikTok's Life Safety protocols.`,
        banglaInstruction: 'জীবনহানির হুমকি বা আত্মঘাতী পোস্ট দেখলে সাথে সাথে এই জরুরি রিপোর্ট পাঠান।',
        severity: 'Critical',
        tags: ['Life Safety', 'Self Harm', 'Emergency Helpline']
      }
    ]
  },
  {
    id: 'official-forms',
    name: 'Official TikTok Direct Forms & Portals',
    banglaName: 'অফিসিয়াল টিকটক ডিরেক্ট ফর্ম ও হেল্প লিংক',
    description: 'All official TikTok web forms, privacy request channels, and feedback submission portals.',
    banglaDescription: 'টিকটকের সরাসরি হেল্প ডেস্কে টিকেট কাটার সব অফিশিয়াল ওয়েবসাইট লিংক।',
    iconName: 'ExternalLink',
    items: [
      {
        id: 'form-feedback',
        title: 'TikTok Official Global Feedback & Ticket Form',
        banglaTitle: 'টিকটক গ্লোবাল ফিডব্যাক ও সাপোর্ট টিকেট ফর্ম',
        category: 'official-forms',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `Topic: Report a problem / General inquiry
Account: @[YOUR_OR_TARGET_USERNAME]
Email: [YOUR_CONTACT_EMAIL]

Description of Issue:
[ENTER DETAILED REPORT OR COPY ONE OF THE ADDITIONAL TEXT TEMPLATES FROM OUR FOLDERS]`,
        banglaInstruction: 'টিকটকের মূল টিকিট পোর্টাল। এখান থেকে যেকোনো সমস্যা বা অভিযোগ লিখিতভাবে পাঠানো যায়।',
        severity: 'Medium',
        tags: ['Official Form', 'Direct Ticket', 'Help Center'],
        isOfficialForm: true
      },
      {
        id: 'form-privacy',
        title: 'TikTok Privacy & Personal Data Rights Form',
        banglaTitle: 'প্রাইভেসি রাইটস ও ব্যক্তিগত ডেটা রিমুভাল ফর্ম',
        category: 'official-forms',
        officialLink: 'https://www.tiktok.com/legal/report/privacy',
        additionalText: `Privacy Request Type: Removal of Personal Information / Image of Myself
Country/Region: [YOUR_COUNTRY]
Target Content Link: [LINK_TO_CONTENT]

I am requesting the removal of personal media distributed without my consent under global privacy regulations.`,
        banglaInstruction: 'আপনার কোনো গোপন তথ্য বা ভিডিও অনুমতি ছাড়া টিকটকে থাকলে এই ফর্ম দিয়ে ডিলিট করান।',
        severity: 'High',
        tags: ['Privacy Rights', 'Data Removal', 'GDPR / CCPA'],
        isOfficialForm: true
      },
      {
        id: 'form-copyright-portal',
        title: 'TikTok Legal Copyright & Trademark Portal',
        banglaTitle: 'কপিরাইট ও ট্রেডমার্ক আইনি অভিযোগ পোর্টাল',
        category: 'official-forms',
        officialLink: 'https://www.tiktok.com/legal/report/Copyright',
        additionalText: `Legal Rights Holder: [YOUR_LEGAL_NAME]
Copyright Registration / Ownership Evidence: [EVIDENCE_DETAILS]
Original Material: [ORIGINAL_URL]

Infringing TikTok URLs:
1. [INFRINGING_URL_1]
2. [INFRINGING_URL_2]`,
        banglaInstruction: 'আইনিভাবে কোনো কন্টেন্ট টেকডাউন করানোর অফিসিয়াল সরকারি বা বাণিজ্যিক পোর্টাল।',
        severity: 'High',
        tags: ['Legal Portal', 'DMCA Form', 'Copyright Registry'],
        isOfficialForm: true
      }
    ]
  },
  {
    id: 'account-appeal',
    name: 'Account Unban & Recovery Appeal',
    banglaName: 'অ্যাকাউন্ট আনব্যান ও রিকভারি আপিল ফরম্যাট',
    description: 'Professional legal appeal statements to unban innocently suspended accounts or recover hacked profiles.',
    banglaDescription: 'ভুলবশত ব্যান হওয়া আইডি আনব্যান করার আবেদন এবং হ্যাকড আইডি ফিরে পাওয়ার আবেদন স্ক্রিপ্ট।',
    iconName: 'KeySquare',
    items: [
      {
        id: 'appeal-unban-wrongful',
        title: 'Wrongful Permanent Account Ban Appeal',
        banglaTitle: 'অ্যাকাউন্ট ভুলবশত পার্মানেন্ট ব্যান আপিল স্ক্রিপ্ট',
        category: 'account-appeal',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `OFFICIAL APPEAL: Request for Review of Wrongful Account Suspension

Account Username: @[MY_BANNED_USERNAME]
Registered Email: [REGISTERED_EMAIL]
Registered Phone: [REGISTERED_PHONE]

Dear TikTok Trust & Safety Appeal Board,

I am writing to respectfully appeal the recent suspension placed on my account @[MY_BANNED_USERNAME]. I believe this action was executed inadvertently through an automated moderation false-positive.

Throughout my tenure on TikTok, I have consistently strived to uphold and respect all Community Guidelines. I have never intentionally engaged in harassment, harmful activities, or illegal behavior. 

I kindly request that a human safety specialist perform an in-depth manual review of my account history and recent activity. If any inadvertent misunderstanding occurred, I am fully committed to addressing it immediately.

Thank you for your dedicated service and fair evaluation. I look forward to resuming my presence as a constructive member of the TikTok community.

Sincerely,
[YOUR_FULL_NAME]`,
        banglaInstruction: 'আইডি ভুল করে ব্যান হলে টিকটক ফিডব্যাক ফর্মে গিয়ে এই আবেদনটি আপনার আসল তথ্য দিয়ে পূরণ করে পাঠান।',
        severity: 'High',
        tags: ['Unban Appeal', 'Wrongful Ban', 'Human Review', 'Account Recovery']
      },
      {
        id: 'appeal-hacked-recovery',
        title: 'Hacked & Compromised Account Recovery Request',
        banglaTitle: 'হ্যাকড আইডি রিকভারি ও অ্যাক্সেস পুনরুদ্ধারের আবেদন',
        category: 'account-appeal',
        officialLink: 'https://www.tiktok.com/legal/report/feedback',
        additionalText: `URGENT SECURITY ALERT: Compromised & Hacked Account Recovery

Victim Username: @[HACKED_USERNAME]
Original Email: [ORIGINAL_EMAIL]
Date of Breach: [DATE_HACKED]
Device Used Before Hack: [PHONE_MODEL]

My TikTok account has been maliciously compromised. The unauthorized intruder has altered the associated email address, phone number, and two-factor authentication credentials, locking me out of my profile.

Any recent violating posts or broadcasts made from this account were conducted entirely by the unauthorized intruder, not myself.

Please lock the account to prevent further harm, verify my original account creation details, and send a secure password reset link to my original registered email address.`,
        banglaInstruction: 'আইডি হ্যাক হয়ে ইমেইল ও পাসওয়ার্ড বদলে গেলে এই ফরম্যাট ব্যবহার করে টিকটকের কাছে আবেদন করুন।',
        severity: 'Critical',
        tags: ['Hacked Account', 'Account Recovery', 'Security Breach']
      }
    ]
  }
];
