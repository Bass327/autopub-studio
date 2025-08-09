export type CampaignFormat = 'VINYLE' | 'LED' | 'HYBRIDE';

export type CampaignStatus = 'OPEN' | 'CLOSED' | 'PENDING';

export type Campaign = {
  id: string;
  name: string;
  brand: string;
  city: string;
  radiusKm: number;
  startDate: string; // ISO
  endDate: string; // ISO
  budget: number;
  formats: CampaignFormat[];
  payPerKm: number;
  status: CampaignStatus;
  vehiclesNeeded?: number;
  description?: string;
};


