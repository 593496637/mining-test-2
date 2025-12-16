export interface ResourceDetail {
  element: string;
  grade: string;
  metalAmount: string;
}

export interface MineData {
  id: string;
  name: string;
  // Some mines have multiple top-level stats (e.g., Cu mass, Fe mass)
  stats: { label: string; value: string }[];
  details: ResourceDetail[];
}

export interface SummaryItem {
  label: string;
  value: string;
  subValue?: string; // For units like "吨" vs "万吨"
  color?: string; // Optional accent color class
}

export interface LicenseItem {
  company: string;
  scale?: string; // Production scale
  depth?: string; // Mining depth
  area?: string; // Area for exploration
  validity: string;
}

export interface LicenseGroup {
  title: string;
  count: number;
  items: LicenseItem[];
}