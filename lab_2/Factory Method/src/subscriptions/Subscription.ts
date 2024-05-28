export interface Subscription {
    monthlyFee: number;
    minPeriod: number; // in months
    channels: string[];
    features: string[];
    getDescription(): string;
}
