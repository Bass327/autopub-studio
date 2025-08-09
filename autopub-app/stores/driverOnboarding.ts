import { create } from 'zustand';

type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
};

type VehicleInfo = {
  make: string;
  model: string;
  year: string;
  color: string;
  plate: string;
  photoUri?: string;
};

type Preferences = {
  formats: ('VINYLE' | 'LED' | 'HYBRIDE')[];
  maxRadius: number;
  city: string;
};

type DriverOnboardingState = {
  onboardingComplete: boolean;
  personal: PersonalInfo;
  vehicle: VehicleInfo;
  preferences: Preferences;
  updatePersonal: (p: Partial<PersonalInfo>) => void;
  updateVehicle: (v: Partial<VehicleInfo>) => void;
  updatePreferences: (p: Partial<Preferences>) => void;
  setComplete: (val: boolean) => void;
  reset: () => void;
};

const initialState = {
  onboardingComplete: false,
  personal: { fullName: '', email: '', phone: '', birthDate: '' },
  vehicle: { make: '', model: '', year: '', color: '', plate: '' },
  preferences: { formats: [], maxRadius: 50, city: '' },
};

export const useDriverOnboardingStore = create<DriverOnboardingState>((set) => ({
  ...initialState,
  updatePersonal: (p) => set((s) => ({ personal: { ...s.personal, ...p } })),
  updateVehicle: (v) => set((s) => ({ vehicle: { ...s.vehicle, ...v } })),
  updatePreferences: (p) => set((s) => ({ preferences: { ...s.preferences, ...p } })),
  setComplete: (val) => set({ onboardingComplete: val }),
  reset: () => set(initialState),
}));


