import { Subscription } from './Subscription';

export class PremiumSubscription implements Subscription {
    monthlyFee = 30;
    minPeriod = 1;
    channels = ["All Channels"];
    features = ["4K Quality", "Catch Up TV", "No Ads"];

    getDescription(): string {
        return `Premium Subscription: $${this.monthlyFee}/month, Min Period: ${this.minPeriod} months, Channels: ${this.channels.join(", ")}, Features: ${this.features.join(", ")}`;
    }
}
