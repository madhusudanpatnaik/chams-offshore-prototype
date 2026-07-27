export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  gallery: string[];
  capabilities: string[];
  keyEquipment: string[];
  standards: string[];
  iconName: string;
}

export interface ConstructionSite {
  id: string;
  name: string;
  category: 'Fabrication Yard' | 'Offshore Rig' | 'Anchorage Site' | 'Voyage Vessel' | 'Repair Dock';
  coordinates: [number, number]; // [lat, lng]
  locationName: string;
  status: 'In Progress' | 'Testing & QA' | 'Operational' | 'Scheduled Maintenance';
  progressPercentage: number;
  supervisor: string;
  vesselOrRig?: string;
  activePersonnel: number;
  startDate: string;
  estCompletion: string;
  imageUrl: string;
  description: string;
  safetyDays: number;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time Offshore' | 'Full-time Yard' | 'Contract';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface ClientProject {
  id: string;
  code: string;
  name: string;
  clientName: string;
  siteLocation: string;
  vesselName: string;
  status: 'Fab Phase' | 'Installation' | 'QA Inspection' | 'Handover Ready';
  progress: number;
  startDate: string;
  targetDelivery: string;
  safetyRating: string;
  milestones: { name: string; date: string; completed: boolean }[];
  documents: { title: string; size: string; type: string; date: string }[];
  liveCameraAvailable: boolean;
}

export interface EnquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  vesselOrProjectName: string;
  urgency: 'Standard' | 'Urgent (24h)' | 'Emergency Voyage';
  message: string;
}
