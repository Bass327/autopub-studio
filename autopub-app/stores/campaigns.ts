import { create } from 'zustand';
import type { Campaign, CampaignFormat } from '@/types/campaign';

type CampaignsState = {
  campaigns: Campaign[];
  applyToCampaign: (id: string) => void;
  filter: {
    formats: CampaignFormat[];
    maxRadius: number;
    city: string;
  };
  setFilter: (partial: Partial<CampaignsState['filter']>) => void;
  resetFilter: () => void;
};

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Boisson Énergie +',
    brand: 'Energy+',
    city: 'Dakar',
    radiusKm: 15,
    startDate: '2025-09-15',
    endDate: '2025-10-15',
    budget: 2500000,
    formats: ['VINYLE'],
    payPerKm: 250,
    status: 'OPEN',
    vehiclesNeeded: 50,
    description: 'Activation urbaine ciblée sur zones à fort trafic.'
  },
  {
    id: '2',
    name: 'Lancement Produit X',
    brand: 'TechX',
    city: 'Abidjan',
    radiusKm: 20,
    startDate: '2025-10-01',
    endDate: '2025-11-30',
    budget: 4800000,
    formats: ['HYBRIDE'],
    payPerKm: 300,
    status: 'OPEN',
    vehiclesNeeded: 70,
  },
  {
    id: '3',
    name: 'Banky Pay Cashback',
    brand: 'Banky',
    city: 'Dakar',
    radiusKm: 10,
    startDate: '2025-08-01',
    endDate: '2025-08-31',
    budget: 1800000,
    formats: ['LED'],
    payPerKm: 280,
    status: 'CLOSED',
  },
  {
    id: '4',
    name: 'FastFood 2x1',
    brand: 'Snacky',
    city: 'Lomé',
    radiusKm: 25,
    startDate: '2025-09-01',
    endDate: '2025-10-01',
    budget: 1200000,
    formats: ['VINYLE', 'LED'],
    payPerKm: 220,
    status: 'OPEN',
  },
  {
    id: '5',
    name: 'Assurance Auto Safe',
    brand: 'Assurix',
    city: 'Cotonou',
    radiusKm: 30,
    startDate: '2025-09-10',
    endDate: '2025-12-10',
    budget: 3000000,
    formats: ['VINYLE'],
    payPerKm: 210,
    status: 'OPEN',
  },
  {
    id: '6',
    name: 'Data Illimité',
    brand: 'TelcoMax',
    city: 'Abidjan',
    radiusKm: 12,
    startDate: '2025-07-01',
    endDate: '2025-08-15',
    budget: 2000000,
    formats: ['LED'],
    payPerKm: 260,
    status: 'CLOSED',
  },
  {
    id: '7',
    name: 'Festival Urbain',
    brand: 'Ville+ Events',
    city: 'Dakar',
    radiusKm: 40,
    startDate: '2025-11-01',
    endDate: '2025-11-15',
    budget: 1500000,
    formats: ['HYBRIDE'],
    payPerKm: 240,
    status: 'OPEN',
  },
  {
    id: '8',
    name: 'Super Marché Week',
    brand: 'GigaMarket',
    city: 'Bamako',
    radiusKm: 18,
    startDate: '2025-10-05',
    endDate: '2025-10-31',
    budget: 1100000,
    formats: ['VINYLE', 'HYBRIDE'],
    payPerKm: 200,
    status: 'OPEN',
  },
];

const defaultFilter = { formats: [] as CampaignFormat[], maxRadius: 50, city: '' };

export const useCampaignsStore = create<CampaignsState>((set, get) => ({
  campaigns: mockCampaigns,
  filter: defaultFilter,
  setFilter: (partial) => set((s) => ({ filter: { ...s.filter, ...partial } })),
  resetFilter: () => set({ filter: defaultFilter }),
  applyToCampaign: (id: string) => {
    set((state) => ({
      campaigns: state.campaigns.map((c) => (c.id === id ? { ...c, status: 'PENDING' } : c)),
    }));
  },
}));


