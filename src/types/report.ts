export interface ReportItem {
  id: string;
  title: string;
  banglaTitle: string;
  category: string;
  subCategory?: string;
  officialLink: string;
  additionalText: string;
  banglaInstruction: string;
  severity: 'Critical' | 'High' | 'Medium';
  tags: string[];
  isOfficialForm?: boolean;
  guidelineSection?: string;
  estimatedReviewTime?: string;
  directEmail?: string;
}

export interface ReportFolder {
  id: string;
  name: string;
  banglaName: string;
  description: string;
  banglaDescription: string;
  iconName: string;
  badgeCount?: number;
  items: ReportItem[];
}

export interface CustomUserTemplate {
  id: string;
  folderId: string;
  title: string;
  banglaTitle?: string;
  officialLink: string;
  additionalText: string;
  banglaInstruction?: string;
  createdAt: string;
}

export interface TrackedReport {
  id: string;
  targetHandle: string;
  category: string;
  reportTitle: string;
  submittedAt: string;
  status: 'Pending' | 'Under Review' | 'Banned / Action Taken' | 'Closed';
  notes?: string;
}
